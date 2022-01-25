import { combineReducers, createStore } from "redux";
import { CounterReducer } from "../features/counter/reducer";

const RootReducer = combineReducers({
  count: CounterReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

const store = createStore(RootReducer);
export default store;
