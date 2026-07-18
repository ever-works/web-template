# syntax=docker/dockerfile:1.7
# Multi-stage Dockerfile for the Ever Works general-purpose website template
# (Next.js + pnpm/turbo monorepo). Produces a self-contained standalone
# Node server suitable for Kubernetes deployment via the `@ever-works/k8s-plugin`
# (Service targetPort 3000).
#
#   - `pruner`    → `turbo prune @ever-works/web` to isolate the app + its deps.
#   - `installer` → `pnpm install --frozen-lockfile` then `next build` (standalone).
#   - `runner`    → minimal node image running the standalone server on :3000.

ARG NODE_VERSION=22-alpine
ARG PNPM_VERSION=10.31.0
ARG TURBO_VERSION=2.9.14

# ---- base ------------------------------------------------------------------

FROM node:${NODE_VERSION} AS base
RUN corepack enable && \
    corepack prepare pnpm@${PNPM_VERSION} --activate && \
    npm install -g turbo@${TURBO_VERSION}

ENV CI=true
ENV NEXT_TELEMETRY_DISABLED=1

# ---- pruner ----------------------------------------------------------------

FROM base AS pruner
WORKDIR /app
COPY . .
RUN turbo prune @ever-works/web --docker

# ---- installer / builder ---------------------------------------------------

FROM base AS installer
WORKDIR /app

ENV NODE_ENV=build
ENV STANDALONE_BUILD=true
ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN apk add --no-cache git libc6-compat python3 make g++ pkgconfig

COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

# Prefer the internal Verdaccio npm cache when the VERDACCIO_REGISTRY build-arg
# is set (anonymous, in-cluster); empty (e.g. a fork) falls back to public npm.
# The pnpm-lock rewrite is best-effort (integrity hashes still verify).
ARG VERDACCIO_REGISTRY=""
RUN if [ -n "$VERDACCIO_REGISTRY" ]; then \
        echo "registry=${VERDACCIO_REGISTRY}" >> /app/.npmrc && \
        { sed -i "s|https://registry.npmjs.org|${VERDACCIO_REGISTRY%/}|g" /app/pnpm-lock.yaml 2>/dev/null || true; }; \
    fi

RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

COPY --from=pruner /app/out/full/ .

RUN pnpm exec turbo build --filter=@ever-works/web...

# ---- runner ----------------------------------------------------------------

FROM node:${NODE_VERSION} AS runner
WORKDIR /app

ARG GITHUB_REPOSITORY=""
ARG GITHUB_SHA=""
LABEL org.opencontainers.image.source="https://github.com/${GITHUB_REPOSITORY}"
LABEL org.opencontainers.image.revision="${GITHUB_SHA}"
LABEL org.opencontainers.image.title="${GITHUB_REPOSITORY}"

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN apk add --no-cache libc6-compat && \
    mkdir -p /app/apps/web/.next/cache && \
    chown -R node:node /app

COPY --from=installer --chown=node:node /app/apps/web/.next/standalone ./
COPY --from=installer --chown=node:node /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=installer --chown=node:node /app/apps/web/public ./apps/web/public

VOLUME /app/apps/web/.next/cache
USER node
WORKDIR /app/apps/web
EXPOSE 3000
CMD ["node", "server.js"]
