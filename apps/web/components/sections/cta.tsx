import { siteConfig } from '@/lib/site.config';
import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';

export function Cta() {
  const { finalCta } = siteConfig;
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-primary px-6 py-16 text-center text-primary-foreground sm:px-16">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty opacity-90">{finalCta.subtitle}</p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href={finalCta.primary.href} size="lg" variant="secondary">
              {finalCta.primary.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
