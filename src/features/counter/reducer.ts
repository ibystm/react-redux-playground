import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/index";

const SLICE_NAME = "count";

const initialState: { value: number } = {
  value: 0,
};

const asyncActions = {
  lazyReset: createAsyncThunk(
    `${SLICE_NAME}/asyncStop`,
    () =>
      new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500);
      })
  ),
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncActions.lazyReset.pending, (state, action) => {
        // TODO
      })
      .addCase(asyncActions.lazyReset.fulfilled, (state) => {
        state.value = 0;
      });
  },
});

export const counterActions = {
  ...slice.actions,
  ...asyncActions,
};

export const { reducer } = slice;

export const selectCount = (state: RootState) => state.count.value;
