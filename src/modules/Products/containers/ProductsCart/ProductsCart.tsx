import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { cartsSelectors } from '../../selectors/cart.selectors';

import s from './ProductsCart.module.scss';
import { cartActions } from '../../slices/cart.slice';
import { useCallback } from 'react';
import { CartItem } from '../../components/CartItem';

export const ProductsCart = () => {
  const dispatch = useAppDispatch();
  const cartPrice = useAppSelector(cartsSelectors.selectTotalPrice);
  const cartProducts = useAppSelector(cartsSelectors.selectCartData);

  const handleRemoveFromCart = useCallback(
    (id: number) => {
      dispatch(cartActions.removeFromCart(id));
    },
    [dispatch],
  );

  return (
    <div className={s.wrapper}>
      <div className={s.price}>Цена: {cartPrice}$</div>
      {cartProducts.length
        ? cartProducts.map((prod) => (
            <CartItem
              key={prod.id}
              id={prod.id}
              image={prod.image}
              onRemoveFromCart={handleRemoveFromCart}
              price={prod.price}
              title={prod.title}
            />
          ))
        : 'Корзина пуста'}
    </div>
  );
};
