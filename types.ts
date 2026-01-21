export interface BookingData {
  name: string;
  date: string;
  seats: number;
  pickupLocation: string;
  dropoffLocation: string;
}

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  route: string;
  comment: string;
  rating: number;
}