import React, { FC } from 'react';
import { OperationDetailPropsTypes } from 'src/components/operation-detail/types';
import styles from './operation-detail.module.scss';
import cn from 'clsx';

const OperationDetail: FC<OperationDetailPropsTypes> = ({ data, bordered = false, width }) => {
  const { amount, name, desc, category } = data;

  return (
    <div className={cn(styles['operation-detail'], bordered && styles.bordered)} style={{ width: width || '100%' }}>
      <div className={cn(styles.logo)}>{category.photo && <img src={category.photo} alt={category.name} />}</div>
      <div className={cn(styles['operation-detail-content'])}>
        {category.name && <div className={cn(styles.category)}>{category.name}</div>}
        {name && <div className={cn(styles.title)}>{name}</div>}
        {desc && <div className={cn(styles.description)}>{desc}</div>}
        {amount && <div className={cn(styles.amount)}>{amount.toString().replace('.', ', ')} $</div>}
      </div>
    </div>
  );
};

export default OperationDetail;
