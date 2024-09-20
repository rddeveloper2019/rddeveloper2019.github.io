import type { Meta } from '@storybook/react';
import { MainProvider } from '../../theme/theme-provider';
import React from 'react';
import '../../i18n';

import LoginForm from './login-form';

const meta: Meta<typeof LoginForm> = {
  title: 'Forms/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
};
export default meta;

export const Default = () => {
  return (
    <MainProvider>
      <div style={{ width: '50%' }}>
        <LoginForm />
      </div>
    </MainProvider>
  );
};
