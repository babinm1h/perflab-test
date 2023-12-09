import { RootState } from '@core/store/types/store.types';
import { createSelector } from '@reduxjs/toolkit';

const selectCartState = (state: RootState) => state.products.cart;

const selectCartData = createSelector(selectCartState, (state) => state.items);
const selectTotalPrice = createSelector(selectCartState, (state) => state.totalPrice);

export const cartsSelectors = { selectCartData, selectTotalPrice };
