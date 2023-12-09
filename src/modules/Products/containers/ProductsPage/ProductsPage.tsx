import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { ProductsList } from '../../components/ProductsList';
import { IProduct } from '../../models/product.model';
import { ProductsCategoryTabs } from '../../components/ProductsCategoryTabs';
import { Pagination } from '@/shared/components/Pagination';
import { Spinner } from '@/shared/components/Spinner';
import { ProductsFilters } from '../../components/ProductsFilters';
import { cartActions } from '../../slices/cart.slice';
import { cartsSelectors } from '../../selectors/cart.selectors';
import { useProductsPageFilters } from '../../hooks';

import s from './ProductsPage.module.scss';

export const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const cartData = useAppSelector(cartsSelectors.selectCartData);

  const {
    handleChangeCategory,
    handleChangePage,
    handleChangeSort,
    pages,
    productsError,
    productsLoading,
    productsToShow,
    activeCategory,
    activePage,
    activeSort,
  } = useProductsPageFilters();

  const handleAddToCart = useCallback(
    (item: IProduct) => () => {
      dispatch(cartActions.addToCart(item));
    },
    [dispatch],
  );

  const handleRemoveFromCart = useCallback(
    (id: number) => () => {
      dispatch(cartActions.removeFromCart(id));
    },
    [dispatch],
  );

  if (productsLoading) {
    return <Spinner />;
  } else if (productsError) {
    return <div>{`${productsError}`}</div>;
  }

  return (
    <main className={s.wrapper}>
      <ProductsCategoryTabs activeCategory={activeCategory} handleChangeCategory={handleChangeCategory} />
      <ProductsFilters onChangeSort={handleChangeSort} activeSort={activeSort.sort} activeOrder={activeSort.order} />
      <ProductsList
        data={productsToShow}
        onAddToCart={handleAddToCart}
        cartItems={cartData}
        onRemoveFromCart={handleRemoveFromCart}
      />
      <Pagination activePage={activePage} onChangePage={handleChangePage} pages={pages} />
    </main>
  );
};
