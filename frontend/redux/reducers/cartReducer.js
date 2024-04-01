import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItems: [],
  },
  (builder) => {
    builder
      .addCase("addToCart", (state, action) => {
        const item = action.payload;
        const isExist = state.cartItems.find((i) => i.service === item.service);
        if (isExist) {
          state.cartItems = state.cartItems.filter((i) =>
            i.service === isExist.service ? item : i
          );

          for (let i = 0; i < state.cartItems.length; i++) {
            if (state.cartItems[i].service === isExist.service)
              state.cartItems[i] = item;
          }
        } else state.cartItems.push(item);
      })
      .addCase("removeFromCart", (state, action) => {
        const id = action.payload;
        state.cartItems = state.cartItems.filter((i) => i.service !== id);
      })
      .addCase("clearCart", (state) => {
        state.cartItems = [];
      });
  }
);
