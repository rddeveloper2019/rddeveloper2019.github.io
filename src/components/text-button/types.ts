import React, { JSXElementConstructor, ReactElement } from 'react';

export enum TextButtonState {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DISABLED = 'disabled',
  LINK = 'link',
}

export type TextButtonPropsTypes = {
  children: string;
  handleClick?: () => void;
  state?: TextButtonState;
  disabled?: boolean;
};
