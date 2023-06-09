export interface ProductInterface {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  category: string[];
  price: number;
  discount: number;
  stock: number;
}
