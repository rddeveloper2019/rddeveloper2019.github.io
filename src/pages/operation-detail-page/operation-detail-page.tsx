import React from 'react';

import styles from './operation-datail-page.module.scss';
import OperationDetail from '../../components/operation-detail/operation-detail';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Card from '../../components/card/Card';
import { useOperationsSelector } from '../../store/selectors';

export const OperationDetailPage = () => {
  const { operations } = useOperationsSelector();
  const { state } = useLocation();
  const navigate = useNavigate();

  const operation = operations.find(({ id }) => id === state.id);
  if (!state.id || !operation) {
    navigate('*');
    return;
  }

  return (
    <div className={styles.page}>
      <Card width={500}>
        <OperationDetail data={operations.find(({ id }) => id === state.id)} />
      </Card>
    </div>
  );
};
