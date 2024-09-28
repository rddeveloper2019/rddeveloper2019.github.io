import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Operation } from '../../model/types';
import { createRandomOperations, getPhoto } from '../../model/utils';
import { GetOperations } from '../thunks/operationsThunk';
import { ServerErrors } from '../../model/FetchService';

type operationsStateType = {
  operations: Operation[];
  isLoading: boolean;
  operationsError?: string;
};

const initialState: operationsStateType = {
  operations: [...createRandomOperations(10)],
  isLoading: false,
  operationsError: null,
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
    toggleOperationFavorite: (state, action: PayloadAction<Operation['id']>): void => {
      const toggled = state.operations.find(({ id }) => id === action.payload);
      if (toggled) {
        toggled.isFavorite = !toggled.isFavorite;
      }
    },

    editOperation: (state, action: PayloadAction<Operation>): void => {
      state.operations = state.operations.map((operation) => {
        if (operation.id === action.payload.id) {
          return action.payload;
        }
        return operation;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetOperations.pending, (state) => {
      state.isLoading = true;
      state.operationsError = null;
    });

    builder.addCase(GetOperations.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.operationsError = null;
      if (!payload.length) {
        state.operationsError = '🏁';
        return;
      }
      state.operations = [
        ...state.operations,
        ...payload.map((operation) => {
          return { ...operation, isFavorite: operation.type === 'Cost', photo: getPhoto(true) };
        }),
      ];
    });
    builder.addCase(GetOperations.rejected, (state, { payload }) => {
      state.isLoading = false;
      const { errors = [] } = payload as ServerErrors;
      const message = errors?.[0]?.message || '❌ Неизвестная ошибка';
      state.operationsError = message;
    });
  },
});

export const { setOperations, addOperation, toggleOperationFavorite, editOperation } = operationsSlice.actions;
export const operationsReduser = operationsSlice.reducer;
