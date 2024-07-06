export enum TextButtonState {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DISABLED = 'disabled',
  LINK = 'link',
  WHITE = 'white',
}

export type TextButtonPropsTypes = {
  children: string;
  handleClick?: () => void;
  state?: TextButtonState;
  disabled?: boolean;
};
