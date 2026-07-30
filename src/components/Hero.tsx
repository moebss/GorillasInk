
import { ArrowRight } from 'lucide-react';
import heroImg from '../images/hero.png';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Studio" className="w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-b from-darker/60 via-darker/80 to-darker"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <p className="text-gold uppercase tracking-[0.3em] text-sm md:text-base mb-6">Dein Studio fÃ¼r individuelle KÃ¶rperkunst in BÃ¼dingen</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-light leading-tight mb-8">
          GORILLAS INK <br />
          <span className="italic text-white/80">Tattoo Â· Piercing Â· Custom Design</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <a href="#booking" className="group flex items-center justify-center gap-3 bg-gold text-darker hover:bg-gold-hover transition-all duration-300 px-8 py-4 uppercase tracking-widest text-sm font-medium">
            Termin anfragen <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#portfolio" className="flex items-center justify-center gap-3 border border-white/20 text-light px-8 py-4 uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition-all duration-300">
            Portfolio ansehen
          </a>
        </div>
      </div>
      </section>
  );
}

