import React, { FC } from 'react';
import Modal from '../modal/modal';
import { Portal } from '../portal/Portal';
import { ModalControlProps } from './types';
import { useAppDispatch } from '../../store/store';
import { useModalSelector } from '../../store/selectors';
import { hideModal } from '../../store/slices/modalSlice';

export const ModalControl: FC<ModalControlProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { modal } = useModalSelector();

  const closeModal = () => {
    dispatch(hideModal());
  };

  return (
    <>
      <Portal>
        <Modal visible={modal} backgroundClickHandler={closeModal}>
          {children}
        </Modal>
      </Portal>
    </>
  );
};
