import {
  BarChart3,
  Headphones,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Zap,
  type LucideIcon
} from 'lucide-react';
import { siteConfig } from '@/lib/site.config';
import { Container } from '@/components/ui/container';

// Icons referenced by name from site.config.ts. Add more here as needed.
const ICONS: Record<string, LucideIcon> = {
  Zap,
  ShieldCheck,
  Sparkles,
  BarChart3,
  Puzzle,
  Headphones
};

export function Features() {
  const { features } = siteConfig;
  return (
    <section id="features" data-component="features" className="py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">{features.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{features.title}</h2>
          <p className="mt-4 text-muted-foreground">{features.subtitle}</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item) => {
            const Icon = ICONS[item.icon] ?? Sparkles;
            return (
              <div
                key={item.title}
                data-component="feature-card"
                className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div data-part="icon" className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 data-part="title" className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p data-part="description" className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
