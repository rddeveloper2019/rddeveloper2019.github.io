import { Operation } from 'src/model/types';

export type OperationFormPropTypes = {
  operation?: Operation;
  onOperationFormSubmit: (operation: OperationFormType) => void;
};

export type OperationFormType = {
  id?: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: string;
  category: string;
  photo?: string;
};
