import { siteConfig } from '@/lib/site.config';
import { Container } from '@/components/ui/container';

export function HowItWorks() {
  const { steps } = siteConfig;
  return (
    <section id="how-it-works" data-component="how-it-works" className="py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">{steps.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{steps.title}</h2>
          <p className="mt-4 text-muted-foreground">{steps.subtitle}</p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {steps.items.map((step, i) => (
            <div key={step.title} data-component="step" className="relative">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </div>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
