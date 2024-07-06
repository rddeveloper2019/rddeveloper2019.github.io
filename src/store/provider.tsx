import React, { ReactElement, createContext, useState } from 'react';
import { Lang, Theme } from './types';

export const MainContext = createContext(null);

export const MainProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const [lang, setLang] = useState<Lang>(Lang.RU);
  const [modal, setModal] = useState<boolean>(false);
  const store = { theme, setTheme, lang, setLang, modal, setModal };
  return <MainContext.Provider value={store}>{children}</MainContext.Provider>;
};
