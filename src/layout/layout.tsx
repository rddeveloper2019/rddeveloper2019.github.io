import styles from './layout.module.scss';
import React, { ReactElement, useEffect, useInsertionEffect, useState } from 'react';
import Header from '../components/header/header';
import { useAuthSelector, useOperationsSelector } from '../store/selectors';
import { useAppDispatch } from '../store/store';
import { initApp } from '../store/slices/initSlice';
import FullscreenLoader from '../components/fullscreen-loader/fullscreen-loader';
import { Portal } from '../components/portal/Portal';
import { GetOperations } from '../store/thunks/operationsThunk';

export const Layout = ({ children }: { children?: ReactElement }) => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAuthSelector();
  const { isLoading: authLoading } = useAuthSelector();
  const [loader, setLoader] = useState(false);
  const { operations } = useOperationsSelector();

  useInsertionEffect(() => {
    dispatch(initApp());
  }, []);

  useEffect(() => {
    if (!operations.length) {
      dispatch(GetOperations(false));
    }
  }, [operations]);

  useEffect(() => {
    const isLoading = authLoading; //const isLoading = authLoading || operationsLoading ...

    setLoader(isLoading);
  }, [authLoading]);

  return (
    <div className={styles.layout}>
      <Header />
      <Portal>
        <FullscreenLoader active={loader} />
      </Portal>
      <main className={styles['safe-area']}>
        {!isAuth && <p className={styles.info}>Только для авторизованных пользователей</p>}
        {isAuth && children}
      </main>
    </div>
  );
};
