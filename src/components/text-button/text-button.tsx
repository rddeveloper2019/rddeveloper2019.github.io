import React, { FC } from 'react';
import { TextButtonPropsTypes, TextButtonState } from './types';
import styles from './text-button.module.scss';
import cn from 'clsx';

const TextButton: FC<TextButtonPropsTypes> = ({
  children = 'Click',
  state = TextButtonState.DEFAULT,
  handleClick = () => {},
  disabled = false,
}) => {
  return (
    <button
      className={cn(styles['text-button'], styles[state], disabled && styles.disabled)}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default TextButton;
