import Nav from './components/Nav';
import Hero from './components/Hero';
import Editorial from './components/Editorial';
import VinBlueprint from './components/VinBlueprint';
import Timeline from './components/Timeline';
import Stats from './components/Stats';
import Cta from './components/Cta';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Editorial />
        <VinBlueprint />
        <Timeline />
        <Stats />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
