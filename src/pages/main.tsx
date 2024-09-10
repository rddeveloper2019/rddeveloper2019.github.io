import React, { useContext, useEffect, useState } from 'react';
import OperationsList from '../components/operations-list';
import { createRandomOperations } from 'src/model/utils';
import { Operation } from '../model/types';
import { MainContext } from 'src/store/provider';
import TextButton from '../components/text-button/text-button';
import styles from './main.module.scss';
import { TextButtonState } from 'src/components/text-button/types';
import OperationForm from 'src/components/operation-form/operation-form';

export const MainPage = () => {
  const [count, setCount] = useState<number>(0);
  const [operations, setOperations] = useState<Operation[]>([...createRandomOperations(10)]);
  const { isAuth } = useContext(MainContext);

  useEffect(() => {
    if (count) {
      setOperations((prev) => [...prev, ...createRandomOperations(5)]);
    }
  }, [count]);
  const onOperationSelect = (operation: Operation) => {
    console.log('onOperationSelect: ', JSON.stringify(operation));
  };

  const onOperationEdit = (operation: Operation) => {
    console.log('onOperationEdit: ', operation);
  };

  const showOperationModal = () => {
    console.log('## -showOperationModal: ');
  };

  if (!isAuth) {
    return null;
  }

  const operation = {
    id: 'lj52i',
    name: 'Operation 590',
    createdAt: '27.05.2023',
    amount: 310,
    category: { id: 'i4sane', name: 'byke', photo: 'https://picsum.photos/200' },
    type: 'Profit',
    desc: 'lorem lorem lorem lorem',
  };

  return (
    <div style={{ width: '50%', padding: 50 }}>
      <OperationForm operation={operation as Operation} />
    </div>
  );

  return (
    <div style={{ display: 'flex', padding: 20 }}>
      <div style={{ width: '50%' }}>
        <OperationsList
          operations={operations}
          addMore={() => setCount(count + 1)}
          onItemEdit={onOperationEdit}
          onItemSelect={onOperationSelect}
        />
      </div>
      <TextButton
        type="button"
        className={styles['add-button']}
        state={TextButtonState.PRIMARY}
        handleClick={showOperationModal}
      >
        +
      </TextButton>
    </div>
  );
};
