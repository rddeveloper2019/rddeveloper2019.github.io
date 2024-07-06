import { ReactElement } from 'react';
import { OperationDetailType } from 'src/app/types';

export type OperationDetailPropsTypes = {
  icon?: ReactElement;
  data: OperationDetailType;
  bordered?: boolean;
  width?: number;
};
