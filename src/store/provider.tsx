import React, { ReactElement, createContext, useState, useEffect } from 'react';
import { Lang, Store, Theme } from './types';
import { useTranslation } from 'react-i18next';
import { themes } from '../config/theme/themes';

export const MainContext = createContext<Store>(null);

const root = document.querySelector(':root') as HTMLElement;

const setAppTheme = (name: Theme) => {
  const themeMap = themes[name];

  for (const [key, value] of Object.entries(themeMap)) {
    root?.style?.setProperty(key, value);
  }
};

export const MainProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const [lang, setLang] = useState<Lang>(Lang.RU);
  const [modal, setModal] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const { i18n } = useTranslation();

  const store: Store = {
    theme,
    setTheme,
    lang,
    setLang,
    modal,
    setModal,
    isAuth,
    setIsAuth,
  };

  useEffect(() => {
    setAppTheme(theme);
  }, [theme]);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return <MainContext.Provider value={store}>{children}</MainContext.Provider>;
};
