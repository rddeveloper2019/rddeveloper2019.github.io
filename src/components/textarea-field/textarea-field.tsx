import styles from './textarea-field.module.scss';
import React, { FC } from 'react';
import cn from 'clsx';
import { TextareaFieldPropTypes } from './types';

const TextareaField: FC<TextareaFieldPropTypes> = ({ placeholder = '', error, ...rest }) => {
  return (
    <>
      <textarea className={cn(styles.textarea, error && styles.error)} placeholder={placeholder} {...rest} />
      {error && <p className={cn(styles['error-hint'])}>{error}</p>}
    </>
  );
};

export default TextareaField;
