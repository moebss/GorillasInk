import { ArrowRight, Star } from 'lucide-react';
import heroImg from '../images/hero.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-darker overflow-hidden">
      <div className="grid md:grid-cols-12 h-screen">
        {/* Left Side: Image */}
        <div className="md:col-span-7 relative h-full translate-y-2">
          <img src={heroImg} alt="Studio" className="w-full h-full object-cover opacity-60 md:opacity-80" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-darker via-darker/60 to-transparent md:to-darker/20"></div>
        </div>

        {/* Right Side: Content */}
        <div className="md:col-span-5 relative z-10 flex flex-col justify-center px-6 md:px-0 md:-ml-12 mt-20 md:mt-0">
          <div className="max-w-xl">
            <p className="text-gold uppercase tracking-[0.3em] text-sm md:text-base mb-6 text-left">Dein Studio für individuelle Körperkunst in Büdingen</p>
            
            <div className="inline-flex items-center gap-2 mb-8 bg-black/40 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm text-left">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-gold text-gold" />
            ))}
          </div>
          <span className="text-light/90 text-sm font-medium tracking-wide">5,0/5 · 391 Google Bewertungen</span>
        </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-light leading-tight mb-8 text-left">
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
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-light/30 animate-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-gold/50" />
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      </div>
    </section>
  );
}
