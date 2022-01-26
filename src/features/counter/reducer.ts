import { RootState } from "../../store/index";
import { ActionTypes, Count, CounterActionTypes } from "./types";
const initialState: { value: number } = {
  value: 0,
};

export const counterReducer = (
  state = initialState,
  action: CounterActionTypes
): Count => {
  switch (action.type) {
    case ActionTypes.increment:
      return {
        ...state,
        value: state.value + 1,
      };
    case ActionTypes.decrement:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export const selectCount = (state: RootState) => state.count.value;
