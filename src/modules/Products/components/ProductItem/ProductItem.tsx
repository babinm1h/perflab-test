import React from 'react';
import { Button } from '@/shared/components/Button';

import s from './ProductItem.module.scss';

interface IProductItemProps {
  title: string;
  image: string;
  price: number;
  onAddToCart: VoidFunction;
  onRemoveFromCart: VoidFunction;
  isInCart: boolean;
}

export const ProductItem = React.memo<IProductItemProps>(
  ({ isInCart, image, price, title, onAddToCart, onRemoveFromCart }) => {
    return (
      <li className={s.item}>
        <span className={s.itemImg}>
          <img src={image} alt={title} />
        </span>
        <span className="">{title}</span>

        <b>{price}$</b>
        {isInCart ? (
          <Button onClick={onRemoveFromCart}>Удалить из корзины</Button>
        ) : (
          <Button onClick={onAddToCart}>Добавить в корзину</Button>
        )}
      </li>
    );
  },
);
