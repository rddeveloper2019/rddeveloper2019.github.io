import React from 'react';

import styles from './operation-datail-page.module.scss';
import OperationDetail from '../../components/operation-detail/operation-detail';
import { useLocation } from 'react-router-dom';
import Card from '../../components/card/Card';

export const OperationDetailPage = () => {
  const {
    state: { operation },
  } = useLocation();

  return (
    <div className={styles.page}>
      <Card width={500}>
        <OperationDetail data={operation} />
      </Card>
    </div>
  );
};
