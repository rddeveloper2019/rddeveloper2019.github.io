import React from 'react';

import styles from './operation-datail-page.module.scss';
import OperationDetail from '../../components/operation-detail/operation-detail';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../../components/card/Card';
import { useOperationsSelector } from '../../store/selectors';
import { ModalControl } from '../../components/modal-control/modal-control';
import cn from 'clsx';
import { clearOperationsError } from '../../store/slices/operationsSlice';
import { useAppDispatch } from '../../store/store';

export const OperationDetailPage = () => {
  const dispatch = useAppDispatch();
  const { operations, operationsError } = useOperationsSelector();
  const { state } = useLocation();
  const navigate = useNavigate();

  const operation = operations.find(({ id }) => id === state.id);
  if (!state.id || !operation) {
    navigate('*');
    return;
  }
  const clearError = () => dispatch(clearOperationsError());

  return (
    <>
      <div className={styles.page}>
        <Card width={500}>
          <OperationDetail data={operations.find(({ id }) => id === state.id)} />
        </Card>
      </div>
      {operationsError && (
        <ModalControl backgroundClickHandler={clearError}>
          <Card className={cn(styles['error-message'], styles['p-40'])}>{operationsError}</Card>
        </ModalControl>
      )}
    </>
  );
};
