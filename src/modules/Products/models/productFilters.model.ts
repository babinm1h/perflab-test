import { SortDirectionsEnum } from '@/shared/constants';
import { IProduct } from './product.model';

export interface IProductsFilterOption {
  name: string;
  sort: keyof IProduct | '';
  order: SortDirectionsEnum | '';
}
