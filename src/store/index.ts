import { combineReducers, createStore } from "redux";
import { counterReducer } from "../features/counter/reducer";

const RootReducer = combineReducers({
  count: counterReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

const store = createStore(RootReducer);
export default store;
