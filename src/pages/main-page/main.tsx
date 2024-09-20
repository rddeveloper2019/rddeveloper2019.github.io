import React, { useEffect, useState } from 'react';
import OperationsList from '../../components/operations-list';
import { createRandomOperations } from 'src/model/utils';
import { Operation } from '../../model/types';
import TextButton from '../../components/text-button/text-button';
import styles from './main.module.scss';
import { TextButtonState } from '../../components/text-button/types';
import OperationForm from '../../components/operation-form/operation-form';
import { ModalControl } from '../../components/modal-control/modal-control';
import { useNavigate } from 'react-router-dom';
import { DualRangeSlider } from '../../components/dual-range-slider';
import { SlideValues } from '../../components/dual-range-slider/types';
import { useAppDispatch } from '../../store/store';
import { useAuthSelector, useModalSelector, useOperationsSelector } from '../../store/selectors';
import { showModal } from '../../store/slices/modalSlice';
import { setOperations } from 'src/store/slices/operationsSlice';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { modal } = useModalSelector();
  const [count, setCount] = useState<number>(0);
  const { operations } = useOperationsSelector();
  const { isAuth } = useAuthSelector();
  const [editedOperation, setEditedOperation] = useState<Operation>();
  const navigate = useNavigate();
  const [slideValues, setSlideValues] = useState<SlideValues>({ minValue: 0, maxValue: 0 });

  const onSlide: (data: SlideValues) => void = ({ minValue, maxValue }) => {
    setSlideValues({ minValue, maxValue });
    console.log({ minValue, maxValue });
  };

  useEffect(() => {
    if (count) {
      dispatch(setOperations([...operations, ...createRandomOperations(5)]));
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
        <div style={{ padding: 10, display: 'flex', justifyContent: 'center' }}>
          <DualRangeSlider onSlide={onSlide} width={350} />
        </div>

        <OperationsList
          operations={operations.filter(
            (item) => item.amount >= slideValues.minValue && item.amount <= slideValues.maxValue
          )}
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
