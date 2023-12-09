import s from './ProductsList.module.scss';
import { IProduct } from '../../models/product.model';
import { ProductItem } from '../ProductItem';

interface IProductsListProps {
  data: IProduct[];
  cartItems: IProduct[];
  onAddToCart: (item: IProduct) => VoidFunction;
  onRemoveFromCart: (id: number) => VoidFunction;
}

export const ProductsList = ({ data, onAddToCart, onRemoveFromCart, cartItems }: IProductsListProps) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.grid}>
        {data.map((prod) => (
          <ProductItem
            key={prod.id}
            image={prod.image}
            price={prod.price}
            title={prod.title}
            onAddToCart={onAddToCart(prod)}
            isInCart={!!cartItems.find((item) => item.id === prod.id)}
            onRemoveFromCart={onRemoveFromCart(prod.id)}
          />
        ))}
      </ul>
    </div>
  );
};
