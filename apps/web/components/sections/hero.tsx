import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site.config';
import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';

export function Hero() {
  const { hero } = siteConfig;
  return (
    <section data-component="hero" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--color-primary)_18%,transparent),transparent)]"
      />
      <Container className="flex flex-col items-center py-24 text-center sm:py-32">
        {hero.badge && (
          <span data-part="badge" className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {hero.badge}
          </span>
        )}
        <h1 data-part="title" className="max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-6xl">
          {hero.title} <span className="text-primary">{hero.highlight}</span>
        </h1>
        <p data-part="subtitle" className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">{hero.subtitle}</p>
        <div data-part="actions" className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={hero.primary.href} size="lg">
            {hero.primary.label}
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
          {hero.secondary && (
            <ButtonLink href={hero.secondary.href} size="lg" variant="secondary">
              {hero.secondary.label}
            </ButtonLink>
          )}
        </div>
      </Container>
    </section>
  );
}
