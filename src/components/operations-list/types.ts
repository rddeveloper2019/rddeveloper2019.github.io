import { Operation } from '../../model/types';

export type OperationsListPropsType = {
  operations?: Operation[];
  addMore?: () => void;
  isInfinite?: boolean;
  onItemSelect?: (data: Operation) => void;
  onItemEdit?: (data: Operation) => void;
  onFavoriteItemToggle?: (data: Operation) => void;
};
