import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchService } from '../../model/FetchService';
import { Operation } from '../../model/types';

export const GetOperations = createAsyncThunk<Operation[], boolean | undefined, { rejectValue: unknown }>(
  'operations/getoperations',
  async (more, { rejectWithValue }) => {
    try {
      const response = await FetchService.getOperations(more);
      if (!response?.ok) {
        return rejectWithValue(response);
      }
      const { data } = await response.json();

      console.log('(**)=> data: ', data);
      return data;
    } catch (error: unknown) {
      console.log('(**)=> error: ', error);
      // return rejectWithValue(error);
    }
  }
);
