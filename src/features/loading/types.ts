export type Loading = {
  loading: boolean;
  message: string;
};

export type StartLoadingAction = {
  type: "START_LOADING";
  payload: string;
};

export type StopLoadingAction = {
  type: "STOP_LOADING";
};

export type LoadingActionTypes = StartLoadingAction | StopLoadingAction;
