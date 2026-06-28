export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
  spicyLevel?: 0 | 1 | 2 | 3;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
  tag?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  category: "all" | "Ambiance" | "Food" | "Desserts" | "Interior" | "Chef" | "Drinks";
  alt: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequest?: string;
}
