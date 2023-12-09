import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../models/product.model';

interface IcartState {
  items: IProduct[];
  totalPrice: number;
}

const initialState: IcartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addToCart(state, { payload }: PayloadAction<IProduct>) {
      if (state.items.find((i) => i.id === payload.id)) return;
      state.items.push(payload);
      state.totalPrice += payload.price;
    },

    removeFromCart(state, { payload }: PayloadAction<number>) {
      state.items = state.items.filter((i) => i.id !== payload);
      state.totalPrice = state.items.reduce((acc, curr) => {
        return acc + curr.price;
      }, 0);
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
