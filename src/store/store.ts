import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { initReduser } from './slices/initSlice';
import { useDispatch } from 'react-redux';
import { authReducer } from './slices/authSlice';
import { operationsReduser } from './slices/operationsSlice';
import { settingsReduser } from './slices/settingsSlice';

const rootReducer = combineReducers({
  init: initReduser,
  auth: authReducer,
  operations: operationsReduser,
  settings: settingsReduser,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Export a hook that can be reused to resolve types

export default store;