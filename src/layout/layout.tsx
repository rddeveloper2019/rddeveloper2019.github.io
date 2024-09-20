import styles from './layout.module.scss';
import React, { ReactElement } from 'react';
import Header from '../components/header/header';
import { useAuthSelector } from '../store/selectors';

export const Layout = ({ children }: { children?: ReactElement }) => {
  const { isAuth } = useAuthSelector();

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles['safe-area']}>
        {!isAuth && <p className={styles.info}>Только для авторизированных пользователей</p>}
        {isAuth && children}
      </main>
    </div>
  );
};
