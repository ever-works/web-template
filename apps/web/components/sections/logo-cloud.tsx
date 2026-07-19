import { siteConfig } from '@/lib/site.config';
import { Container } from '@/components/ui/container';

export function LogoCloud() {
  return (
    <section data-component="logo-cloud" className="border-y border-border bg-muted/30 py-12">
      <Container>
        <p className="text-center text-sm text-muted-foreground">Trusted by fast-moving teams</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70">
          {siteConfig.logos.map((logo) => (
            <span key={logo} className="text-lg font-semibold tracking-tight text-muted-foreground">
              {logo}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
