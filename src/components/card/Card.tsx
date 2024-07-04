import React, { FC, ReactNode } from 'react';
import styled from './card.module.scss';
import cn from 'clsx';
import { CardPropsType } from 'src/components/card/types';

const Card: FC<CardPropsType> = ({ children, width }) => {
  return (
    <div className={cn(styled.card)} style={{ width: width }}>
      {children}
    </div>
  );
};

export default Card;
