import { ReactElement } from 'react';

export type ModalPropSTypes = {
  children: ReactElement;
  visible: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  backgroundClickHandler?: () => void;
};
