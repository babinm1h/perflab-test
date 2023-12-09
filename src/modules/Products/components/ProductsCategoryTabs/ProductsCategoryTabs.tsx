import React from 'react';
import classNames from 'classnames';
import { ProductCategoriesEnum } from '../../models/product.model';

import s from './ProductsCategoryTabs.module.scss';

const CATEGORIES_TABS = [
  { value: ProductCategoriesEnum.electronics, name: 'Электроника' },
  { value: ProductCategoriesEnum.clothing, name: 'Одежда' },
  { value: ProductCategoriesEnum.food, name: 'Еда' },
];

interface IProductsCategoryTabsProps {
  activeCategory: ProductCategoriesEnum;
  handleChangeCategory: (category: ProductCategoriesEnum) => VoidFunction;
}

export const ProductsCategoryTabs = ({ activeCategory, handleChangeCategory }: IProductsCategoryTabsProps) => {
  return (
    <div className={s.tabs}>
      {CATEGORIES_TABS.map((cat) => {
        return (
          <button
            className={classNames(s.tab, { [s.active]: activeCategory === cat.value })}
            key={cat.value}
            onClick={handleChangeCategory(cat.value)}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
};
