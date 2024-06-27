import React, { ReactNode } from 'react';
import styled from './Card.module.scss';
import cn from 'clsx';

const Card = ({ children }: { children: ReactNode }) => {
  return <div className={cn(styled.card)}>{children}</div>;
};

export default Card;
