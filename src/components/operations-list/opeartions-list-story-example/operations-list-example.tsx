import React, { useEffect, useState } from 'react';
import OperationsList from '../../../components/operations-list';
import { createRandomOperations } from '../../../model/utils';
import { Operation } from '../../../model/types';

const useMockOperations = () => {
  const [count, setCount] = useState<number>(0);
  const [operations, setOperations] = useState<Operation[]>([...createRandomOperations(10)]);

  useEffect(() => {
    if (count) {
      setOperations((prev) => [...prev, ...createRandomOperations(5)]);
    }
  }, [count]);

  const loadMoreOperations = () => {
    setCount(count + 1);
  };

  return { loadMoreOperations, operations };
};
export const OperationsListInfiniteScrollExample = () => {
  const { operations, loadMoreOperations } = useMockOperations();

  const handlers = { onItemEdit: console.log, onItemSelect: console.log, onFavoriteItemToggle: console.log };

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <OperationsList operations={operations} addMore={loadMoreOperations} {...handlers} />
    </div>
  );
};

export const OperationsListExample = () => {
  const { operations, loadMoreOperations } = useMockOperations();
  const handlers = { onItemEdit: console.log, onItemSelect: console.log, onFavoriteItemToggle: console.log };

  return (
    <div style={{ overflow: 'hidden' }}>
      <OperationsList operations={operations} addMore={loadMoreOperations} {...handlers} isInfinite={false} />
    </div>
  );
};
