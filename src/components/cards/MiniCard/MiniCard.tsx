import React from 'react';
import '../Card.scss';
import CardItem from '../CardItem';
import { AiFillTags } from 'react-icons/ai';

export interface MiniCardProps {
  category?: string;
  sum_currency?: string;
}

const MiniCard: React.FC<MiniCardProps> = ({ category = 'Категория', sum_currency = '100,0' }) => {
  return (
    <div className="card-container">
      <CardItem icon={<AiFillTags size={20} />} title={category} subtitle={sum_currency} />
      <p></p>
    </div>
  );
};

export default MiniCard;
