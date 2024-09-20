import { createSlice } from '@reduxjs/toolkit';

type ModalStateType = {
  modal: boolean;
};

const initialState: ModalStateType = {
  modal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state): void => {
      state.modal = true;
    },
    hideModal: (state): void => {
      state.modal = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export const modalReduser = modalSlice.reducer;
