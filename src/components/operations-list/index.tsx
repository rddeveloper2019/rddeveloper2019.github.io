import React, { FC } from 'react';
import { OperationsListPropsType } from './types';
import OperationDetail from '../../components/operation-detail/operation-detail';
import Card from '../card/Card';
import styles from './operations-list.module.scss';
const OperationsList: FC<OperationsListPropsType> = ({
  operations,
  addMore,
  isInfinite = true,
  onItemEdit,
  onItemSelect,
  onFavoriteItemToggle,
}) => {
  if (!operations || !operations.length) {
    return null;
  }

  return (
    <ul className={styles.operations}>
      {operations.map((operation, idx) => (
        <Card
          key={operation.id}
          width={400}
          isLast={operations.length - 1 === idx}
          onIntersect={() => isInfinite && addMore?.()}
        >
          <OperationDetail
            data={operation}
            onClick={onItemSelect}
            onEdit={onItemEdit}
            onFavoriteToggle={onFavoriteItemToggle}
          />
        </Card>
      ))}
    </ul>
  );
};

export default OperationsList;
