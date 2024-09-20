import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Lang, Theme } from '../types';

type settingsSliceType = {
  theme: Theme;
  lang: Lang;
};
const settingsSlice = createSlice<settingsSliceType>({
  name: 'settings',
  initialState: {
    theme: Theme.LIGHT,
    lang: Lang.RU,
  },
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
    setLang(state, action: PayloadAction<Lang>) {
      state.lang = action.payload;
    },
  },
});

export const { setTheme, setLang } = settingsSlice.actions;
export const settingsReduser = settingsSlice.reducer;
