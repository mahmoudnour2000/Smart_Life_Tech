export interface ProductCard {
  id: string;
  image: string;
  title: string;
  description: string;
  category?: string; // للفلترة
}

export interface FilterTab {
  label: string;
  value: string;
}