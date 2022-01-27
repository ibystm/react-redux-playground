import { ActionTypes, LoadingActionTypes } from "./types";

export const startLoading = (value: string): LoadingActionTypes => ({
  type: ActionTypes.startLoading,
  payload: value,
});

export const stopLoading = (): LoadingActionTypes => ({
  type: ActionTypes.stopLoading,
  payload: undefined,
});
