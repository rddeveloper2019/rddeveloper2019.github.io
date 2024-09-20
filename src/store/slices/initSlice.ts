import { createSlice } from '@reduxjs/toolkit';

type initSliceType = {
  init: boolean;
};
const initSlice = createSlice<initSliceType>({
  name: 'init',
  initialState: {
    init: false,
  },
  reducers: {
    initApp(state) {
      state.init = true;
    },
  },
});

export const { initApp } = initSlice.actions;
export const initReduser = initSlice.reducer;
