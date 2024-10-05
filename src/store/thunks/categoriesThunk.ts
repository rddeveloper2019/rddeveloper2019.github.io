import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchService } from '../../model/FetchService';
import { Category } from '../../store/slices/categoriesSlice';

export const GetCategories = createAsyncThunk<Category[], undefined, { rejectValue: unknown }>(
  'categories/getcategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await FetchService.getCategories();
      if (!response?.ok) {
        return rejectWithValue(response);
      }
      const { data } = await response.json();

      return data;
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
);
