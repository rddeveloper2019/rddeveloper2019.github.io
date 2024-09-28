import type { Meta } from '@storybook/react';
import React from 'react';
import LoginForm from './login-form';
import { MockProvider } from '../../layout/mock-provider';

const meta: Meta<typeof LoginForm> = {
  title: 'Forms/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
};
export default meta;

export const Default = () => {
  return (
    <MockProvider>
      <LoginForm />
    </MockProvider>
  );
};
