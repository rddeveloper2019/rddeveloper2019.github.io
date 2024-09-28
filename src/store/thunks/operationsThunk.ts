import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchService } from '../../model/FetchService';
import { Operation } from '../../model/types';
import { OperationFormType } from '../../components/operation-form/types';

export const GetOperations = createAsyncThunk<
  { data: Operation[]; more: boolean },
  boolean | undefined,
  { rejectValue: unknown }
>('operations/getoperations', async (more, { rejectWithValue }) => {
  try {
    const response = await FetchService.getOperations(more);
    if (!response?.ok) {
      return rejectWithValue(response);
    }
    const { data } = await response.json();

    return { data, more };
  } catch (error: unknown) {
    return rejectWithValue(error);
  }
});

export const AddOperation = createAsyncThunk<Operation, OperationFormType, { rejectValue: unknown }>(
  'operations/addoperation',
  async (operation, { rejectWithValue }) => {
    try {
      const response = await FetchService.addOperation(operation);
      if (!response?.ok) {
        return rejectWithValue(response);
      }

      const data = await response.json();

      return data;
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
);

export const ToggleOperation = createAsyncThunk<
  Operation,
  { id: string; type: 'Cost' | 'Profit' },
  { rejectValue: unknown }
>('operations/toggleoperation', async (body, { rejectWithValue }) => {
  try {
    const response = await FetchService.toggleOperationFavorite(body);
    if (!response?.ok) {
      return rejectWithValue(response);
    }

    const data = await response.json();

    return data;
  } catch (error: unknown) {
    return rejectWithValue(error);
  }
});

export const EditOperation = createAsyncThunk<Operation, OperationFormType, { rejectValue: unknown }>(
  'operations/editoperation',
  async (body, { rejectWithValue }) => {
    try {
      const response = await FetchService.editOperation(body);
      if (!response?.ok) {
        return rejectWithValue(response);
      }

      const data = await response.json();

      return data;
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
);
