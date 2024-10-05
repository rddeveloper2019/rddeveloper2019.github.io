import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { initReducer } from './slices/initSlice';
import { useDispatch } from 'react-redux';
import { authReducer } from './slices/authSlice';
import { operationsReducer } from './slices/operationsSlice';
import { settingsReducer } from './slices/settingsSlice';
import { categoriesReducer } from './slices/categoriesSlice';

const rootReducer = combineReducers({
  init: initReducer,
  auth: authReducer,
  operations: operationsReducer,
  settings: settingsReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Export a hook that can be reused to resolve types

export default store;
