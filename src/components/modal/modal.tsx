import React, { FC, MouseEventHandler, ReactEventHandler } from 'react';
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
  backgroundClickHandler = () => {},
}) => {
  if (!visible) {
    return;
  }

  const onClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event?.target !== event?.currentTarget) {
      return;
    }
    backgroundClickHandler();
  };

  const preventClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event?.preventDefault();
    event?.stopPropagation();
    return;
  };

  return (
    <div data-set-modal-wrapper="modal-wrapper" className={cn(styles.wrapper)} onClick={onClick}>
      <div className={cn(styles.modal)} onClickCapture={preventClick}>
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
