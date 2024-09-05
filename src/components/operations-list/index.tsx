import React, { FC } from 'react';
import { OperationsListPropsType } from './types';
import OperationDetail from '../../components/operation-detail/operation-detail';
import Card from '../card/Card';

const OperationsList: FC<OperationsListPropsType> = ({ operations }) => {
  if (!operations || !operations.length) {
    return null;
  }

  return (
    <ul>
      {operations.map((operation) => (
        <Card key={operation.id}>
          <OperationDetail data={operation} />
        </Card>
      ))}
    </ul>
  );
};

export default OperationsList;
