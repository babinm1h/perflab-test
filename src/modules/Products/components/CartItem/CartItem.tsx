import React from 'react';

import { Button } from '@/shared/components/Button';
import s from './CartItem.module.scss';

interface ICartItemProps {
  onRemoveFromCart: (id: number) => void;
  id: number;
  image: string;
  title: string;
  price: number;
}

export const CartItem = React.memo(({ onRemoveFromCart, id, image, title, price }: ICartItemProps) => {
  return (
    <li className={s.item}>
      <img src={image} alt={title} className={s.image} />
      <span className={s.title}>{title}</span>
      <b>{price}$</b>
      <Button onClick={() => onRemoveFromCart(id)}>Удалить</Button>
    </li>
  );
});
