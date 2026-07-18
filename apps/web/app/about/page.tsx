import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site.config';
import { Container } from '@/components/ui/container';
import { Cta } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn more about ${siteConfig.name} and the team behind it.`
};

const values = [
  { title: 'Customer obsessed', body: 'Every decision starts with the people we serve.' },
  { title: 'Ship with craft', body: 'We sweat the details so the experience feels effortless.' },
  { title: 'Move fast, stay kind', body: 'Speed and empathy are not a trade-off — they compound.' }
];

export default function AboutPage() {
  return (
    <>
      <section className="py-24 sm:py-28">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold text-primary">Our story</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            We’re building the tools we always wished we had.
          </h1>
          <div className="mt-8 space-y-5 text-lg text-muted-foreground">
            <p>
              {siteConfig.name} started with a simple frustration: launching something great took far
              too long. Too many tools, too much glue, too little time to focus on what matters.
            </p>
            <p>
              So we set out to build a platform that gets out of your way — beautifully designed,
              fast by default, and ready the moment you are. Today, teams of every size use{' '}
              {siteConfig.name} to ship faster and grow with confidence.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Cta />
    </>
  );
}
