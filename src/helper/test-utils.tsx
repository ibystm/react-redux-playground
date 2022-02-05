import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { render as RTLRender, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { RootReducer, RootState } from "../store/index";

type OGRenderOptions = Omit<RenderOptions, "queries">;
type CustomOptions = {
  preloadedstore?: PreloadedState<RootState>;
} & OGRenderOptions;

const render = (ui: React.ReactElement, options?: CustomOptions) => {
  const store = configureStore({
    reducer: RootReducer,
    preloadedState: options?.preloadedstore,
  });
  const Wrapper: React.FC = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return RTLRender(ui, { wrapper: Wrapper, ...options });
};

export * from "@testing-library/react";
export { render };
