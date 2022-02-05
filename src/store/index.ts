import {
  TypedUseSelectorHook,
  useDispatch as useRawDispatch,
  useSelector as useRawSelector,
} from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { counterActions } from "../features/counter/counterActionCreator";
import { counterReducer } from "../features/counter/reducer";
import { loadingActions } from "../features/loading/loadingActionCreator";
import { loadingReducer } from "../features/loading/reducer";

export const RootReducer = combineReducers({
  count: counterReducer,
  loading: loadingReducer,
});

export const actions = {
  ...loadingActions,
  ...counterActions,
};

export type RootState = ReturnType<typeof RootReducer>;

const store = createStore(RootReducer, applyMiddleware(thunk));

export const useSelector: TypedUseSelectorHook<RootState> = useRawSelector;

export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => useRawDispatch<AppDispatch>();

export default store;
