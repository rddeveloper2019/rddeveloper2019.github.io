import React from 'react';
import './CardItem.scss';

interface CardItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const mony = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
});

const CardItem: React.FC<CardItemProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="item-container">
      <div className="icon-wrapper">{icon}</div>
      <div className="content-wrapper">
        <div className="title"> {title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default CardItem;
