import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { counterActions } from "../features/counter/counterActionCreator";
import counterReducer from "../features/counter/counterSlice";
import { loadingActions } from "../features/loading/loadingActionCreator";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export const actions = {
  ...loadingActions,
  ...counterActions,
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
