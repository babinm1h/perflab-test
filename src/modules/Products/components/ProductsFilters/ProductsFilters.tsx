import { useMemo } from 'react';
import { SORT_OPTIONS } from '../../constants';
import s from './ProductsFilters.module.scss';

export interface IProductsFiltersProps {
  onChangeSort: (optName: string) => void;
  activeSort: string;
  activeOrder: string;
}

export const ProductsFilters = ({ onChangeSort, activeSort, activeOrder }: IProductsFiltersProps) => {
  const activeSortOption = useMemo(() => {
    return SORT_OPTIONS.find((op) => op.order === activeOrder && op.sort === activeSort);
  }, [activeOrder, activeSort]);
  return (
    <div>
      <select onChange={(e) => onChangeSort(e.target.value)} className={s.select} value={activeSortOption?.name}>
        {SORT_OPTIONS.map((opt) => (
          <option value={opt.name} key={opt.name}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
};
