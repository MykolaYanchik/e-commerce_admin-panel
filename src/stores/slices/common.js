import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  formError: null,
};

const commonSlice = createSlice({
  name: "common",
  initialState: initialState,
  reducers: {
    setTitleAction: (state, { payload }) => {
      state.title = payload;
    },
    setFormErrorAction: (state, { payload }) => {
      state.formError = payload;
    },
    clearFormErrorAction: (state, { payload }) => {
      state.formError = null;
    },
  },
});

export const {
  setTitleAction,
  setFormErrorAction,
  clearFormErrorAction,
} = commonSlice.actions;

export default commonSlice.reducer;
