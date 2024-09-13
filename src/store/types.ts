export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum Lang {
  EN = 'en',
  RU = 'ru',
}

type State<T> = (value: ((prevState: T) => T) | T) => void;

export type Store = {
  setModal: State<boolean>;
  setTheme: State<Theme>;
  theme: Theme;
  lang: Lang;
  setLang: State<Lang>;
  modal: boolean;
  isAuth: boolean;
  setIsAuth: State<boolean>;
};
