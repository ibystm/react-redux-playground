import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/index";
import { Loading } from "./types";

const SLICE_NAME = "loading";

const initialState: Loading = {
  loading: false,
  message: "",
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.message = "";
      state.loading = false;
    },
    startLoading: (state, { payload }) => {
      state.loading = true;
      state.message = payload;
    },
  },
});

export const actions = {
  ...slice.actions,
};

export const { reducer } = slice;

export const selectLoading = (state: RootState) => state.loading;
