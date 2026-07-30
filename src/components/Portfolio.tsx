import { useState } from 'react';

import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X } from 'lucide-react';

const GALLERY_STYLES = [
  "Alle",
  "Black & Grey",
  "Fineline",
  "Realismus",
  "Traditional",
  "Piercing"
];

const GALLERY_ITEMS = [
  { id: 1, category: "Black & Grey", image: "/GorillasInk/images/portfolio1.png", title: "Löwenkopf", subtitle: "Black & Grey Realism" },
  { id: 2, category: "Fineline", image: "/GorillasInk/images/portfolio2.png", title: "Mandala", subtitle: "Dotwork & Fineline" },
  { id: 3, category: "Traditional", image: "/GorillasInk/images/portfolio3.png", title: "Rose & Dagger", subtitle: "Old School Traditional" },
  { id: 4, category: "Piercing", image: "/GorillasInk/images/portfolio4.png", title: "Septum Piercing", subtitle: "Präzisions-Piercing" },
  { id: 5, category: "Realismus", image: "/GorillasInk/images/portfolio5.png", title: "Porträt", subtitle: "Photo Realism" },
  { id: 6, category: "Black & Grey", image: "/GorillasInk/images/portfolio6.png", title: "Wolf", subtitle: "Dark Blackwork" }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Alle");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeFilter === "Alle" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-32 bg-darker relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-gold uppercase tracking-[0.2em] text-sm mb-4">Portfolio</motion.h2>
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-serif text-4xl md:text-6xl text-light leading-tight mb-12">Unsere <span className="italic text-white/80">Arbeiten</span></motion.h3>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex flex-wrap justify-center gap-4 md:gap-8">
            {GALLERY_STYLES.map(style => (
              <button 
                key={style}
                onClick={() => setActiveFilter(style)}
                className={`uppercase tracking-widest text-xs md:text-sm pb-2 border-b-2 transition-all duration-300 ${activeFilter === style ? 'border-gold text-gold' : 'border-transparent text-light/50 hover:text-light'}`}
              >
                {style}
              </button>
            ))}
          </motion.div>
        </div>
        
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div 
                key={item.id} 
                layout 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.9 }} 
                transition={{ duration: 0.5 }}
                className="group relative aspect-square overflow-hidden cursor-pointer rounded-sm"
                onClick={() => setSelectedImage(item.image)}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 className="text-gold w-8 h-8" />
                </div>
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-gold uppercase tracking-widest text-xs">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-darker/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12" 
              onClick={() => setSelectedImage(null)}
            >
              <button className="absolute top-8 right-8 text-light/50 hover:text-gold"><X size={32} /></button>
              <motion.img 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                src={selectedImage} 
                alt="Enlarged" 
                className="max-w-full max-h-full object-contain rounded-sm shadow-2xl" 
                onClick={e => e.stopPropagation()} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
