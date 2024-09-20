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
      state.operations.unshift(action.payload);
    },
  },
});

export const { setOperations, addOperation } = operationsSlice.actions;
export const operationsReduser = operationsSlice.reducer;
