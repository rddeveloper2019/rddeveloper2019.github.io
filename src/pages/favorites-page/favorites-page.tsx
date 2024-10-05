import React, { useState } from 'react';
import OperationsList from '../../components/operations-list';
import { Operation } from '../../model/types';
import { useNavigate } from 'react-router-dom';
import { useAuthSelector, useOperationsSelector } from '../../store/selectors';
import { SlideValues } from '../../components/dual-range-slider/types';
import { DualRangeSlider } from '../../components/dual-range-slider';

export const FavoritesPage = () => {
  const { isAuth } = useAuthSelector();
  const { operations } = useOperationsSelector();
  const [slideValues, setSlideValues] = useState<SlideValues>({ minValue: 0, maxValue: 0 });
  const navigate = useNavigate();

  const onSlide: (data: SlideValues) => void = ({ minValue, maxValue }) => {
    setSlideValues({ minValue, maxValue });
  };

  const redirectToDetail = (operation: Operation) => {
    navigate(`/operation/${operation.id}`, { state: { id: operation.id } });
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
          onItemSelect={redirectToDetail}
        />
      </div>
    </div>
  );
};
