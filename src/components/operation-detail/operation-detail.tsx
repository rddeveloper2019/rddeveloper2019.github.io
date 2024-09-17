import React, { FC, MouseEvent } from 'react';
import { OperationDetailPropsTypes } from './types';
import styles from './operation-detail.module.scss';
import cn from 'clsx';
import TextButton from '../../components/text-button/text-button';
import { TextButtonState } from '../../components/text-button/types';

const OperationDetail: FC<OperationDetailPropsTypes> = ({
  data,
  bordered = false,
  width,
  onFavoriteToggle,
  onEdit,
  onClick,
}) => {
  const { amount, name, desc, category, createdAt, isFavorite } = data;
  const onItemClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    onClick?.(data);
  };
  const operationDate = new Date(createdAt).toLocaleDateString('RU');

  return (
    <div
      className={cn(styles['operation-detail'], bordered && styles.bordered)}
      style={{ width: width || '100%' }}
      onClick={onItemClick}
    >
      <div className={cn(styles.logo)}>{category?.photo && <img src={category.photo} alt={category.name} />}</div>
      <div className={cn(styles['operation-detail-content'])}>
        {category?.name && <div className={cn(styles.category)}>{category.name}</div>}
        {name && <div className={cn(styles.title)}>{name}</div>}
        {desc && <div className={cn(styles.description)}>{desc}</div>}
        {amount && <div className={cn(styles.amount)}>{amount.toString().replace('.', ', ')} $</div>}
        {createdAt && <div className={cn(styles['created-at'])}>{operationDate}</div>}
      </div>
      <div className={styles['edit-buttons']}>
        <TextButton
          type="button"
          state={isFavorite ? TextButtonState.SECONDARY : TextButtonState.PRIMARY}
          className={cn(styles['edit-button'], styles.large)}
          handleClick={() => onFavoriteToggle?.(data)}
        >
          ★
        </TextButton>
        <TextButton
          type="button"
          state={TextButtonState.PRIMARY}
          className={styles['edit-button']}
          handleClick={() => onEdit?.(data)}
        >
          🖊️
        </TextButton>
      </div>
    </div>
  );
};

export default OperationDetail;
