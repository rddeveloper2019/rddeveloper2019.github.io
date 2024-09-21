import React, { useEffect, useState } from 'react';
import { createRandomOperations } from '../../../model/utils';
import OperationsList from '../../../components/operations-list';
import { useAppDispatch } from '../../../store/store';
import { setOperations } from '../../../store/slices/operationsSlice';
import { useOperationsSelector } from '../../../store/selectors';

export const OperationsListInfiniteScrollExample = () => {
  const [count, setCount] = useState<number>(0);
  const { operations } = useOperationsSelector();
  const dispatch = useAppDispatch();
  const handlers = { onItemEdit: console.log, onItemSelect: console.log, onFavoriteItemToggle: console.log };
  useEffect(() => {
    if (count) {
      dispatch(setOperations((prev) => [...prev, ...createRandomOperations(5)]));
    }
  }, [count]);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <OperationsList operations={operations} addMore={() => setCount(count + 1)} {...handlers} />
    </div>
  );
};

export const OperationsListExample = () => {
  const [count, setCount] = useState<number>(0);
  const { operations } = useOperationsSelector();
  const dispatch = useAppDispatch();
  const handlers = { onItemEdit: console.log, onItemSelect: console.log, onFavoriteItemToggle: console.log };
  useEffect(() => {
    if (count) {
      dispatch(setOperations((prev) => [...prev, ...createRandomOperations(5)]));
    }
  }, [count]);

  return (
    <div style={{ overflow: 'hidden' }}>
      <OperationsList operations={operations} addMore={() => setCount(count + 1)} {...handlers} isInfinite={false} />
    </div>
  );
};
