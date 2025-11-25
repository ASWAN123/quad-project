// app/page.tsx - CLEAN VERSION
import Hero from './components/Hero';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-amber-50 to-stone-50">
      {/* REMOVED Head component - layout handles SEO */}
      <Hero />
      <Experience />
      <Gallery />
      <Testimonials />
      <CTASection />
    </div>
  );
}