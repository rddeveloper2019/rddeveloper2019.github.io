import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Lang, Theme } from '../types';

type settingsStateType = {
  theme: Theme;
  lang: Lang;
};

const initialState: settingsStateType = {
  theme: Theme.LIGHT,
  lang: Lang.RU,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>): void => {
      state.theme = action.payload;
    },
    setLang: (state, action: PayloadAction<Lang>): void => {
      state.lang = action.payload;
    },
  },
});

export const { setTheme, setLang } = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;
