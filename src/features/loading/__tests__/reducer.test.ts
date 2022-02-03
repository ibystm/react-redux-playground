import { loadingReducer } from "../reducer";
import { Loading, LoadingActions } from "../types";

describe("loading reducer", () => {
  it("Should start initial state", () => {
    const loadingMessage = "initial loading";
    const action: LoadingActions = {
      type: "START_LOADING",
      payload: loadingMessage,
    };
    const { loading, message } = loadingReducer(undefined, action);
    expect(loading).toEqual(true);
    expect(message).toEqual(loadingMessage);
  });

  it("start loading test", () => {
    const loadingMessage = "loading start";
    const action: LoadingActions = {
      type: "START_LOADING",
      payload: loadingMessage,
    };
    const initialState: Loading = {
      loading: false,
      message: "",
    };
    const { loading, message } = loadingReducer(initialState, action);
    expect(loading).toEqual(true);
    expect(message).toEqual(loadingMessage);
  });

  it("stop loading test", () => {
    const preMessage = "Now On Loading";
    const action: LoadingActions = {
      type: "STOP_LOADING",
    };
    const preState: Loading = {
      loading: true,
      message: preMessage,
    };
    const { loading, message } = loadingReducer(preState, action);

    expect(loading).toEqual(false);
    expect(message).toEqual("");
  });
});
