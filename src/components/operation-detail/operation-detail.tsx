import React, { FC } from 'react';
import { OperationDetailPropsTypes } from 'src/components/operation-detail/types';
import styles from './operation-detail.module.scss';
import cn from 'clsx';
import { OperationDetailType } from 'src/app/types';
import { GiWallet } from 'react-icons/gi';

const OperationDetail: FC<OperationDetailPropsTypes> = ({ icon = null, data = {}, bordered = false, width }) => {
  const { amount, title, description, category } = data as OperationDetailType;

  return (
    <div className={cn(styles['operation-detail'], bordered && styles.bordered)} style={{ width: width }}>
      <div className={cn(styles.icon)}>{(icon && icon) || <GiWallet size={20} />}</div>
      <div className={cn(styles['operation-detail-content'])}>
        {category && <div className={cn(styles.category)}>{category}</div>}
        {title && <div className={cn(styles.title)}>{title}</div>}
        {description && <div className={cn(styles.description)}>{description}</div>}
        {amount && <div className={cn(styles.amount)}>{amount.toString().replace('.', ', ')}</div>}
      </div>
    </div>
  );
};

export default OperationDetail;
