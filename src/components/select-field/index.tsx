import React from 'react';

import { CustomSelectProps } from './types';
import styles from './select-field.module.scss';
export const SelectField: React.FC<CustomSelectProps> = ({ options, onChange, value, ...rest }) => {
  return (
    <select {...rest} value={value} onChange={onChange} className={styles.select}>
      <option></option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
