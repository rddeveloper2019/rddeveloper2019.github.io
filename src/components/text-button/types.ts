import { ButtonHTMLAttributes, ReactNode } from 'react';
export enum TextButtonState {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DISABLED = 'disabled',
  LINK = 'link',
  WHITE = 'white',
}

type ButtonType = 'submit' | 'button';
export type TextButtonPropsTypes = {
  children: ReactNode;
  handleClick?: () => void;
  state?: TextButtonState;
  disabled?: boolean;
  className?: string;
  type: ButtonType;
};
