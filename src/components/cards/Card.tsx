import React from 'react';
import './Card.scss';
import CardItem from './CardItem';
import { FaCamera, FaWalking } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { FcCurrencyExchange } from "react-icons/fc";

interface CardProps {
  width?: string;
  height?: string;
  category?: string;
  description?: string;
  sum_currency?: string;
}

const Card: React.FC<CardProps> = ({width = '400px', height = 'auto', category = 'Категория',
                                     description = 'Тут отображается описание ', sum_currency = '100,0'}) => {
  return (
    <div className="card-container" style={{ width, height }}>
      <h3 className="card-title">{category}</h3>
      <p className="card-description">{description}</p>
      <CardItem icon={<FcCurrencyExchange />} title={sum_currency} subtitle="" />
      {/*<CardItem icon={<FaWalking />} title="Work" subtitle="Jan 7, 2019" />*/}
      {/*<CardItem icon={<MdWork />} title="Vacation" subtitle="July 20, 2019" />*/}
    </div>
  );
};

export default Card;
