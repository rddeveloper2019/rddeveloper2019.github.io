import { OperationFormType } from '../../components/operation-form/types';
import { Category, Operation } from '../types';
import { categoriesById } from '../../components/operation-form/operation-form';

const sanitizeCategory = (category: string, photo: string): Category | null => {
  if (!category || !categoriesById[Number(category)]) {
    return null;
  }
  const defaultPhoto = categoriesById[Number(category)]?.photo;

  return {
    ...categoriesById[Number(category)],
    photo: photo || defaultPhoto,
  };
};

export const sanitizeOperationFormData = (data: OperationFormType): Operation => {
  const { id, name, category, createdAt, desc, photo, amount } = data;

  const operation: Partial<Operation> = {
    name,
    createdAt,
    amount: Number(amount),
    isFavorite: false,
  };

  if (desc) {
    operation.desc = desc;
  }

  if (category) {
    operation.category = sanitizeCategory(category, photo);
  }
  if (id) {
    operation.id = id;
  }

  return operation as Operation;
};
