import React from "react";
import { ArrowDown, Check, ShieldCheck, Clock } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 85; // Adjusted to 85px for better alignment
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
    <div
      id="home"
      className="relative min-h-[95vh] flex items-center bg-slate-900 overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem]"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero.png"
          // src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
          alt="Travel Landscape"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        {/* Gradient Overlay for Fade Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 pl-1 pr-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors cursor-default">
              <span className="bg-brand-orange text-white text-xs px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                Cepat
              </span>
              <span>Rute Via Tol Trans Jawa</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.9]">
              Purworejo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-300">
                Jakarta.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed font-light">
              Layanan travel{" "}
              <span className="text-white font-medium">Door-to-Door</span>{" "}
              eksekutif. Jemput depan rumah, antar sampai tujuan. Tanpa repot,
              tanpa oper.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#booking"
                onClick={(e) => scrollToSection(e, "#booking")}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-brand-surface transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer"
              >
                Pesan Sekarang
              </a>
              <a
                href="#schedule"
                onClick={(e) => scrollToSection(e, "#schedule")}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-all cursor-pointer"
              >
                Lihat Jadwal
              </a>
            </div>

            <div className="flex items-center gap-6 pt-8 text-slate-400 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Check className="text-brand-orange" size={16} />
                <span>Pasti Berangkat</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-brand-orange" size={16} />
                <span>Full AC Ducting</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-brand-orange" size={16} />
                <span>Via Tol Trans Jawa</span>
              </div>
            </div>
          </div>

          {/* Floating Glass Cards / Visuals */}
          <div className="hidden lg:flex flex-col gap-6 relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl animate-pulse"></div>

            {/* Card 1 */}
            <div
              className="glass-dark p-6 rounded-3xl self-end max-w-xs transform translate-y-8 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Berangkat Sore</h4>
                  <p className="text-slate-400 text-xs">Pukul 16.00 WIB</p>
                </div>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-1.5 mb-2">
                <div className="bg-brand-orange w-3/4 h-1.5 rounded-full"></div>
              </div>
              <p className="text-slate-400 text-xs">On Time Performance</p>
            </div>

            {/* Card 2 */}
            <div className="glass-panel p-6 rounded-3xl max-w-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                    Rute Populer
                  </p>
                  <h3 className="text-slate-900 font-bold text-2xl">
                    Kutoarjo <span className="text-brand-orange">→</span>{" "}
                    Jakarta
                  </h3>
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                  Available
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://i.pravatar.cc/100?img=1"
                    alt=""
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://i.pravatar.cc/100?img=2"
                    alt=""
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://i.pravatar.cc/100?img=3"
                    alt=""
                  />
                </div>
                <span className="text-slate-500 text-sm">
                  12+ Penumpang hari ini
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div
          onClick={(e) => scrollToSection(e, "#schedule")}
          className="flex flex-col items-center gap-2 text-white/50 animate-bounce cursor-pointer hover:text-white transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
