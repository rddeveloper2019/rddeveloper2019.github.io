import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Operation } from '../../model/types';

type operationsSliceType = {
  operations: Operation[];
  favoriteOperations: Operation[];
};
const operationsSlice = createSlice<operationsSliceType>({
  name: 'operations',
  initialState: {
    operations: [],
    favoriteOperations: [],
  },
  reducers: {
    getOperations(state, action: PayloadAction<Operation[]>) {
      state.operations = action.payload;
      state.favoriteOperations = action.payload.filter((item) => item.isFavorite);
    },
    addOperation(state, action: PayloadAction<Operation>) {
      state.operations.unshift(action.payload);
    },
    addFavoriteOperation(state, action: PayloadAction<Operation>) {
      state.favoriteOperations.unshift(action.payload);
    },
  },
});

export const { getOperations, addOperation, addFavoriteOperation } = operationsSlice.actions;
export const operationsReduser = operationsSlice.reducer;
