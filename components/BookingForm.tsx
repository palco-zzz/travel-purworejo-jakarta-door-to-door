import React, { useState } from "react";
import { generateWhatsAppLink } from "../constants";
import { BookingData } from "../types";
import { Send, Calendar, Users, MapPin, User, Navigation } from "lucide-react";

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingData>({
    name: "",
    date: "",
    seats: 1,
    pickupLocation: "",
    dropoffLocation: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = generateWhatsAppLink(formData);
    window.open(link, "_blank");
  };

  return (
    <section
      id="booking"
      className="py-12 md:py-24 bg-brand-dark relative overflow-hidden"
    >
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-brand-orange/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <div className="text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Siap Berangkat? <br />{" "}
              <span className="text-brand-orange">Amankan Kursi Anda.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Booking mudah via WhatsApp. Cukup isi form, kami akan mengirimkan
              format pesanan yang rapi langsung ke chat admin.
            </p>

            <div className="space-y-6 pt-4">
              {[
                {
                  step: 1,
                  title: "Isi Data",
                  desc: "Lengkapi formulir pemesanan.",
                },
                {
                  step: 2,
                  title: "Kirim WhatsApp",
                  desc: "Klik tombol kirim, otomatis membuka WA.",
                },
                {
                  step: 3,
                  title: "Konfirmasi",
                  desc: "Admin akan mengonfirmasi ketersediaan & harga.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-orange font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative">
            <h3 className="text-2xl font-bold text-brand-dark mb-8">
              Formulir Pemesanan
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div className="group">
                <label
                  htmlFor="name"
                  className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2"
                >
                  Nama Lengkap
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-orange transition-colors"
                    size={20}
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-4 pl-12 pr-4 text-brand-dark font-medium focus:outline-none focus:border-brand-orange/50 focus:bg-white transition-all"
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {/* Date */}
                <div className="group">
                  <label
                    htmlFor="date"
                    className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2"
                  >
                    Tanggal
                  </label>
                  <div className="relative">
                    <Calendar
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-orange transition-colors"
                      size={20}
                    />
                    <input
                      type="date"
                      id="date"
                      name="date"
                      min={new Date().toISOString().split("T")[0]}
                      required
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-4 pl-12 pr-4 text-brand-dark font-medium focus:outline-none focus:border-brand-orange/50 focus:bg-white transition-all"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Seats */}
                <div className="group">
                  <label
                    htmlFor="seats"
                    className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2"
                  >
                    Kursi
                  </label>
                  <div className="relative">
                    <Users
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-orange transition-colors"
                      size={20}
                    />
                    <select
                      id="seats"
                      name="seats"
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-4 pl-12 pr-4 text-brand-dark font-medium focus:outline-none focus:border-brand-orange/50 focus:bg-white transition-all appearance-none cursor-pointer"
                      value={formData.seats}
                      onChange={handleChange}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} Orang
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Pickup Location */}
              <div className="group">
                <label
                  htmlFor="pickupLocation"
                  className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2"
                >
                  Jemput (Purworejo)
                </label>
                <div className="relative">
                  <Navigation
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-orange transition-colors"
                    size={20}
                  />
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    required
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-4 pl-12 pr-4 text-brand-dark font-medium focus:outline-none focus:border-brand-orange/50 focus:bg-white transition-all"
                    placeholder="Alamat Lengkap / Share Loc"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Dropoff Location */}
              <div className="group">
                <label
                  htmlFor="dropoffLocation"
                  className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2"
                >
                  Tujuan (Jakarta/Jabodetabek)
                </label>
                <div className="relative">
                  <MapPin
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-orange transition-colors"
                    size={20}
                  />
                  <input
                    type="text"
                    id="dropoffLocation"
                    name="dropoffLocation"
                    required
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-4 pl-12 pr-4 text-brand-dark font-medium focus:outline-none focus:border-brand-orange/50 focus:bg-white transition-all"
                    placeholder="Alamat Tujuan"
                    value={formData.dropoffLocation}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 flex items-center justify-center gap-2 py-5 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1"
              >
                Booking via WhatsApp <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
