import React, { useEffect, useState } from 'react';
import OperationsList from '../../components/operations-list';
import { createRandomOperations } from '../../model/utils';
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
import { addOperation } from '../../store/slices/operationsSlice';
import { OperationFormType } from '../../components/operation-form/types';
import { sanitizeOperationFormData } from '../../model/utils/sanitizeOperationFormData';
import { v4 as uuidv4 } from 'uuid';
import { GetOperations } from '../../store/thunks/operationsThunk';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const [modal, setModal] = useState(false);
  const { operations } = useOperationsSelector();
  const { isAuth, isAdmin } = useAuthSelector();
  const navigate = useNavigate();
  const [slideValues, setSlideValues] = useState<SlideValues>({ minValue: 0, maxValue: 0 });

  const loadMoreOperations = () => {
    dispatch(GetOperations(true));
  };
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
          addMore={loadMoreOperations}
          onItemSelect={redirectToDetail}
        />
      </div>
      {isAdmin && (
        <TextButton
          type="button"
          className={styles['add-button']}
          state={TextButtonState.PRIMARY}
          handleClick={showNewOperationModal}
        >
          +
        </TextButton>
      )}
      {modal && (
        <ModalControl backgroundClickHandler={() => setModal(false)}>
          <OperationForm onOperationFormSubmit={addNewOperation} onCancel={() => setModal(false)} />
        </ModalControl>
      )}
    </div>
  );
};
