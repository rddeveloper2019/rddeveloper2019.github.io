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
import {
  addOperation,
  setOperations,
  editOperation,
  toggleOperationFavorite,
} from '../../store/slices/operationsSlice';
import { OperationFormType } from '../../components/operation-form/types';
import { Mode } from '../../components/operation-form/constants';
import { sanitizeOperationFormData } from 'src/model/utils/sanitizeOperationFormData';
import { v4 as uuidv4 } from 'uuid';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { modal } = useModalSelector();
  const [count, setCount] = useState<number>(0);
  const { operations } = useOperationsSelector();
  const { isAuth } = useAuthSelector();
  const [operationFormData, setOperationFormData] = useState<Operation>();
  const navigate = useNavigate();
  const [slideValues, setSlideValues] = useState<SlideValues>({ minValue: 0, maxValue: 0 });
  const [mode, setMode] = useState<Mode>(Mode.ADD);

  useEffect(() => {
    if (count) {
      dispatch(setOperations([...operations, ...createRandomOperations(5)]));
    }
  }, [count]);

  const onSlide: (data: SlideValues) => void = ({ minValue, maxValue }) => {
    setSlideValues({ minValue, maxValue });
  };

  const onOperationSelect = (operation: Operation) => {
    console.log('onOperationSelect: ', operation);

    navigate(`/operation/${operation.id}`, { state: { operation } });
  };

  const showNewOperationModal = () => {
    setMode(Mode.ADD);
    setOperationFormData(null);
    dispatch(showModal());
  };

  const setDataAndOpenEditForm = (data: Operation) => {
    setOperationFormData(data);
    setMode(Mode.EDIT);
    dispatch(showModal());
  };

  const changeOperation = (data: OperationFormType) => {
    console.log('onOperationEdit: ', data);
    dispatch(editOperation(sanitizeOperationFormData(data)));
  };

  const addNewOperation = (data: OperationFormType) => {
    //для демонстрации
    const operation: Operation = sanitizeOperationFormData(data);
    dispatch(addOperation({ ...operation, id: uuidv4() }));
  };

  const handleByMode = (mode: Mode) => (operation: OperationFormType) => {
    if (mode === Mode.EDIT) {
      changeOperation(operation);
    } else if (mode === Mode.ADD) {
      setOperationFormData(null);
      addNewOperation(operation);
    }
  };

  const onFavoriteItemToggle = (operation: Operation) => {
    dispatch(toggleOperationFavorite(operation.id));
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
          onItemEdit={setDataAndOpenEditForm}
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
          <OperationForm operation={operationFormData} onOperationFormSubmit={handleByMode(mode)} />
        </ModalControl>
      )}
    </div>
  );
};
