import React, { FC, MouseEvent, useState } from 'react';
import { OperationDetailPropsTypes } from './types';
import styles from './operation-detail.module.scss';
import cn from 'clsx';
import TextButton from '../text-button/text-button';
import { TextButtonState } from '../text-button/types';
import { OperationFormType } from '../operation-form/types';
import { editOperation, toggleOperationFavorite } from '../../store/slices/operationsSlice';
import { sanitizeOperationFormData } from '../../model/utils/sanitizeOperationFormData';
import { useAppDispatch } from '../../store/store';
import { ModalControl } from '../modal-control/modal-control';
import OperationForm from '../operation-form/operation-form';
import { useAuthSelector, useOperationByIdSelector } from '../../store/selectors';

const OperationDetail: FC<OperationDetailPropsTypes> = ({
  data,
  bordered = false,
  width,
  onFavoriteToggle,
  onEdit,
  onClick,
}) => {
  const dispatch = useAppDispatch();
  const operation = useOperationByIdSelector(data.id);

  const [modal, setModal] = useState(false);
  const { amount, name, desc, category, createdAt, isFavorite, photo } = operation;
  const { isAdmin } = useAuthSelector();
  const onItemClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    onClick?.(operation);
  };

  const onFavoriteItemToggle = () => {
    dispatch(toggleOperationFavorite(operation.id));
    onFavoriteToggle?.(data);
  };

  const openEditForm = () => {
    setModal(true);
  };

  const changeOperation = (data: OperationFormType) => {
    const editedOperation = sanitizeOperationFormData({ ...operation, ...data });
    dispatch(editOperation(editedOperation));
    setModal(false);

    onEdit?.(editedOperation);
  };

  const operationDate = new Date(createdAt).toLocaleDateString('RU');

  return (
    <div
      className={cn(styles['operation-detail'], bordered && styles.bordered)}
      style={{ width: width || '100%' }}
      onClick={onItemClick}
    >
      <div className={cn(styles.logo)}>{photo && <img src={photo} />}</div>
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
          handleClick={onFavoriteItemToggle}
        >
          ★
        </TextButton>

        {isAdmin && (
          <TextButton
            type="button"
            state={TextButtonState.PRIMARY}
            className={styles['edit-button']}
            handleClick={openEditForm}
          >
            🖊️
          </TextButton>
        )}
        {modal && (
          <ModalControl backgroundClickHandler={() => setModal(false)}>
            <OperationForm operation={data} onOperationFormSubmit={changeOperation} onCancel={() => setModal(false)} />
          </ModalControl>
        )}
      </div>
    </div>
  );
};

export default OperationDetail;
