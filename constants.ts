import { BookingData } from './types';

// Replace with the actual admin number
export const WHATSAPP_NUMBER = "6282138564023"; 

export const PICKUP_POINTS = [
  "Purworejo Kota",
  "Kutoarjo",
  "Butuh",
  "Grabag",
  "Ngombol",
  "Purwodadi",
  "Bagelen",
  "Banyuurip",
  "Bener / Loano"
];

export const DROPOFF_POINTS = [
  "Jakarta Timur",
  "Jakarta Selatan",
  "Jakarta Pusat",
  "Jakarta Barat",
  "Jakarta Utara",
  "Bekasi",
  "Depok",
  "Tangerang",
  "Bogor",
  "Bandara Soetta"
];

export const generateWhatsAppLink = (data: BookingData): string => {
  const message = `Halo Admin, saya mau pesan Travel arah Jakarta untuk sore ini/besok.

Nama: ${data.name}
Jumlah Orang: ${data.seats}
Jemput: ${data.pickupLocation}
Tujuan: ${data.dropoffLocation}
Tanggal: ${data.date}

Mohon info harga dan ketersediaan kursinya.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};