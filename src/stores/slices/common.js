import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  formError: null,
  user: null,
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
    clearFormErrorAction: (state) => {
      state.formError = null;
    },
    setUserAction: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const {
  setTitleAction,
  setFormErrorAction,
  clearFormErrorAction,
  setUserAction,
} = commonSlice.actions;

export default commonSlice.reducer;
