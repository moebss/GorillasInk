
import { motion } from 'motion/react';

const PROCESS_STEPS = [
  { step: "01", title: "Beratung & Idee", description: "Du schreibst uns oder kommst vorbei. Wir besprechen dein Motiv, die Stelle und die Größe deines neuen Tattoos." },
  { step: "02", title: "Design & Anzahlung", description: "Wir erstellen dein individuelles Design. Nach einer Anzahlung fixieren wir deinen Stech-Termin." },
  { step: "03", title: "Die Session", description: "In entspannter Atmosphäre stechen wir dein Tattoo. Hygiene und dein Wohlbefinden stehen dabei an erster Stelle." },
  { step: "04", title: "Pflege & Abheilung", description: "Du bekommst von uns alle Infos und Produkte für die richtige Nachsorge, damit dein Tattoo perfekt abheilt." }
];

export default function Process() {
  return (
    <section className="py-32 bg-anthracite relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <h2 className="text-gold uppercase tracking-[0.2em] text-sm mb-4">Ablauf</h2>
          <h3 className="font-serif text-4xl md:text-6xl text-light leading-tight">Dein Weg zum <span className="italic text-white/80">Tattoo</span></h3>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {PROCESS_STEPS.map((proc, idx) => (
            <motion.div key={proc.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} className="relative">
              <div className="text-6xl font-serif text-white/5 mb-6">{proc.step}</div>
              <h4 className="text-xl font-serif text-gold mb-4">{proc.title}</h4>
              <p className="text-light/70 text-sm leading-relaxed">{proc.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
