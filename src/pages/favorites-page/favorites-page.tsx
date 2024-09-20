import React, { useEffect, useState } from 'react';
import OperationsList from '../../components/operations-list';
import { createRandomOperations } from 'src/model/utils';
import { Operation } from '../../model/types';
import TextButton from '../../components/text-button/text-button';
import styles from './favorites-page.module.scss';
import { TextButtonState } from '../../components/text-button/types';
import OperationForm from '../../components/operation-form/operation-form';
import { ModalControl } from '../../components/modal-control/modal-control';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/store';
import { useAuthSelector, useModalSelector } from '../../store/selectors';
import { showModal } from '../../store/slices/modalSlice';

export const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  const { modal } = useModalSelector();
  const { isAuth } = useAuthSelector();

  const [count, setCount] = useState<number>(0);
  const [operations, setOperations] = useState<Operation[]>([...createRandomOperations(10)]);

  const [editedOperation, setEditedOperation] = useState<Operation>();
  const navigate = useNavigate();

  useEffect(() => {
    if (count) {
      setOperations((prev) => [...prev, ...createRandomOperations(5)]);
    }
  }, [count]);

  const onOperationSelect = (operation: Operation) => {
    console.log('onOperationSelect: ', operation);
    navigate(`/operation/${operation.id}`, { state: { operation } });
  };

  const onOperationEdit = (operation: Operation) => {
    setEditedOperation(operation);
    dispatch(showModal());
    console.log('onOperationEdit: ', operation);
  };

  const showNewOperationModal = () => {
    //для демонстрации
    setEditedOperation(null);
    dispatch(showModal());
  };

  const onFavoriteItemToggle = (operation: Operation) => {
    console.log('onFavoriteItemToggle: ', operation);

    const foundIndex = operations.findIndex(({ id }) => id === operation.id);
    const editedOperation = { ...operation, isFavorite: !operation?.isFavorite } as Operation;
    const editedOperations = [
      ...operations.slice(0, foundIndex),
      editedOperation,
      ...operations.slice(foundIndex + 1),
    ] as Operation[];
    setOperations(editedOperations);
  };

  if (!isAuth) {
    return null;
  }

  return (
    <div>
      <div style={{ width: '85%' }}>
        <OperationsList
          operations={operations.filter(({ isFavorite }) => Boolean(isFavorite))}
          addMore={() => setCount(count + 1)}
          onItemEdit={onOperationEdit}
          onItemSelect={onOperationSelect}
          onFavoriteItemToggle={onFavoriteItemToggle}
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
