import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Operation } from '../../model/types';
import { createRandomOperations } from '../../model/utils';

type operationsStateType = {
  operations: Operation[];
};

const initialState: operationsStateType = {
  operations: [...createRandomOperations(10)],
};

const operationsSlice = createSlice({
  name: 'operations',
  initialState,
  reducers: {
    setOperations: (state, action: PayloadAction<Operation[]>): void => {
      state.operations = action.payload;
    },
    addOperation: (state, action: PayloadAction<Operation>): void => {
      console.log('(**)=> action: ', action);
      state.operations.unshift(action.payload);
    },
    toggleOperationFavorite: (state, action: PayloadAction<Operation['id']>): void => {
      const toggled = state.operations.find(({ id }) => id === action.payload);
      if (toggled) {
        toggled.isFavorite = !toggled.isFavorite;
      }
    },

    editOperation: (state, action: PayloadAction<Partial<Operation>>): void => {
      const operation = state.operations.find(({ id }) => id === action.payload);
      console.log('action.payload: ', action.payload);
      console.log('operation: ', operation);
    },
  },
});

export const { setOperations, addOperation, toggleOperationFavorite, editOperation } = operationsSlice.actions;
export const operationsReduser = operationsSlice.reducer;
