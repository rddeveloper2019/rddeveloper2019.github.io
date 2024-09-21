import { Provider } from 'react-redux';
import store from '../store/store';
import { ThemeProvider } from '../theme/theme-provider';
import { BrowserRouter } from 'react-router-dom';
import React, { FC } from 'react';

export const MockProvider: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>{children}</ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};
