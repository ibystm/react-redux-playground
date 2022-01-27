import { RootState } from "../../store/index";
import { ActionTypes, Loading, LoadingActionTypes } from "./types";

const initialState: Loading = {
  loading: false,
  message: "",
};
export const loadingReducer = (
  state: Loading = initialState,
  action: LoadingActionTypes
): Loading => {
  switch (action.type) {
    case ActionTypes.stopLoading:
      return {
        ...state,
        loading: false,
      };
    case ActionTypes.startLoading:
      return {
        ...state,
        loading: true,
        message: action.payload ? action.payload : "",
      };
    default:
      return state;
  }
};

export const selectLoading = (state: RootState) => state.loading;
