import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useRawSelector,
} from "react-redux";
import { RootState } from "../store/index";
import type { AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useRawSelector;
