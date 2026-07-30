import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2000" alt="Studio" className="w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-b from-darker/60 via-darker/80 to-darker"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <p className="text-gold uppercase tracking-[0.3em] text-sm md:text-base mb-6">Dein Studio für individuelle Körperkunst in Büdingen</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-light leading-tight mb-8">
          GORILLAS INK <br />
          <span className="italic text-white/80">Tattoo · Piercing · Custom Design</span>
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
      <div className="flex flex-col items-center gap-4 mt-16 md:mt-24 absolute bottom-8">
        <span className="text-xs uppercase tracking-[0.2em] text-white/40 rotate-90 mb-8 mt-4">Scroll</span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold"></div>
        </div>
      </div>
    </section>
  );
}
