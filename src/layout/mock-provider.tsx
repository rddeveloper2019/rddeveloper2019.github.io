import { Provider } from 'react-redux';
import store from '../store/store';
import { ThemeProvider } from '../theme/theme-provider';
import { BrowserRouter } from 'react-router-dom';
import React, { FC, ReactElement } from 'react';
import '../i18n';

type MockProviderType = {
  children: ReactElement;
};

export const MockProvider: FC<MockProviderType> = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>{children}</ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};
