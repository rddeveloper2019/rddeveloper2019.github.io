import React, { useContext, useEffect, useState } from 'react';
import OperationsList from '../components/operations-list';
import { createRandomOperations } from 'src/model/utils';
import { Operation } from '../model/types';
import { MainContext } from 'src/store/provider';
import TextButton from '../components/text-button/text-button';
import styles from './main.module.scss';
import { TextButtonState } from 'src/components/text-button/types';
import OperationForm from 'src/components/operation-form/operation-form';
import { ModalControl } from 'src/components/modal-control/modal-control';

export const MainPage = () => {
  const [count, setCount] = useState<number>(0);
  const [operations, setOperations] = useState<Operation[]>([...createRandomOperations(10)]);
  const { isAuth, modal, setModal } = useContext(MainContext);
  const [editedOperation, setEditedOperation] = useState<Operation>();
  useEffect(() => {
    if (count) {
      setOperations((prev) => [...prev, ...createRandomOperations(5)]);
    }
  }, [count]);
  const onOperationSelect = (operation: Operation) => {};

  const onOperationEdit = (operation: Operation) => {
    setEditedOperation(operation);
    setModal(true);
    console.log('onOperationEdit: ', operation);
  };

  const showNewOperationModal = () => {
    //для демонстрации
    setEditedOperation(null);
    setModal(true);
  };

  if (!isAuth) {
    return null;
  }

  return (
    <div style={{ display: 'flex', padding: 20 }}>
      <div style={{ width: '85%' }}>
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
        handleClick={showNewOperationModal}
      >
        +
      </TextButton>
      {modal && (
        <ModalControl>
          <OperationForm operation={editedOperation} />
        </ModalControl>
      )}
    </div>
  );
};
