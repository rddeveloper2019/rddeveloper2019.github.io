import { createSlice } from '@reduxjs/toolkit';
import { ServerErrors } from '../../model/FetchService';
import { GetCategories } from '../../store/thunks/categoriesThunk';

export type Category = {
  id: string;
  name: string;
  photo?: string;
  createdAt: Date;
  updatedAt: Date;
  commandId: string;
};

type categoriesStateType = {
  categories: Category[];
  isLoading: boolean;
  categoriesError?: string;
};

const initialState: categoriesStateType = {
  categories: [],
  isLoading: false,
  categoriesError: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetCategories.pending, (state) => {
      state.isLoading = true;
      state.categoriesError = null;
    });

    builder.addCase(GetCategories.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.categoriesError = null;

      state.categories = payload;
    });
    builder.addCase(GetCategories.rejected, (state, { payload }) => {
      state.isLoading = false;
      const { errors = [] } = payload as ServerErrors;
      const message = errors?.[0]?.message || '❌ Неизвестная ошибка';
      state.categoriesError = message;
    });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
