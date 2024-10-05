import store from './store';
import { useSelector } from 'react-redux';

const authSelector = () => {
  return store.getState().auth;
};

const initSelector = () => {
  return store.getState().init;
};

const operationsSelector = () => {
  return store.getState().operations;
};

const categoriesSelector = () => {
  return store.getState().categories;
};

const operationByIdSelector = (opearionId: string) => {
  const operation = store.getState().operations.operations.find(({ id }) => id === opearionId);
  return operation;
};

const settingsSelector = () => {
  return store.getState().settings;
};

export const useAuthSelector = () => useSelector(authSelector);
export const useInitSelector = () => useSelector(initSelector);
export const useOperationsSelector = () => useSelector(operationsSelector);
export const useCategoriesSelector = () => useSelector(categoriesSelector);
export const useSettingsSelector = () => useSelector(settingsSelector);
export const useOperationByIdSelector = (id: string) => useSelector(() => operationByIdSelector(id));
