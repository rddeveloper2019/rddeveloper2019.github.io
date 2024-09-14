import React from 'react';

import styles from './operation-datail-page.module.scss';
import OperationDetail from '../../components/operation-detail/operation-detail';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import Card from '../../components/card/Card';

export const OperationDetailPage = () => {
  const params = useParams();
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
