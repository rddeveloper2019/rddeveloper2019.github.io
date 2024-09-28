export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum Lang {
  EN = 'en',
  RU = 'ru',
}

export type ThemeProviderType = {
  theme: Theme;
  lang: Lang;
  setAppLang: (lang: Lang) => void;
  setAppTheme: (theme: Theme) => void;
};
