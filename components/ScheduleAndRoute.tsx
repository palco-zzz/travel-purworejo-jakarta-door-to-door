import React from "react";
import { Clock, MapPin, Navigation, Car, Home } from "lucide-react";
import { PICKUP_POINTS, DROPOFF_POINTS } from "../constants";

const ScheduleAndRoute: React.FC = () => {
  return (
    <section id="schedule" className="py-12 md:py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-6">
            Rute & Jadwal
          </h2>
          <p className="text-lg text-slate-500">
            Perjalanan malam yang nyaman. Tidur nyenyak di jalan, bangun segar
            di tujuan.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Timeline / Route Visualization (Left - Span 5) */}
          <div className="lg:col-span-5 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-apple relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <h3 className="text-2xl font-bold text-brand-dark mb-8 relative z-10">
              Timeline Perjalanan
            </h3>

            <div className="relative pl-4 z-10">
              {/* Vertical Line */}
              <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-100"></div>

              {/* Step 1 */}
              <div className="relative flex gap-6 pb-12 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shadow-sm flex-shrink-0 z-10 group-hover:scale-110 transition-transform bg-white border border-brand-orange/20">
                  <Home size={24} />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold mb-2">
                    16.00 - 17.00 WIB
                  </span>
                  <h4 className="text-lg font-bold text-brand-dark">
                    Penjemputan
                  </h4>
                  <p className="text-slate-500 text-sm mt-1">
                    Tim kami menjemput Anda di depan rumah (Area Purworejo &
                    Sekitarnya).
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-6 pb-12 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm flex-shrink-0 z-10 bg-white border border-slate-100">
                  <Car size={24} />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-2">
                    Perjalanan
                  </span>
                  <h4 className="text-lg font-bold text-brand-dark">
                    Menuju Jakarta
                  </h4>
                  <p className="text-slate-500 text-sm mt-1">
                    Via Tol Trans Jawa & Jalur Selatan. Istirahat 1x di Rest
                    Area.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 shadow-sm flex-shrink-0 z-10 bg-white border border-green-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold mb-2">
                    04.00 WIB (Estimasi)
                  </span>
                  <h4 className="text-lg font-bold text-brand-dark">
                    Tiba di Tujuan
                  </h4>
                  <p className="text-slate-500 text-sm mt-1">
                    Pengantaran ke alamat tujuan di Jabodetabek.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Area Coverage (Right - Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Card Purworejo */}
            <div className="bg-brand-dark rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full opacity-10 blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="text-brand-orange" />
                  <h3 className="text-2xl font-bold">Area Penjemputan</h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {PICKUP_POINTS.map((point, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors cursor-default"
                    >
                      <span className="text-sm font-medium text-slate-200">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Jabodetabek */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-apple border border-slate-100 flex-grow">
              <div className="flex items-center gap-3 mb-6">
                <Navigation className="text-blue-600" />
                <h3 className="text-2xl font-bold text-brand-dark">
                  Area Pengantaran
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {DROPOFF_POINTS.map((point, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-slate-600 text-sm font-medium hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-default"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleAndRoute;
