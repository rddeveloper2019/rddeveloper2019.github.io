import React, { ReactElement, createContext, useEffect } from 'react';
import { Lang, Theme, ThemeProviderType } from '../store/types';
import { useTranslation } from 'react-i18next';
import { themes } from '../config/theme/themes';
import { useSettingsSelector } from '../store/selectors';
import { useAppDispatch } from '../store/store';
import { setLang, setTheme } from '../store/slices/settingsSlice';

export const ThemeContext = createContext<ThemeProviderType>(null);

const root = document.querySelector(':root') as HTMLElement;

const applyNewTheme = (name: Theme) => {
  const themeMap = themes[name];

  for (const [key, value] of Object.entries(themeMap)) {
    root?.style?.setProperty(key, value);
  }
};

export const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const dispatch = useAppDispatch();
  const { theme, lang } = useSettingsSelector();

  const { i18n } = useTranslation();

  const setAppLang = (lang: Lang) => dispatch(setLang(lang));
  const setAppTheme = (theme: Theme) => dispatch(setTheme(theme));

  const themeValue: ThemeProviderType = {
    theme,
    lang,
    setAppLang,
    setAppTheme,
  };

  useEffect(() => {
    applyNewTheme(theme);
  }, [theme]);

  useEffect(() => {
    i18n?.changeLanguage?.(lang);
  }, [lang, i18n]);

  return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>;
};
