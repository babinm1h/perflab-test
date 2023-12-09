import { combineReducers } from '@reduxjs/toolkit';
import { products } from '@/modules/Products/slices';

export const rootReducer = combineReducers({ products });
