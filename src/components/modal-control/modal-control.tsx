import React, { FC, useState } from 'react';
import Modal from '../modal/modal';
import { Portal } from '../portal/Portal';
import { ModalControlProps } from './types';

export const ModalControl: FC<ModalControlProps> = ({ children }) => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <Portal>
        <Modal visible={visible} backgroundClickHandler={() => setVisible(false)}>
          {children}
        </Modal>
      </Portal>
    </>
  );
};
