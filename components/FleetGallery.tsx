import React from "react";
import {
  Music,
  Briefcase,
  Snowflake,
  BatteryCharging,
  UserCheck,
  Star,
} from "lucide-react";

const FleetGallery: React.FC = () => {
  return (
    <section id="armada" className="py-12 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 block">
              Armada Kami
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
              Kenyamanan Kelas Eksekutif
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-right md:text-left leading-relaxed">
            Isuzu Elf Long Giga terbaru. Suspensi empuk, kabin senyap,
            perjalanan jauh terasa lebih singkat dan menyenangkan.
          </p>
        </div>

        {/* Bento Grid Layout - 3 Rows, 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* 1. Main Image - Spans 2 cols, 2 rows */}
          <div className="md:col-span-2 md:row-span-2 relative group rounded-[2.5rem] overflow-hidden shadow-apple min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop"
              alt="Interior Mewah Travel Purworejo Jakarta Hiace/Elf"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="text-brand-orange fill-brand-orange w-4 h-4" />
                  <span className="text-brand-orange text-xs font-bold uppercase tracking-wider">
                    Premium Cabin
                  </span>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  Interior Luas & Bersih
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                  Kapasitas dibatasi (11-14 seat) demi leg-room yang lega.
                  Kebersihan kabin selalu terjaga sebelum keberangkatan.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Driver Profesional */}
          <div className="bg-slate-50 p-6 rounded-[2.5rem] flex flex-col justify-between hover:bg-white hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 group border border-transparent hover:border-orange-100">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-orange shadow-sm group-hover:scale-110 transition-transform duration-300">
              <UserCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg text-brand-dark mb-1">
                Driver Profesional
              </h4>
              <p className="text-sm text-slate-500 leading-snug">
                Ramah, sopan, dan berpengalaman di rute Purworejo-Jakarta.
              </p>
            </div>
          </div>

          {/* 3. AC Ducting */}
          <div className="bg-slate-50 p-6 rounded-[2.5rem] flex flex-col justify-between hover:bg-white hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group border border-transparent hover:border-blue-100">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-500 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Snowflake size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg text-brand-dark mb-1">
                Full AC Ducting
              </h4>
              <p className="text-sm text-slate-500 leading-snug">
                Suhu sejuk merata hingga baris kursi paling belakang.
              </p>
            </div>
          </div>

          {/* 4. USB Charger - Dark Card */}
          <div className="bg-brand-dark p-6 rounded-[2.5rem] flex flex-col justify-between text-white group relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300 border border-white/5">
              <BatteryCharging size={24} />
            </div>
            <div className="relative z-10">
              <h4 className="font-bold text-lg mb-1">USB Charger</h4>
              <p className="text-sm text-slate-400 leading-snug">
                Port charging tersedia di setiap baris. Anti low-batt.
              </p>
            </div>
          </div>

          {/* 5. Audio Video */}
          <div className="bg-slate-50 p-6 rounded-[2.5rem] flex flex-col justify-between hover:bg-white hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 group border border-transparent hover:border-purple-100">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-purple-500 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Music size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg text-brand-dark mb-1">
                Full Entertainment
              </h4>
              <p className="text-sm text-slate-500 leading-snug">
                Musik & Video menemani perjalanan Anda agar tidak bosan.
              </p>
            </div>
          </div>

          {/* 6. Bagasi - Full Width Bottom Row */}
          <div className="md:col-span-4 bg-gradient-to-br from-slate-50 to-white p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-100 shadow-sm group relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute -right-10 -bottom-10 opacity-5 transform rotate-12 pointer-events-none">
              <Briefcase size={200} />
            </div>

            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-brand-orange/10 text-brand-orange rounded-xl">
                  <Briefcase size={24} />
                </div>
                <h4 className="font-bold text-2xl text-brand-dark">
                  Bagasi Luas & Aman
                </h4>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                Bawa oleh-oleh khas Purworejo tanpa khawatir! Armada kami
                dilengkapi kompartemen bagasi belakang yang luas dan terpisah
                dari kabin penumpang. Barang aman, duduk pun nyaman.
              </p>
            </div>

            <div className="relative z-10 hidden md:block">
              <div className="bg-white p-4 rounded-2xl shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-500 border border-slate-100">
                <div className="flex gap-2">
                  <div className="w-16 h-20 bg-slate-200 rounded-lg"></div>
                  <div className="w-16 h-20 bg-brand-orange/20 rounded-lg"></div>
                  <div className="w-16 h-20 bg-slate-800 rounded-lg"></div>
                </div>
                <p className="text-center text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">
                  Luggage Space
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetGallery;
