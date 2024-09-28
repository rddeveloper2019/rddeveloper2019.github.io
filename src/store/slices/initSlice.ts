import { createSlice } from '@reduxjs/toolkit';

type initStateType = {
  init: boolean;
};

const initialState: initStateType = {
  init: false,
};
const initSlice = createSlice({
  name: 'init',
  initialState,
  reducers: {
    initApp: (state): void => {
      state.init = true;
      console.log('(**)=> : app initialized', state.init);
    },
  },
});

export const { initApp } = initSlice.actions;
export const initReduser = initSlice.reducer;
