import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site.config';
import { Container } from '@/components/ui/container';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with the ${siteConfig.name} team.`
};

export default function ContactPage() {
  return (
    <section className="py-24 sm:py-28">
      <Container className="max-w-xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Let’s talk</h1>
          <p className="mt-4 text-muted-foreground">
            Questions, ideas, or ready to get started? Send us a message and we’ll get right back to
            you.
          </p>
        </div>
        <div className="mt-12">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
