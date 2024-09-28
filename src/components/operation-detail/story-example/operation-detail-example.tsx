import OperationDetail from '../operation-detail';
import React from 'react';
import { useOperationsSelector } from '../../../store/selectors';
import Card from '../../card/Card';

export const OperationDetailExample = () => {
  const { operations } = useOperationsSelector();

  return (
    <Card>
      <OperationDetail data={operations[0]} />
    </Card>
  );
};
