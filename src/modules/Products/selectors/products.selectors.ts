import { RootState } from '@core/store/types/store.types';
import { createSelector } from '@reduxjs/toolkit';

const selectProductsState = (state: RootState) => state.products.products;

const selectProductsData = createSelector(selectProductsState, (state) => state.items);
const selectProductsLoading = createSelector(selectProductsState, (state) => state.isLoading);
const selectProductsError = createSelector(selectProductsState, (state) => state.error);

export const productsSelectors = { selectProductsError, selectProductsLoading, selectProductsData };
