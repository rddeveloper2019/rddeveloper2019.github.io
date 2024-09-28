import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthResult, FetchService, SignUpBody } from '../../model/FetchService';

export const SignUp = createAsyncThunk<AuthResult, SignUpBody, { rejectValue: unknown }>(
  'user/signup',
  async (body, { rejectWithValue }) => {
    try {
      const response = await FetchService.singup(body);

      const data = await response.json();

      if (!response?.ok) {
        return rejectWithValue(data);
      }

      return data;
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
);
