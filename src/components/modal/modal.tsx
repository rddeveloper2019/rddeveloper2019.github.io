import React, { FC, MouseEventHandler } from 'react';
import { ModalPropSTypes } from './types';
import styles from './modal.module.scss';
import cn from 'clsx';

const Modal: FC<ModalPropSTypes> = ({ children, backgroundClickHandler, visible = true }) => {
  if (!visible) {
    return null;
  }
  const onClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    if (event?.target !== event?.currentTarget) {
      return;
    }

    backgroundClickHandler();
  };

  return (
    <div data-set-modal-wrapper="modal-wrapper" className={cn(styles.wrapper)} onClick={onClick}>
      <div className={cn(styles.modal)}>{children}</div>
    </div>
  );
};

export default Modal;
