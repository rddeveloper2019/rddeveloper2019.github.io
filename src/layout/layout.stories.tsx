import type { Meta } from '@storybook/react';
import { Layout } from './layout';
import { ThemeProvider } from '../theme/theme-provider';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';

const meta: Meta<typeof Layout> = {
  title: 'Layouts/Layout',
  component: Layout,
  tags: ['autodocs'],
};
export default meta;

export const Default = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <Layout />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};
