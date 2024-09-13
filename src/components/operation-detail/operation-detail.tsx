import React, { FC } from 'react';
import { OperationDetailPropsTypes } from './types';
import styles from './operation-detail.module.scss';
import cn from 'clsx';
import TextButton from '../../components/text-button/text-button';
import { TextButtonState } from '../../components/text-button/types';

const OperationDetail: FC<OperationDetailPropsTypes> = ({ data, bordered = false, width, onEdit, onClick }) => {
  const { amount, name, desc, category, createdAt } = data;

  return (
    <div
      className={cn(styles['operation-detail'], bordered && styles.bordered)}
      style={{ width: width || '100%' }}
      onClick={() => onClick?.(data)}
    >
      <div className={cn(styles.logo)}>{category.photo && <img src={category.photo} alt={category.name} />}</div>
      <div className={cn(styles['operation-detail-content'])}>
        {category.name && <div className={cn(styles.category)}>{category.name}</div>}
        {name && <div className={cn(styles.title)}>{name}</div>}
        {desc && <div className={cn(styles.description)}>{desc}</div>}
        {amount && <div className={cn(styles.amount)}>{amount.toString().replace('.', ', ')} $</div>}
        {createdAt && <div className={cn(styles['created-at'])}>{new Date(createdAt).toLocaleDateString('RU')}</div>}
      </div>
      <TextButton
        type="button"
        state={TextButtonState.PRIMARY}
        className={styles['edit-button']}
        handleClick={() => onEdit?.(data)}
      >
        <div>🖊️</div>
      </TextButton>
    </div>
  );
};

export default OperationDetail;
