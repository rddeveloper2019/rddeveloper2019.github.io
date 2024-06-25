import React from 'react';
import '../Card.scss';
import CardItem from '../CardItem';
import { AiFillTags } from 'react-icons/ai';

export interface MiniCardProps {
  width?: string;
  height?: string;
  category?: string;
  description?: string;
  sum_currency?: string;
}

const MiniCard: React.FC<MiniCardProps> = ({
  width = '400px',
  height = 'auto',
  category = 'Категория',
  description = 'Описание ',
  sum_currency = '100,0',
}) => {
  return (
    <div className="card-container" style={{ width, height }}>
      <CardItem icon={<AiFillTags size={20} />} title={category} subtitle={sum_currency} />
      <p></p>
    </div>
  );
};

export default MiniCard;
