'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/site.config';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

export function Faq() {
  const { faq } = siteConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-28">
      <Container className="max-w-3xl">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">{faq.title}</h2>
        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
          {faq.items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open}
                >
                  <span className="font-medium">{item.question}</span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-muted-foreground transition-transform',
                      open && 'rotate-180'
                    )}
                  />
                </button>
                {open && <p className="px-6 pb-5 text-sm text-muted-foreground">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
