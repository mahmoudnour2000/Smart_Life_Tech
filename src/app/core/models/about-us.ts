export interface Goal {
  text: string;
}

export interface ValueCard {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}
export interface ProjectCard {
  image: string;
  imageAlt: string;
  number: string;
  label: string;
}

export interface Testimonial {
  image: string;
  imageAlt: string;
  quote: string;
  name: string;
  position: string;
}

export interface Slide {
  type: 'video' | 'image';
  url: string;
  thumbnail?: string;
  title: string;
}