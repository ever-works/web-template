import Link from 'next/link';
import { siteConfig } from '@/lib/site.config';
import { Container } from '@/components/ui/container';

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                {siteConfig.name.charAt(0)}
              </span>
              <span className="text-lg">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{siteConfig.description}</p>
          </div>

          {siteConfig.footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">{siteConfig.footer.legal}</p>
          <div className="flex gap-5">
            {siteConfig.footer.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
