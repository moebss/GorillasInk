import { useState } from 'react';

import { motion } from 'motion/react';
import { Upload, CheckCircle2 } from 'lucide-react';

const BOOKING_CATEGORIES = [
  "Tattoo Erstberatung",
  "Tattoo Termin (Motiv steht)",
  "Ohrpiercing",
  "Nasenpiercing",
  "Körperpiercing",
  "Piercing-Check / Wechsel"
];

const PRICING_INFO = [
  { title: "Tattoos", description: "ab 80€ (Preis je nach Größe und Aufwand)" },
  { title: "Piercings", description: "ab 40€ inkl. sterilem Erstschmuck" },
  { title: "Beratung", description: "Kostenlos und unverbindlich" }
];

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="booking" className="py-32 bg-darker relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-gold uppercase tracking-[0.2em] text-sm mb-4">Termin buchen</h2>
            <h3 className="font-serif text-4xl md:text-6xl text-light leading-tight mb-12">Dein nächstes <span className="italic text-white/80">Kunstwerk</span></h3>
            
            <p className="text-light/70 leading-relaxed mb-12 text-lg">
              Fülle das Formular aus, um einen Termin oder ein Beratungsgespräch anzufragen. Wir melden uns innerhalb von 48 Stunden bei dir.
            </p>
            
            <div className="space-y-6">
              {PRICING_INFO.map((pricing, idx) => (
                <div key={idx} className="border-l-2 border-gold pl-6">
                  <h4 className="text-light font-medium uppercase tracking-wider text-sm mb-2">{pricing.title}</h4>
                  <p className="text-light/50 text-sm">{pricing.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-anthracite p-8 md:p-12 border border-white/5">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <CheckCircle2 className="text-gold w-16 h-16 mb-6" />
                <h4 className="font-serif text-3xl text-light mb-4">Anfrage gesendet</h4>
                <p className="text-light/70">Wir melden uns in Kürze bei dir.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-widest text-light/50 mb-2">Name</label>
                    <input id="name" name="name" type="text" required className="bg-darker border border-white/10 rounded-sm p-4 text-light focus:outline-none focus:border-gold transition-colors w-full" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-light/50 mb-2">E-Mail</label>
                    <input id="email" name="email" type="email" required className="bg-darker border border-white/10 rounded-sm p-4 text-light focus:outline-none focus:border-gold transition-colors w-full" />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-light/50 mb-2">Stil / Kategorie</label>
                    <select className="bg-darker border border-white/10 rounded-sm p-4 text-light focus:outline-none focus:border-gold transition-colors appearance-none w-full">
                      {BOOKING_CATEGORIES.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="size" className="block text-xs uppercase tracking-widest text-light/50 mb-2">Größe (ca.)</label>
                    <input id="size" name="size" type="text" placeholder="z.B. 10x10 cm" className="bg-darker border border-white/10 rounded-sm p-4 text-light focus:outline-none focus:border-gold transition-colors w-full" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="placement" className="block text-xs uppercase tracking-widest text-light/50 mb-2">Körperstelle</label>
                  <input id="placement" name="placement" type="text" placeholder="z.B. Rechter Unterarm" className="bg-darker border border-white/10 rounded-sm p-4 text-light focus:outline-none focus:border-gold transition-colors w-full" />
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-widest text-light/50 mb-2">Beschreibung</label>
                  <textarea rows={4} required className="bg-darker border border-white/10 rounded-sm p-4 text-light focus:outline-none focus:border-gold transition-colors resize-none w-full" placeholder="Beschreibe deine Idee..."></textarea>
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-widest text-light/50 mb-2">Referenzbilder</label>
                  <div className="w-full bg-darker border border-dashed border-white/20 rounded-sm p-8 text-center hover:border-gold transition-colors cursor-pointer group">
                    <Upload className="mx-auto text-light/30 group-hover:text-gold mb-4" size={24} />
                    <p className="text-light/50 text-sm">Klicke oder ziehe Bilder hierher</p>
                  </div>
                </div>
                
                <button type="submit" className="w-full bg-gold text-darker hover:bg-gold-hover transition-all duration-300 px-8 py-4 uppercase tracking-widest text-sm font-medium">
                  Anfrage senden
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
