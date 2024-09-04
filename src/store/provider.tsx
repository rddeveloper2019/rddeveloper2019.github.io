import React, { ReactElement, createContext, useState, useEffect } from 'react';
import { Lang, Store, Theme } from './types';
import { useTranslation } from 'react-i18next';

export const MainContext = createContext<Store>(null);

const root = document.querySelector(':root') as HTMLElement;

const themesMap = {
  light: {
    '--background-main': '#ffffff',
    '--background-primary': '#2196f3',
    '--main-shadow': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    '--border-color-card-main': '#9c9c9c',
    '--color-default': '#2a2929',
    '--color-primary': '#2196f3',
  },
  dark: {
    '--background-main': '#696767',
    '--background-primary': '#04223d',
    '--main-shadow': 'rgba(216, 215, 215, 0.24) 0px 3px 8px',
    '--border-color-card-main': '#202020',
    '--color-default': '#ffffff',
    '--color-primary': '#00e1ff',
  },
};

const setAppTheme = (name: Theme) => {
  const themeMap = themesMap[name];

  for (const [key, value] of Object.entries(themeMap)) {
    root?.style?.setProperty(key, value);
  }
};

export const MainProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const [lang, setLang] = useState<Lang>(Lang.RU);
  const [modal, setModal] = useState<boolean>(false);
  const { i18n } = useTranslation();

  const store: Store = {
    theme,
    setTheme,
    lang,
    setLang,
    modal,
    setModal,
  };

  useEffect(() => {
    setAppTheme(theme);
  }, [theme]);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return <MainContext.Provider value={store}>{children}</MainContext.Provider>;
};
