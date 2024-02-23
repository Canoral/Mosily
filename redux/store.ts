import { configureStore } from '@reduxjs/toolkit';

import testReducer from './reducers/test';

const store = configureStore({
  reducer: {
    test: testReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
