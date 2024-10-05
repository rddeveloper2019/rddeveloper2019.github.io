import { Operation } from '../../model/types';

export type OperationFormPropTypes = {
  operation?: Operation;
  onOperationFormSubmit: (operation: OperationFormType) => void;
  onCancel?: () => void;
};

export type OperationFormType = {
  id?: string;
  name: string;
  desc?: string;
  date: string;
  amount: string;
  categoryId: string;
  photo?: string;
  isFavorite?: boolean;
  type?: 'Cost' | 'Profit';
};
