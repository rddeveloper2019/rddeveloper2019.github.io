import type { Meta } from '@storybook/react';
import Header from './header';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../../theme/theme-provider';
import { Provider } from 'react-redux';
import store from '../../store/store';

const meta: Meta<typeof Header> = {
  title: 'Layouts/Header',
  component: Header,
  tags: ['autodocs'],
};
export default meta;

export const Default = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};
