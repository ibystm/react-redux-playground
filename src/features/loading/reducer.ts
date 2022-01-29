import { RootState } from "../../store/index";
import { Loading, LoadingActionTypes } from "./types";

const initialState: Loading = {
  loading: false,
  message: "",
};
export const loadingReducer = (
  state: Loading = initialState,
  action: LoadingActionTypes
): Loading => {
  switch (action.type) {
    case "STOP_LOADING":
      return {
        ...state,
        loading: false,
      };
    case "START_LOADING":
      return {
        ...state,
        loading: true,
        message: action.payload,
      };
    default:
      return state;
  }
};

export const selectLoading = (state: RootState) => state.loading;
