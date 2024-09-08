import styles from './input-field.module.scss';
import React, { FC } from 'react';
import cn from 'clsx';
import { InputFieldPropTypes } from './types';

const InputField: FC<InputFieldPropTypes> = ({ placeholder = '', error, type = 'text', ...rest }) => {
  return (
    <>
      <input className={cn(styles.input, error && styles.error)} placeholder={placeholder} type={type} {...rest} />
      {error && <p className={cn(styles['error-hint'])}>{error}</p>}
    </>
  );
};

export default InputField;
