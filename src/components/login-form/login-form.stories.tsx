import type { Meta } from '@storybook/react';
import { ThemeProvider } from '../../theme/theme-provider';
import React from 'react';
import '../../i18n';
import LoginForm from './login-form';
import { Provider } from 'react-redux';
import store from '../../store/store';

const meta: Meta<typeof LoginForm> = {
  title: 'Forms/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
};
export default meta;

export const Default = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div style={{ width: '50%' }}>
          <LoginForm />
        </div>
      </ThemeProvider>
    </Provider>
  );
};
