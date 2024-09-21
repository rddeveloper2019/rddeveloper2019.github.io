import React, { useEffect, useState } from 'react';
import OperationsList from '../../components/operations-list';
import { createRandomOperations } from 'src/model/utils';
import { Operation } from '../../model/types';
import OperationForm from '../../components/operation-form/operation-form';
import { ModalControl } from '../../components/modal-control/modal-control';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/store';
import { useAuthSelector, useModalSelector, useOperationsSelector } from '../../store/selectors';
import { OperationFormType } from '../../components/operation-form/types';
import { showModal } from '../../store/slices/modalSlice';
import { SlideValues } from 'src/components/dual-range-slider/types';
import { setOperations, toggleOperationFavorite } from 'src/store/slices/operationsSlice';
import { DualRangeSlider } from 'src/components/dual-range-slider';

export const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  const { modal } = useModalSelector();
  const { isAuth } = useAuthSelector();
  const [operationFormData, setOperationFormData] = useState<Operation>();
  const [count, setCount] = useState<number>(0);
  const { operations } = useOperationsSelector();
  const [slideValues, setSlideValues] = useState<SlideValues>({ minValue: 0, maxValue: 0 });
  const navigate = useNavigate();

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

  const setDataAndOpenEditForm = (data: Operation) => {
    setOperationFormData(data);
    dispatch(showModal());
  };

  const onFavoriteItemToggle = (operation: Operation) => {
    dispatch(toggleOperationFavorite(operation.id));
  };

  const editOperation = (operation: OperationFormType) => {
    console.log('onOperationEdit: ', operation);
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
          operations={operations.filter(({ isFavorite, amount }) => {
            return Boolean(isFavorite) && amount >= slideValues.minValue && amount <= slideValues.maxValue;
          })}
          addMore={() => setCount(count + 1)}
          onItemEdit={setDataAndOpenEditForm}
          onItemSelect={onOperationSelect}
          onFavoriteItemToggle={onFavoriteItemToggle}
        />
      </div>
      {modal && (
        <ModalControl>
          <OperationForm operation={operationFormData} onOperationFormSubmit={editOperation} />
        </ModalControl>
      )}
    </div>
  );
};
