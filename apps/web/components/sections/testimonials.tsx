import { siteConfig } from '@/lib/site.config';
import { Container } from '@/components/ui/container';

export function Testimonials() {
  const { testimonials } = siteConfig;
  return (
    <section data-component="testimonials" className="border-y border-border bg-muted/30 py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">{testimonials.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{testimonials.title}</h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((t) => (
            <figure
              key={t.author}
              data-component="testimonial-card"
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <blockquote className="flex-1 text-sm leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-6">
                <div className="text-sm font-semibold">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
