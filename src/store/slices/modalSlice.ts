import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice<boolean>({
  name: 'modal',
  initialState: false,
  reducers: {
    showModal: () => true,
    hideModal: () => false,
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export const initReduser = modalSlice.reducer;
