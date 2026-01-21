import React from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Pak Bambang",
    from: "Kutoarjo",
    to: "Bekasi",
    text: "Alhamdulillah sampai tujuan dengan selamat. Drivernya sopan, bawa mobilnya halus. Jemputnya juga tepat waktu. Matur nuwun.",
    stars: 5,
    initial: "B",
  },
  {
    name: "Ibu Siti",
    from: "Bruno",
    to: "Lebak Bulus",
    text: "Senang sekali ada travel yang mau jemput sampai ke dalam desa di Bruno. Mobilnya bersih dan AC-nya dingin. Recommended!",
    stars: 5,
    initial: "S",
  },
  {
    name: "Mas Adi",
    from: "Purworejo Kota",
    to: "Kampung Rambutan",
    text: "Kursinya nyaman bisa rebahan, jadi bisa tidur sepanjang jalan. Tahu-tahu sudah sampai Jakarta pagi-pagi.",
    stars: 5,
    initial: "A",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-12 md:py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 block">
            Testimoni
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4 tracking-tight">
            Apa Kata Penumpang?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-[2rem] shadow-apple hover:shadow-xl transition-shadow border border-slate-100 relative group"
            >
              <Quote className="absolute top-8 right-8 text-slate-100 w-12 h-12 group-hover:text-brand-orange/10 transition-colors" />

              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-brand-orange fill-brand-orange"
                  />
                ))}
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xl">
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">{review.name}</h4>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    {review.from} → {review.to}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
