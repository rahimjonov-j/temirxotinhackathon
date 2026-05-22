import Nav from './components/Nav';
import Hero from './components/Hero';
import SosSection from './components/SosSection';
import ServicesSection from './components/ServicesSection';
import PaymentSection from './components/PaymentSection';
import Timeline from './components/Timeline';
import Stats from './components/Stats';
import PricingSection from './components/PricingSection';
import Cta from './components/Cta';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SosSection />
        <ServicesSection />
        <PaymentSection />
        <Timeline />
        <Stats />
        <PricingSection />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
