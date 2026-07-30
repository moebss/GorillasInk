import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const OPENING_HOURS = [
  { days: "Montag – Freitag", hours: "10:00 – 18:00" },
  { days: "Samstag", hours: "10:00 – 13:00" },
  { days: "Sonntag", hours: "Geschlossen", dimmed: true }
];

export default function Footer() {
  return (
    <footer className="bg-darker pt-32 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <span className="font-serif text-3xl tracking-wider text-light">
                GORILLAS<span className="text-gold">INK</span>
              </span>
            </a>
            <p className="text-light/50 text-sm leading-relaxed mb-8">Gorillas Ink – Professionelles Tattoo- und Piercing-Studio in Büdingen. Wir stechen deine Ideen mit Leidenschaft.</p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/gorillas_ink/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-light/50 hover:text-gold hover:border-gold transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-light/50 hover:text-gold hover:border-gold transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-xl text-light mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-light/50 text-sm">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span>Berliner Str. 2<br />63654 Büdingen<br />Deutschland</span>
              </li>
              <li className="flex items-center gap-3 text-light/50 text-sm">
                <Phone size={18} className="text-gold shrink-0" />
                <a href="tel:+491234567890" className="hover:text-gold transition-colors">+49 (0) 123 456 7890</a>
              </li>
              <li className="flex items-center gap-3 text-light/50 text-sm">
                <Mail size={18} className="text-gold shrink-0" />
                <a href="mailto:info@gorillas-ink.de" className="hover:text-gold transition-colors">info@gorillas-ink.de</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl text-light mb-6">Öffnungszeiten</h4>
            <ul className="space-y-4 text-sm">
              {OPENING_HOURS.map((hours, idx) => (
                <li key={idx} className={`flex justify-between border-b border-white/5 pb-2 ${hours.dimmed ? 'text-light/40' : 'text-light/70'}`}>
                  <span>{hours.days}</span>
                  <span>{hours.hours}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl text-light mb-6">Rechtliches</h4>
            <ul className="space-y-4 text-sm flex flex-col">
              <a href="#" className="text-light/50 hover:text-gold transition-colors">Impressum</a>
              <a href="#" className="text-light/50 hover:text-gold transition-colors">Datenschutz</a>
              <a href="#" className="text-light/50 hover:text-gold transition-colors">AGB</a>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-light/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Gorillas Ink. Alle Rechte vorbehalten.</p>
          <p>Made with ♥ by Gorillas Ink</p>
        </div>
      </div>
    </footer>
  );
}
