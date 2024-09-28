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

export type Profile = {
  id: string;
  name: string;
  email: string;
  signUpDate: Date;
  commandId: string;
};
