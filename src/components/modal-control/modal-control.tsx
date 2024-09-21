import React, { FC, useEffect, useState } from 'react';
import Modal from '../modal/modal';
import { Portal } from '../portal/Portal';
import { ModalControlProps } from './types';

export const ModalControl: FC<ModalControlProps> = ({ children, backgroundClickHandler }) => {
  return (
    <>
      <Portal>
        <Modal backgroundClickHandler={() => backgroundClickHandler?.()}>{children}</Modal>
      </Portal>
    </>
  );
};
