import DateGenerator from '@/components/sections/DateGenerator';
import ExampleIdeas from '@/components/sections/ExampleIdeas';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import SaveSharePreview from '@/components/sections/SaveSharePreview';
import Testimonials from '@/components/sections/Testimonials';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Home() {
  return (
    <main>
      <LanguageSwitcher />
      <Hero />
      <HowItWorks />
      <DateGenerator />
      <ExampleIdeas />
      <SaveSharePreview />
      <Testimonials />
      <Footer />
    </main>
  );
}
