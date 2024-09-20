import type { Meta } from '@storybook/react';
import { ThemeProvider } from '../../theme/theme-provider';
import React from 'react';
import '../../i18n';
import { Provider } from 'react-redux';
import store from '../../store/store';
import OperationForm from './operation-form';

const meta: Meta<typeof OperationForm> = {
  title: 'Forms/OperationForm',
  component: OperationForm,
  tags: ['autodocs'],
};

export default meta;

export const Default = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div style={{ width: '50%' }}>
          <OperationForm />
        </div>
      </ThemeProvider>
    </Provider>
  );
};
