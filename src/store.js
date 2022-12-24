import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "features/auth/authSlice";

console.log(authSlice);
export const store = configureStore({
  reducer: {
    user: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
