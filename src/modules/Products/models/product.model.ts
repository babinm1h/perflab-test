export enum ProductCategoriesEnum {
  clothing = 'clothing',
  electronics = 'electronics',
  food = 'food',
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ProductCategoriesEnum;
  image: string;
}
