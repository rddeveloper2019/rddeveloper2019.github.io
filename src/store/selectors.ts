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

const settingsSelector = () => {
  return store.getState().settings;
};

const modalSelector = () => {
  return store.getState().modal;
};

export const useAuthSelector = () => useSelector(authSelector);
export const useInitSelector = () => useSelector(initSelector);
export const useOperationsSelector = () => useSelector(operationsSelector);
export const useSettingsSelector = () => useSelector(settingsSelector);
export const useModalSelector = () => useSelector(modalSelector);
