import { Hero } from '@/components/sections/hero';
import { LogoCloud } from '@/components/sections/logo-cloud';
import { Features } from '@/components/sections/features';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Pricing } from '@/components/sections/pricing';
import { Testimonials } from '@/components/sections/testimonials';
import { Faq } from '@/components/sections/faq';
import { Cta } from '@/components/sections/cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
    </>
  );
}
