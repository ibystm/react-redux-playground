import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootActions, RootState } from "../../store/index";
import { startLoading, stopLoading } from "../loading/loadingActionCreator";
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

const asyncStop = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};

// TODO RootActionsの型は要検討
export const resetCount =
  (): ThunkAction<void, RootState, undefined, RootActions> =>
  (dispatch: Dispatch<Action>) => {
    dispatch(startLoading("reset values..."));
    return asyncStop().then((value) => {
      console.log(`value: ${value}`);
      dispatch(stopLoading());
    });
  };

export const selectCount = (state: RootState) => state.count.value;
