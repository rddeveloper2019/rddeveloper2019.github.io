import OperationDetail from '../operation-detail';
import { useEffect } from 'react';
import { setOperations } from '../../../store/slices/operationsSlice';
import { createRandomOperations } from '../../../model/utils';
import { useOperationsSelector } from '../../../store/selectors';
import { useAppDispatch } from '../../../store/store';
import Card from '../../card/Card';
import React from 'react';

export const OperationDetailExample = () => {
  const dispatch = useAppDispatch();
  const { operations } = useOperationsSelector();
  useEffect(() => {
    dispatch(setOperations([...operations, ...createRandomOperations(5)]));
  }, []);
  return (
    <Card>
      <OperationDetail data={operations[0]} />
    </Card>
  );
};
