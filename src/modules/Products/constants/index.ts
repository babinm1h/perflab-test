import { SortDirectionsEnum } from '@/shared/constants';
import { IProductsFilterOption } from '../models/productFilters.model';

export const SORT_OPTIONS: IProductsFilterOption[] = [
  { name: 'По умолчанию', sort: '', order: '' },
  { name: 'По убыванию цены', sort: 'price', order: SortDirectionsEnum.desc },
  { name: 'По возрастанию цены', sort: 'price', order: SortDirectionsEnum.asc },
];
