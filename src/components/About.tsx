
import { motion } from 'motion/react';
import { PenTool, ShieldCheck } from 'lucide-react';

import aboutImg from '../images/about.png';

export default function About() {
  return (
    <section id="about" className="py-32 bg-darker relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
              <img src={aboutImg} alt="Studio Interior" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-anthracite p-8 border border-white/5 hidden md:block">
              <p className="font-serif text-4xl text-gold mb-2">5+</p>
              <p className="text-sm uppercase tracking-widest text-light/60">Jahre Erfahrung</p>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-gold uppercase tracking-[0.2em] text-sm mb-4">Ãœber das Studio</motion.h2>
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-serif text-4xl md:text-6xl text-light leading-tight mb-12">Leidenschaft unter der Haut.</motion.h3>
            
            <p className="text-light/70 leading-relaxed mb-12 text-lg">
              Gorillas Ink ist deine Anlaufstelle fÃ¼r professionelle Tattoos und Piercings mitten in BÃ¼dingen. Wir legen hÃ¶chsten Wert auf Hygiene, PrÃ¤zision und vor allem darauf, dass dein Tattoo genau deinen Vorstellungen entspricht. Ob feine Linien, Realismus oder dein ganz individuelles Custom Design â€“ bei uns bist du in den besten HÃ¤nden. Wir beraten dich umfassend und setzen deine Ideen mit Leidenschaft um.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <PenTool size={32} className="text-gold mb-6" />
                <h4 className="text-light font-medium uppercase tracking-wider text-sm mb-3">Custom Design</h4>
                <p className="text-light/50 text-sm leading-relaxed">Dein Tattoo ist einzigartig. Wir entwerfen individuelle Motive ganz nach deinen WÃ¼nschen.</p>
              </div>
              <div className="flex flex-col">
                <ShieldCheck size={32} className="text-gold mb-6" />
                <h4 className="text-light font-medium uppercase tracking-wider text-sm mb-3">HÃ¶chste Hygiene</h4>
                <p className="text-light/50 text-sm leading-relaxed">Wir arbeiten nach strengsten hygienischen Standards fÃ¼r deine Sicherheit und optimale Heilung.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

