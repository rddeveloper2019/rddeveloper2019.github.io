import React, { useContext, useEffect, useState } from 'react';
import OperationsList from '../components/operations-list';
import { createRandomOperations } from 'src/model/utils';
import { Operation } from '../model/types';
import { MainContext } from 'src/store/provider';

export const MainPage = () => {
  const [count, setCount] = useState<number>(0);
  const [operations, setOperations] = useState<Operation[]>([...createRandomOperations(10)]);
  const { isAuth } = useContext(MainContext);

  useEffect(() => {
    if (count) {
      setOperations((prev) => [...prev, ...createRandomOperations(5)]);
    }
  }, [count]);

  return (
    <div style={{ display: 'flex', padding: 20 }}>
      {isAuth && (
        <div style={{ width: '50%' }}>
          <OperationsList operations={operations} addMore={() => setCount(count + 1)} />
        </div>
      )}
    </div>
  );
};
