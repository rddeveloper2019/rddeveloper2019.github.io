import styles from './logo.module.scss';
import React, { FC } from 'react';
import cn from 'clsx';
import { LogoPropTypes, Size } from './types';

const Logo: FC<LogoPropTypes> = ({ image = '', color = '', size = Size.MEDIUM }) => {
  const style: React.CSSProperties = {
    backgroundColor: color || 'transparent',
    alignItems: image && color ? 'flex-end' : 'center',
  };

  return (
    <div className={cn(styles.logo, size && styles[size])} style={style}>
      {image && <img src={image} alt="logo" />}
      {!image && <div className={styles.circle}></div>}
    </div>
  );
};

export default Logo;
