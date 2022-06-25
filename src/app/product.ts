export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: Array<String>;
  category: {name : number};
  quantity: number;
}
