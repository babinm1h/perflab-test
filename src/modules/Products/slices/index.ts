import { combineReducers } from '@reduxjs/toolkit';
import { productsReducer } from './products.slice';
import { cartReducer } from './cart.slice';

export const products = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
