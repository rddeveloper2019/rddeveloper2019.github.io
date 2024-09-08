import React, { FC, useContext } from 'react';
import Modal from '../modal/modal';
import { MainContext } from '../../store/provider';
import { Portal } from '../portal/Portal';
import { ModalControlProps } from './types'; // Импортируем компонент Portal

export const ModalControl: FC<ModalControlProps> = ({ children, cancelButtonText, confirmButtonText }) => {
  const { modal, setModal } = useContext(MainContext);

  const hideModal = () => {
    setModal(false);
  };
  return (
    <>
      <Portal>
        <Modal visible={modal} backgroundClickHandler={hideModal}>
          {children}
        </Modal>
      </Portal>
    </>
  );
};
