import styles from './layout.module.scss';
import React, { ReactElement, useContext } from 'react';
import Header from '../components/header/header';
import { MainContext } from '../store/provider';

export const Layout = ({ children }: { children?: ReactElement }) => {
  const { isAuth } = useContext(MainContext);

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
