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
import { useAuthSelector, useOperationsSelector } from '../../store/selectors';
import { addOperation, setOperations } from '../../store/slices/operationsSlice';
import { OperationFormType } from '../../components/operation-form/types';
import { sanitizeOperationFormData } from '../..//model/utils/sanitizeOperationFormData';
import { v4 as uuidv4 } from 'uuid';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const [modal, setModal] = useState(false);
  const [count, setCount] = useState<number>(0);
  const { operations } = useOperationsSelector();
  const { isAuth } = useAuthSelector();
  const navigate = useNavigate();
  const [slideValues, setSlideValues] = useState<SlideValues>({ minValue: 0, maxValue: 0 });

  useEffect(() => {
    if (count) {
      dispatch(setOperations([...operations, ...createRandomOperations(5)]));
    }
  }, [count]);

  const onSlide: (data: SlideValues) => void = ({ minValue, maxValue }) => {
    setSlideValues({ minValue, maxValue });
  };

  const redirectToDetail = (operation: Operation) => {
    navigate(`/operation/${operation.id}`, { state: { operation } });
  };

  const showNewOperationModal = () => {
    setModal(true);
  };

  const addNewOperation = (data: OperationFormType) => {
    //для демонстрации
    const operation: Operation = sanitizeOperationFormData(data);
    setModal(false);
    dispatch(addOperation({ ...operation, id: uuidv4() }));
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
          onItemSelect={redirectToDetail}
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
        <ModalControl backgroundClickHandler={() => setModal(false)}>
          <OperationForm onOperationFormSubmit={addNewOperation} onCancel={() => setModal(false)} />
        </ModalControl>
      )}
    </div>
  );
};
