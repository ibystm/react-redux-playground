import { typedAction } from "../../helper/reduxHelper";

export const startLoading = (value: string) =>
  typedAction("START_LOADING", value);

export const stopLoading = () => typedAction("STOP_LOADING");

export const loadingActions = {
  startLoading,
  stopLoading,
};
