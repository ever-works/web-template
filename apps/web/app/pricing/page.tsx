import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site.config';
import { Pricing } from '@/components/sections/pricing';
import { Faq } from '@/components/sections/faq';

export const metadata: Metadata = {
  title: 'Pricing',
  description: `Simple, transparent pricing for ${siteConfig.name}.`
};

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <Faq />
    </>
  );
}
