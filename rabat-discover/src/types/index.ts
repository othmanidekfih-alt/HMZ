export type SpotCategory = 'nature' | 'viewpoint' | 'sports' | 'activities';

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Spot {
  id: string;
  name: string;
  category: SpotCategory;
  lat: number;
  lng: number;
  description: string;
  images: string[];
  reviews: Review[];
  rating: number;
  activities?: string[];
  bestTimeToVisit?: string;
  accessibility?: string;
}

export interface MapCenter {
  lat: number;
  lng: number;
  zoom: number;
}
