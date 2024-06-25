import React from 'react';
import '../Card.scss';
import CardItem from '../CardItem';
import { BiAlignLeft, BiDollar } from 'react-icons/bi';
import { AiFillTags } from 'react-icons/ai';

export interface CardProps {
  width?: string;
  height?: string;
  category?: string;
  description?: string;
  sum_currency?: string;
}

const Card: React.FC<CardProps> = ({
  width = '400px',
  height = 'auto',
  category = 'Категория',
  description = 'Описание ',
  sum_currency = '100,0',
}) => {
  return (
    <div className="card-container" style={{ width, height }}>
      <CardItem icon={<AiFillTags size={20} />} title={category} subtitle="" />
      <CardItem icon={<BiAlignLeft size={20} />} title={description} subtitle="" />
      <CardItem icon={<BiDollar size={20} />} title={sum_currency} subtitle="" />
    </div>
  );
};

export default Card;
