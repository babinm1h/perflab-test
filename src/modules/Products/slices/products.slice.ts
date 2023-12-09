import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../models/product.model';

interface IProductsState {
  items: IProduct[];
  isLoading: boolean;
  error: null | string;
}

const initialState: IProductsState = {
  error: null,
  isLoading: false,
  items: [],
};

const productsSlice = createSlice({
  initialState,
  name: 'products',
  reducers: {
    productsRequest(state, payload: PayloadAction<{ category: string }>) {
      state.isLoading = true;
    },
    productsRequestSuccess(state, { payload }: PayloadAction<IProduct[]>) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    productsRequestError(state, { payload }: PayloadAction<string>) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
