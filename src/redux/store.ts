import { configureStore } from "@reduxjs/toolkit";
import { sonosApi } from "../services/sonosApi";
import basketSlice from "./basketSlice";
export const store = configureStore({
  reducer: {
    [sonosApi.reducerPath]: sonosApi.reducer,
    basketReducer: basketSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sonosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
