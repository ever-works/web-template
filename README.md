# Ever Works — Website Template (Next.js)

A general-purpose **website** starter for **marketing sites, landing pages, and content-driven
sites** — the non-directory counterpart to
[`directory-web-template`](https://github.com/ever-works/directory-web-template). Built with
**Next.js (App Router) + React 19 + Tailwind CSS v4**, it ships a complete, production-ready
marketing site you can rebrand in minutes.

> Part of the [Ever Works](https://ever.works) template family. Ever Works generates and deploys
> websites from templates like this one — pick this template for a **Landing Page**, **Blog**, or
> general **Website** Work (use `directory-web-template` / `directory-web-minimal-template` for
> directory/listing sites).

## What’s inside

- **Landing page** composed of ready-made sections: hero, logo cloud, features, how-it-works,
  testimonials, pricing, FAQ, and a final CTA.
- **Pages**: Home, About, Pricing, Contact (with a form), and a Markdown-powered **Blog**.
- **One config to rebrand everything** — `apps/web/lib/site.config.ts` holds all copy, navigation,
  pricing, testimonials, and footer. Edit it (by hand or via Ever Works AI generation) and the whole
  site updates.
- **Light & dark themes** (system-aware, with a toggle), responsive layout, and SEO built in
  (`sitemap.ts`, `robots.ts`, Open Graph metadata).
- **No database, auth, or payments** — a clean canvas. Add only what you need.

## Tech stack

| | |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| Styling | Tailwind CSS v4 |
| Icons | lucide-react |
| Content | Markdown blog via `gray-matter` + `react-markdown` |
| Tooling | pnpm workspaces + Turborepo, TypeScript |

## Getting started

```bash
pnpm install
pnpm dev            # http://localhost:3000
```

Build for production:

```bash
pnpm build
pnpm --filter @ever-works/web start
```

## Customize

1. Edit **`apps/web/lib/site.config.ts`** — name, tagline, nav, hero, features, pricing, FAQ, footer.
2. Adjust the design tokens (colors, radius, fonts) in **`apps/web/app/globals.css`** (`@theme`).
3. Add blog posts as Markdown files in **`apps/web/content/blog/`** (frontmatter: `title`,
   `description`, `date`, `author`).
4. Wire the contact form in **`apps/web/components/contact-form.tsx`** to your email/endpoint.

## Deploy

A production `Dockerfile` is included — it produces a standalone Next.js server on port `3000`,
ready for Kubernetes (the Ever Works `@ever-works/k8s-plugin`) or any container host. It also builds
on Vercel and other Next.js hosts with no changes.

## License

[AGPL-3.0](./LICENSE.md) © [Ever Co. LTD](https://ever.co)
