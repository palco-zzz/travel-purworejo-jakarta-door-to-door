import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-28 md:pt-24 md:pb-12 rounded-t-[2rem] md:rounded-t-[3rem] mt-[-3rem] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12 md:mb-16 text-center md:text-left">
          {/* Brand (Span 5) */}
          <div className="md:col-span-5">
            <h3 className="text-3xl font-bold mb-6 tracking-tight">
              Travel<span className="text-brand-orange">Pwr.</span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm mx-auto md:mx-0 text-lg">
              Solusi perjalanan darat premium dari Purworejo ke Jakarta.
              Kenyamanan dan keselamatan prioritas utama.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-orange transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-orange transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links (Span 3) */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold mb-6">Menu</h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-brand-orange transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="hover:text-brand-orange transition-colors"
                >
                  Jadwal & Rute
                </a>
              </li>
              <li>
                <a
                  href="#armada"
                  className="hover:text-brand-orange transition-colors"
                >
                  Armada
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="hover:text-brand-orange transition-colors"
                >
                  Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Contact (Span 4) */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-bold mb-6">Kontak</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <Phone className="w-6 h-6 text-brand-orange flex-shrink-0" />
                <div>
                  <p className="font-bold text-white">0821-3856-4023</p>
                  <p className="text-sm">WhatsApp Available 24 Jam</p>
                </div>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-orange flex-shrink-0" />
                <div>
                  <p className="font-bold text-white">Kantor Pusat</p>
                  <p className="text-sm">Jl. Raya Purworejo - Kutoarjo KM 5</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
          <p>
            &copy; {new Date().getFullYear()} Travel Purworejo Jakarta. Premium
            Door-to-Door.
          </p>
          <a
            href="https://instagram.com/zxenxi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Designed by ZXENXI
          </a>

          {/* <p>Designed by ZXENXI</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
