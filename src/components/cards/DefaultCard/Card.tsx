import React from 'react';
import '../Card.scss';
import CardItem from '../CardItem';
import { BiAlignLeft, BiDollar } from 'react-icons/bi';
import { AiFillTags } from 'react-icons/ai';

export interface CardProps {
  category?: string;
  description?: string;
  sum_currency?: string;
}

const Card: React.FC<CardProps> = ({ category = 'Категория', description = 'Описание ', sum_currency = '100,0' }) => {
  return (
    <div className="card-container">
      <CardItem icon={<AiFillTags size={20} />} title={category} subtitle="текст под актегорией" />
      <CardItem icon={<BiAlignLeft size={20} />} title={description} subtitle="текст под описанием" />
      <CardItem icon={<BiDollar size={20} />} title={sum_currency} subtitle="текст под суммой" />
    </div>
  );
};

export default Card;
