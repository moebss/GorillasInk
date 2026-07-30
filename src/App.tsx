
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  return (
    <div className="bg-darker min-h-screen text-light font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Booking />
      <FAQ />
      <Footer />
      <StickyCTA />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
