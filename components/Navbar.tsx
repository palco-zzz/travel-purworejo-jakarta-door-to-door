import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsOpen(false);
      // Adjusted offset to match visual navbar height + small buffer
      // 120px was too large creating a gap, 85px sits tighter to the section
      const navbarHeight = 85;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-0 py-4 ${
          scrolled ? "pt-4" : "pt-6"
        }`}
      >
        <div
          className={`max-w-5xl mx-auto rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-white/70 backdrop-blur-xl border border-white/20 shadow-apple py-3 px-6"
              : "bg-transparent py-4 px-4"
          }`}
        >
          <div className="flex justify-between items-center">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="flex items-center gap-1 group"
            >
              <span
                className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}
              >
                Travel<span className="text-brand-orange">Pwr.</span>
              </span>
            </a>

            {/* Desktop Menu */}
            <div
              className={`hidden md:flex items-center space-x-1 p-1 rounded-full ${scrolled ? "bg-slate-100/50" : "bg-white/10 backdrop-blur-sm"}`}
            >
              {[
                ["Beranda", "#home"],
                ["Jadwal", "#schedule"],
                ["Armada", "#armada"],
                ["Testimoni", "#testimonials"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => scrollToSection(e, href)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    scrolled
                      ? "text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#booking"
                onClick={(e) => scrollToSection(e, "#booking")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-0.5 ${
                  scrolled
                    ? "bg-brand-dark text-white hover:bg-slate-800"
                    : "bg-brand-orange text-white hover:bg-orange-600"
                }`}
              >
                Pesan Tiket <ArrowRight size={16} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
                className={`p-2 rounded-full ${scrolled ? "text-slate-900 bg-slate-100" : "text-white bg-white/10"}`}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-xl md:hidden flex items-center justify-center p-4 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div
          className={`w-full max-w-sm space-y-4 text-center transform transition-all duration-300 ease-out ${
            isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
          }`}
        >
          <h3 className="text-white/50 text-sm font-medium uppercase tracking-widest mb-8">
            Menu Navigasi
          </h3>
          {[
            ["Beranda", "#home"],
            ["Jadwal & Rute", "#schedule"],
            ["Armada", "#armada"],
            ["Testimoni", "#testimonials"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={(e) => scrollToSection(e, href)}
              className="block text-2xl font-bold text-white hover:text-brand-orange transition-colors py-2 cursor-pointer"
            >
              {label}
            </a>
          ))}
          <div className="pt-8">
            <a
              href="#booking"
              onClick={(e) => scrollToSection(e, "#booking")}
              className="inline-block w-full bg-brand-orange text-white px-8 py-4 rounded-2xl font-bold shadow-glow text-lg cursor-pointer"
            >
              Pesan Tiket Sekarang
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
