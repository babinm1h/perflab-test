import { SortDirectionsEnum } from '@/shared/constants';
import { IProduct } from '../models/product.model';

export const sortProducts = (data: IProduct[], sort: keyof IProduct, order: SortDirectionsEnum) => {
  const isAsc = order === SortDirectionsEnum.asc;

  return [...data].sort((a, b) => {
    if (sort === 'price') {
      return isAsc ? a[sort] - b[sort] : b[sort] - a[sort];
    } else {
      return isAsc
        ? a[sort].toString().toLocaleLowerCase().localeCompare(b[sort].toString().toLocaleLowerCase())
        : b[sort].toString().toLocaleLowerCase().localeCompare(a[sort].toString().toLocaleLowerCase());
    }
  });
};
