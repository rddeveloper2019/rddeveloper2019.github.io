import React, { FC, MouseEvent, useMemo, useState } from 'react';
import { OperationDetailPropsTypes } from './types';
import styles from './operation-detail.module.scss';
import cn from 'clsx';
import TextButton from '../text-button/text-button';
import { TextButtonState } from '../text-button/types';
import { OperationFormType } from '../operation-form/types';
import { useAppDispatch } from '../../store/store';
import { ModalControl } from '../modal-control/modal-control';
import OperationForm from '../operation-form/operation-form';
import { useAuthSelector, useOperationByIdSelector, useOperationsSelector } from '../../store/selectors';
import { EditOperation, ToggleOperation } from '../../store/thunks/operationsThunk';
import { useLocation } from 'react-router-dom';
import Card from '../card/Card';
import { clearOperationsError } from '../../store/slices/operationsSlice';

const OperationDetail: FC<OperationDetailPropsTypes> = ({
  data,
  bordered = false,
  width,
  onFavoriteToggle,
  onEdit,
  onClick,
}) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const operation = useOperationByIdSelector(data.id);
  const { operationsError } = useOperationsSelector();
  const [modal, setModal] = useState(false);
  const { id, amount, name, desc, category, createdAt, isFavorite, photo } = data;
  const { isAuth } = useAuthSelector();

  const isButtonActive = useMemo(() => {
    return location.pathname.includes('/operation/');
  }, [location]);

  const onItemClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    onClick?.(operation);
  };

  const onFavoriteItemToggle = () => {
    if (!isButtonActive) {
      onClick?.(operation);
    }

    isButtonActive && dispatch(ToggleOperation({ type: operation.type, id: operation.id }));

    onFavoriteToggle?.(data);
  };

  const openEditForm = () => {
    setModal(true);
  };

  const editOperation = (body: OperationFormType) => {
    isButtonActive && dispatch(EditOperation({ ...body, id }));
    setModal(false);

    onEdit?.(null);
  };

  const clearError = () => dispatch(clearOperationsError());
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

        {isAuth && isButtonActive && (
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
            <OperationForm operation={data} onOperationFormSubmit={editOperation} onCancel={() => setModal(false)} />
          </ModalControl>
        )}
        {operationsError && (
          <ModalControl backgroundClickHandler={clearError}>
            <Card className={cn(styles['error-message'], styles['p-40'])}>{operationsError}</Card>
          </ModalControl>
        )}
      </div>
    </div>
  );
};

export default OperationDetail;
