import { Operation } from '../../model/types';

export type OperationDetailPropsTypes = {
  data: Operation;
  bordered?: boolean;
  width?: number;
  onEdit?: (operation: Operation) => void;
  onClick?: (operation: Operation) => void;
  onFavoriteToggle?: (operation: Operation) => void;
};
