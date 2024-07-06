import styles from './logo.module.scss';
import React, { FC } from 'react';
import cn from 'clsx';
import { LogoPropTypes, Size } from './types';

const Logo: FC<LogoPropTypes> = ({ image = '', color = 'transparent', size = Size.MEDIUM }) => {
  return (
    <div
      className={cn(styles.logo, size && styles[size])}
      style={{ backgroundColor: color, alignItems: image ? 'flex-end' : 'center' }}
    >
      {image && <img src={image} alt="logo" />}
      {!image && <div className={styles.circle}></div>}
    </div>
  );
};

export default Logo;
