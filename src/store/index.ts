import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as useRawDispatch,
  useSelector as useRawSelector,
} from "react-redux";
import {
  counterActions,
  reducer as counterReducer,
} from "../features/counter/reducer";
import {
  actions as loadingActions,
  reducer as loadingReducer,
} from "../features/loading/reducer";

export const reducer = {
  loading: loadingReducer,
  count: counterReducer,
};

export const store = configureStore({ reducer });

export const actions = {
  ...loadingActions,
  ...counterActions,
};

export type RootState = ReturnType<typeof store.getState>;

export const useSelector: TypedUseSelectorHook<RootState> = useRawSelector;
export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => useRawDispatch<AppDispatch>();

export default store;
