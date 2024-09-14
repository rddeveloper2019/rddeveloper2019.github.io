import React, { useContext, useEffect, useState } from 'react';
import { createRandomOperations } from '../../model/utils';
import { Operation } from '../../model/types';
import { MainContext } from '../../store/provider';
import styles from './profile-page.module.scss';
import ProfileForm from '../../components/profile-form/profile-form';

export const ProfilePage = () => {
  const [count, setCount] = useState<number>(0);
  const [operations, setOperations] = useState<Operation[]>([...createRandomOperations(10)]);
  const { isAuth, modal, setModal } = useContext(MainContext);
  const [editedOperation, setEditedOperation] = useState<Operation>();
  useEffect(() => {
    if (count) {
      setOperations((prev) => [...prev, ...createRandomOperations(5)]);
    }
  }, [count]);
  const onOperationSelect = (operation: Operation) => {
    console.log('onOperationSelect: ', operation);
  };

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
    <div className={styles.page}>
      <ProfileForm className={styles.form} />
    </div>
  );
};
