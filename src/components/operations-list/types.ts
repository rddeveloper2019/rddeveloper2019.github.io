import { Operation } from '../../model/types';

export type OperationsListPropsType = {
  operations?: Operation[];
  addMore?: () => void;
  isInfinite?: boolean;
};
