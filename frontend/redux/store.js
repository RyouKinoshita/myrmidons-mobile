import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { otherReducer } from "./reducers/otherReducer";
import { serviceReducer } from "./reducers/serviceReducer";
import { cartReducer } from "./reducers/cartReducer";
import { portfolioReducer } from "./reducers/portfolioReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    other: otherReducer,
    service: serviceReducer,
    cart: cartReducer,
    portfolio: portfolioReducer,
  },
});

export const server = "https://myrmidons-mobile.onrender.com/api/v1";
