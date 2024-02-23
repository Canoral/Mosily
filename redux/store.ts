import { configureStore } from "@reduxjs/toolkit";

import headerReducer from "./reducers/header";

const store = configureStore({
  reducer: {
    header: headerReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
