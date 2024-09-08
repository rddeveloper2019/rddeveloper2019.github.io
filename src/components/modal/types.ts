import { ReactElement } from 'react';

export type ModalPropSTypes = {
  children: ReactElement;
  visible: boolean;
  backgroundClickHandler?: () => void;
};
