import styles from './layout.module.scss';
import React, { ReactElement, useInsertionEffect } from 'react';
import Header from '../components/header/header';
import { useAuthSelector } from '../store/selectors';
import { useAppDispatch } from '../store/store';
import { initApp } from '../store/slices/initSlice';

export const Layout = ({ children }: { children?: ReactElement }) => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAuthSelector();

  useInsertionEffect(() => {
    dispatch(initApp());
  }, []);

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
