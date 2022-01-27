import { Action } from "redux";

export const ActionTypes = {
  startLoading: "START_LOADING",
  stopLoading: "STOP_LOADING",
};

export type Loading = {
  loading: boolean;
  message: string;
};

type StartLoadingAction = {
  type: typeof ActionTypes.startLoading;
  payload: string;
} & Action;

type StopLoadingAction = {
  type: typeof ActionTypes.stopLoading;
  payload: undefined;
} & Action;

export type LoadingActionTypes = StartLoadingAction | StopLoadingAction;
