import React, { useState } from 'react';
import OperationsList from '../../../components/operations-list';
import { useAppDispatch } from '../../../store/store';
import { useOperationsSelector } from '../../../store/selectors';
import { GetOperations } from '../../../store/thunks/operationsThunk';

export const OperationsListInfiniteScrollExample = () => {
  const [count, setCount] = useState<number>(0);
  const { operations } = useOperationsSelector();

  const handlers = { onItemEdit: console.log, onItemSelect: console.log, onFavoriteItemToggle: console.log };

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <OperationsList operations={operations} addMore={() => setCount(count + 1)} {...handlers} />
    </div>
  );
};

export const OperationsListExample = () => {
  const { operations } = useOperationsSelector();
  const dispatch = useAppDispatch();
  const handlers = { onItemEdit: console.log, onItemSelect: console.log, onFavoriteItemToggle: console.log };
  const loadMoreOperations = () => {
    dispatch(GetOperations(true));
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <OperationsList operations={operations} addMore={loadMoreOperations} {...handlers} isInfinite={false} />
    </div>
  );
};
