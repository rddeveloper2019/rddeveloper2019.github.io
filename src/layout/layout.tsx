import styles from './layout.module.scss';
import React, { ReactElement } from 'react';
import Header from '../components/header/header';

export const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles['safe-area']}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
