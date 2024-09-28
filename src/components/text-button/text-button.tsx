import React, { FC, MouseEvent } from 'react';
import { TextButtonPropsTypes, TextButtonState } from './types';
import styles from './text-button.module.scss';
import cn from 'clsx';

const TextButton: FC<TextButtonPropsTypes> = ({
  children = 'Click',
  state = TextButtonState.DEFAULT,
  handleClick,
  disabled = false,
  className,
  type,
  ...rest
}) => {
  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    handleClick?.();
  };

  return (
    <button
      className={cn(styles['text-button'], styles[state], disabled && styles.disabled, className)}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default TextButton;
