import { Check } from 'lucide-react';
import { siteConfig } from '@/lib/site.config';
import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Pricing() {
  const { pricing } = siteConfig;
  return (
    <section id="pricing" className="py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">{pricing.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{pricing.title}</h2>
          <p className="mt-4 text-muted-foreground">{pricing.subtitle}</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-3">
          {pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'flex flex-col rounded-2xl border p-8',
                plan.highlighted
                  ? 'border-primary bg-card shadow-lg ring-1 ring-primary'
                  : 'border-border bg-card'
              )}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href={plan.cta.href}
                variant={plan.highlighted ? 'primary' : 'secondary'}
                className="mt-8 w-full"
              >
                {plan.cta.label}
              </ButtonLink>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
