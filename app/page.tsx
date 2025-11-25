
// pages/index.js
import Head from 'next/head';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';

export default function PremiumAdventures() {


  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-amber-50 to-stone-50">
      
      <Head>
        <title>quadCamelMarrakesh | Luxury Desert Experiences</title>
        <meta name="description" content="Premium quad biking and camel trekking in Marrakech" />
      </Head>




    <Hero/>


    <Experience/>
    <Gallery/>
    <Testimonials/>
    <CTASection/>

    </div>
  );
}