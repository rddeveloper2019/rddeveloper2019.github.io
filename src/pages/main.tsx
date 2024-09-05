import React from 'react';
import { ModalControl } from 'src/components/modal-control/modal-control';
import OperationsList from '../components/operations-list';
import { createRandomOperations } from 'src/model/utils';

export const MainPage = () => {
  return (
    <div style={{ display: 'flex', padding: 20 }}>
      <div style={{ width: '50%' }}>
        <OperationsList operations={createRandomOperations(10)} />
      </div>
      <div style={{ width: '50%' }}>
        <ModalControl />
      </div>
    </div>
  );
};
