import React, { FC } from 'react';
import { ModalPropSTypes } from './types';
import styles from './modal.module.scss';
import cn from 'clsx';
import TextButton from '../text-button/text-button';
import { TextButtonState } from '../text-button/types';

const Modal: FC<ModalPropSTypes> = ({
  children,
  visible = false,
  confirmButtonText = '',
  cancelButtonText = '',
  onCancel = () => {},
  onConfirm = () => {},
}) => {
  if (!visible) {
    return;
  }
  return (
    <div className={cn(styles.wrapper)}>
      <div className={cn(styles.modal)}>
        {children}
        <div className={cn(styles.buttons)}>
          {onCancel && (
            <TextButton handleClick={onCancel} state={TextButtonState.SECONDARY}>
              {cancelButtonText || 'Cancel'}
            </TextButton>
          )}
          {onConfirm && (
            <TextButton handleClick={onConfirm} state={TextButtonState.PRIMARY}>
              {confirmButtonText || 'Agree'}
            </TextButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
