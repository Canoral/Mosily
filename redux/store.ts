import { configureStore } from "@reduxjs/toolkit";

import headerReducer from "./reducers/header";
import alertsReducer from "./reducers/alerts";
import advicesReducer from "./reducers/advices";
import tipsReducer from "./reducers/tips";

const store = configureStore({
  reducer: {
    header: headerReducer,
    advices: advicesReducer,
    tips: tipsReducer,
    alerts: alertsReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
