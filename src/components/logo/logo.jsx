import styles from './logo.module.scss';
import React from 'react';
import cn from 'clsx';

const Logo = ({ image = '', color = '#eeeaea', size = 'medium' }) => {
  return (
    <div
      className={cn(styles.logo, styles[size])}
      style={{ backgroundColor: color, alignItems: image ? 'flex-end' : 'center' }}
    >
      {image && <img src={image} alt="logo" />}
      {!image && <div className={styles.circle}></div>}
    </div>
  );
};

export default Logo;
