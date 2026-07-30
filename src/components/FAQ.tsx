import { useState } from 'react';

import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  { question: "Wie buche ich einen Termin bei Gorillas Ink?", answer: "Am einfachsten über das Kontaktformular hier auf der Website oder du kommst direkt im Studio in der Berliner Str. 2 in Büdingen vorbei. Für einen festen Tattoo-Termin ist meist eine kleine Anzahlung nötig." },
  { question: "Macht ihr auch Cover-Ups?", answer: "Ja, wir bieten Cover-Ups an. Da jedes alte Tattoo anders ist, musst du dafür aber zwingend zu einem Beratungsgespräch ins Studio kommen, damit wir prüfen können, was machbar ist." },
  { question: "Wie alt muss ich für ein Tattoo oder Piercing sein?", answer: "Tattoos stechen wir grundsätzlich erst ab 18 Jahren. Piercings können mit schriftlicher Einverständniserklärung und Begleitung der Erziehungsberechtigten auch früher gestochen werden." },
  { question: "Was muss ich vor meinem Termin beachten?", answer: "Komm ausgeschlafen und gut genährt zu deinem Termin. Verzichte 24 Stunden vorher auf Alkohol, Drogen und blutverdünnende Medikamente (wie Aspirin)." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-anthracite relative">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-gold uppercase tracking-[0.2em] text-sm mb-4">FAQ</motion.h2>
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-serif text-4xl md:text-6xl text-light leading-tight">Häufige <span className="italic text-white/80">Fragen</span></motion.h3>
        </div>
        
        <div className="space-y-2">
          {FAQ_ITEMS.map((faq, idx) => (
            <div key={idx} className="border-b border-white/10">
              <button onClick={() => toggle(idx)} className="w-full flex items-center justify-between py-6 text-left focus:outline-none group">
                <span className="font-serif text-xl text-light group-hover:text-gold transition-colors">{faq.question}</span>
                <ChevronDown className={`text-gold transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-light/70 pb-6 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
