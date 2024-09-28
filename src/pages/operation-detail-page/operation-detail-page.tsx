import React from 'react';

import styles from './operation-datail-page.module.scss';
import OperationDetail from '../../components/operation-detail/operation-detail';
import { useLocation } from 'react-router-dom';
import Card from '../../components/card/Card';
import { useOperationsSelector } from '../../store/selectors';

export const OperationDetailPage = () => {
  const { operations } = useOperationsSelector();
  const { state } = useLocation();

  return (
    <div className={styles.page}>
      <Card width={500}>
        <OperationDetail data={operations.find(({ id }) => id === state.id)} />
      </Card>
    </div>
  );
};
