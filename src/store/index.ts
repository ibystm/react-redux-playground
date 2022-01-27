import { combineReducers, createStore } from "redux";
import { counterReducer } from "../features/counter/reducer";
import { loadingReducer } from "../features/loading/reducer";

const RootReducer = combineReducers({
  count: counterReducer,
  loading: loadingReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

const store = createStore(RootReducer);
export default store;
