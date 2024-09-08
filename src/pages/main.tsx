import React, { useEffect, useState } from 'react';
import { ModalControl } from 'src/components/modal-control/modal-control';
import OperationsList from '../components/operations-list';
import { createRandomOperations } from 'src/model/utils';
import { Operation } from '../model/types';
import LoginForm from 'src/components/login-form/login-form';

export const MainPage = () => {
  const [count, setCount] = useState<number>(0);
  const [operations, setOperations] = useState<Operation[]>([...createRandomOperations(10)]);

  useEffect(() => {
    if (count) {
      setOperations((prev) => [...prev, ...createRandomOperations(5)]);
    }
  }, [count]);

  return (
    <div style={{ display: 'flex', padding: 20 }}>
      <div style={{ width: '50%' }}>
        <OperationsList operations={operations} addMore={() => setCount(count + 1)} />
      </div>
    </div>
  );
};
