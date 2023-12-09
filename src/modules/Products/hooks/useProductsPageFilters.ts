import { SortDirectionsEnum } from '@/shared/constants';
import {
  useAppDispatch,
  useAppSelector,
  useCustomSearchParams,
  usePagination,
  useSkipMountEffect,
} from '@/shared/hooks';
import { useMemo, useCallback, useEffect } from 'react';
import { SORT_OPTIONS } from '../constants';
import { ProductCategoriesEnum, IProduct } from '../models/product.model';
import { productsSelectors } from '../selectors/products.selectors';
import { productsActions } from '../slices/products.slice';
import { sortProducts } from '../utils/sortProducts';

const LIMIT = 8;

export const useProductsPageFilters = () => {
  const dispatch = useAppDispatch();
  const productsData = useAppSelector(productsSelectors.selectProductsData);
  const productsError = useAppSelector(productsSelectors.selectProductsError);
  const productsLoading = useAppSelector(productsSelectors.selectProductsLoading);

  const [params, setParams] = useCustomSearchParams();

  const activeCategory = (params.category as ProductCategoriesEnum) || ProductCategoriesEnum.electronics;
  const activePage = +params.page || 1;
  const activeSort = useMemo(() => {
    return {
      sort: (params.sort as keyof IProduct) || '',
      order: (params.order as SortDirectionsEnum) || '',
    };
  }, [params.order, params.sort]);

  const handleChangeCategory = (category: ProductCategoriesEnum) => () => {
    if (category === activeCategory) return;
    setParams({ ...params, category, page: `1` });
  };

  const handleChangePage = (page: number) => () => {
    setParams({ ...params, page: `${page}` });
  };

  const handleChangeSort = (optName: string) => {
    const option = SORT_OPTIONS.find((op) => op.name === optName);
    if (!option) return;
    setParams({ ...params, sort: option.sort, order: option.order });
  };

  const { pages } = usePagination({
    totalCount: productsData.length,
    offset: (activePage - 1) * LIMIT,
    pageSize: LIMIT,
  });

  const sortedProducts = useMemo(() => {
    const { order, sort } = activeSort;

    return order && sort ? sortProducts(productsData, activeSort.sort, activeSort.order) : productsData;
  }, [productsData, activeSort]);

  const productsToShow = useMemo(() => {
    const startIdx = (activePage - 1) * LIMIT;
    const endIdx = activePage * LIMIT;
    return sortedProducts.slice(startIdx, endIdx);
  }, [activePage, sortedProducts]);

  const fetchProducts = useCallback(() => {
    dispatch(productsActions.productsRequest({ category: activeCategory }));
  }, [activeCategory, dispatch]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useSkipMountEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    handleChangeCategory,
    handleChangePage,
    handleChangeSort,
    productsToShow,
    pages,
    productsLoading,
    productsError,
    activeCategory,
    activePage,
    activeSort,
  };
};
