import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./features/application/applicationSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      appliState: applicationReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type TRootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
