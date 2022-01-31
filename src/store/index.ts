import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { counterActions } from "../features/counter/counterActionCreator";
import { counterReducer } from "../features/counter/reducer";
import { loadingActions } from "../features/loading/loadingActionCreator";
import { loadingReducer } from "../features/loading/reducer";

const RootReducer = combineReducers({
  count: counterReducer,
  loading: loadingReducer,
});

export const actions = {
  ...loadingActions,
  ...counterActions,
};

export type RootState = ReturnType<typeof RootReducer>;

const store = createStore(RootReducer, applyMiddleware(thunk));
export default store;
