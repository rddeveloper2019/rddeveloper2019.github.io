import React from 'react';
import './Card.scss';
import { BiDollar } from "react-icons/bi";
export interface MiniCardProps {
  width?: string;
  height?: string;
  category?: string;
  description?: string;
  sum_currency?: string;
}

const MiniCard: React.FC<MiniCardProps> = ({
  width = '200px',
  height = 'auto',
  category = 'Категория',
  description = 'Описание ',
  sum_currency = '100,0',
}) => {
  return (
    <div className="card-container" style={{ width, height }}>
      <h3 className="card-title">{category}</h3>
      <p className="card-description">{description}</p>
      <p className="card-description">
        <BiDollar />
        {sum_currency}
      </p>
    </div>
  );
};

export default MiniCard;
