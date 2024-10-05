import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Operation } from '../../model/types';
import { getPhoto } from '../../model/utils';
import { AddOperation, EditOperation, GetOperations, ToggleOperation } from '../thunks/operationsThunk';
import { ServerErrors } from '../../model/FetchService';

type operationsStateType = {
  operations: Operation[];
  isLoading: boolean;
  operationsError?: string;
};

const initialState: operationsStateType = {
  operations: [],
  isLoading: false,
  operationsError: null,
};

const operationsSlice = createSlice({
  name: 'operations',
  initialState,
  reducers: {
    setError: (state, { payload }: PayloadAction<unknown>): void => {
      state.isLoading = false;
      const { errors = [] } = payload as ServerErrors;
      state.operationsError = errors?.[0]?.message || '❌ Неизвестная ошибка';
    },
    clearOperationsError: (state): void => {
      state.isLoading = false;
      state.operationsError = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetOperations.pending, (state) => {
      state.isLoading = true;
      state.operationsError = null;
    });

    builder.addCase(GetOperations.fulfilled, (state, { payload }) => {
      const { data, more } = payload;
      state.isLoading = false;
      state.operationsError = null;
      if (!data.length) {
        state.operationsError = '🏁';
        return;
      }
      const newOperations = data.map((operation) => {
        return { ...operation, isFavorite: operation.type === 'Cost', photo: getPhoto(true) };
      });

      if (more) {
        state.operations.push(...newOperations);
      } else {
        state.operations = newOperations;
      }
    });
    builder.addCase(GetOperations.rejected, (state, { payload }) => {
      state.isLoading = false;
      const { errors = [] } = payload as ServerErrors;
      state.operationsError = errors?.[0]?.message || '❌ Неизвестная ошибка';
    });

    builder.addCase(AddOperation.pending, (state) => {
      state.isLoading = true;
      state.operationsError = null;
    });
    builder.addCase(AddOperation.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.operationsError = null;
      state.operations.unshift({ ...payload, isFavorite: payload.type === 'Cost', photo: getPhoto(true) });
    });

    builder.addCase(AddOperation.rejected, (state, { payload }) => {
      state.isLoading = false;
      const { errors = [] } = payload as ServerErrors;
      state.operationsError = errors?.[0]?.message || '❌ Неизвестная ошибка';
    });

    builder.addCase(ToggleOperation.pending, (state) => {
      state.isLoading = true;
      state.operationsError = null;
    });
    builder.addCase(ToggleOperation.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.operationsError = null;
      state.operations.forEach((operation) => {
        if (operation.id === payload.id) {
          operation.type = payload.type;
          operation.isFavorite = payload.type === 'Cost';
        }
      });
    });

    builder.addCase(ToggleOperation.rejected, (state, { payload }) => {
      state.isLoading = false;
      const { errors = [] } = payload as ServerErrors;
      state.operationsError = errors?.[0]?.message || '❌ Неизвестная ошибка';
    });

    builder.addCase(EditOperation.pending, (state) => {
      state.isLoading = true;
      state.operationsError = null;
    });
    builder.addCase(EditOperation.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.operationsError = null;

      // TODO мутация обхекта не отрабатывает!!

      state.operations = state.operations.map((operation) => {
        if (operation.id === payload.id) {
          operation = { ...operation, ...payload };
        }
        return operation;
      });
    });

    builder.addCase(EditOperation.rejected, (state, { payload }: PayloadAction<unknown>) => {
      state.isLoading = false;
      const { errors = [] } = payload as ServerErrors;
      state.operationsError = errors?.[0]?.message || '❌ Неизвестная ошибка';
    });
  },
});

export const { setError, clearOperationsError } = operationsSlice.actions;
export const operationsReducer = operationsSlice.reducer;
