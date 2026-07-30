
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      id: "tattoo",
      name: "Tätowierungen",
      description: "Individuelle Tattoos in verschiedenen Stilen. Von der Beratung bis zur Nachsorge begleiten wir dich auf dem Weg zu deinem Traum-Tattoo.",
      price_from: "80€",
      duration: "je nach Motiv",
      highlight: true,
      includes: ["Kostenlose Erstberatung", "Custom Design Anfertigung", "Höchste Hygienestandards", "Nachsorge-Anleitung"]
    },
    {
      id: "piercing",
      name: "Piercings",
      description: "Professionelles Stechen von Körper-, Nasen- und Ohrpiercings mit sterilem Equipment.",
      price_from: "40€",
      duration: "ca. 20-30 Minuten",
      highlight: false,
      includes: ["Hochwertiger Erstschmuck", "Ohr- & Nasenpiercings", "Körperpiercings", "Pflegemittel inklusive"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-anthracite relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-gold uppercase tracking-[0.2em] text-sm mb-4">Leistungen</h2>
          <h3 className="font-serif text-4xl md:text-6xl text-light leading-tight">Was wir <span className="italic text-white/80">anbieten</span></h3>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((svc, idx) => (
            <motion.div key={svc.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} className="p-8 md:p-12 border border-white/10 border-l-2 border-l-transparent hover:border-gold group-hover:border-l-gold bg-darker rounded-none relative transition-all duration-500 group hover:-translate-y-1">
              <h4 className="text-2xl font-serif text-light mb-4 group-hover:text-gold transition-colors duration-300">{svc.name}</h4>
              <p className="text-light/70 mb-8">{svc.description}</p>
              
              <div className="mb-8 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-light/50">Ab:</span>
                  <span className="text-gold">{svc.price_from}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-light/50">Dauer:</span>
                  <span className="text-light">{svc.duration}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {svc.includes.map((inc, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-light/70">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                    {inc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
