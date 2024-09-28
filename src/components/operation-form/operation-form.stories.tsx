import type { Meta } from '@storybook/react';
import React from 'react';
import OperationForm from './operation-form';
import { MockProvider } from '../../layout/mock-provider';

const meta: Meta<typeof OperationForm> = {
  title: 'Forms/OperationForm',
  component: OperationForm,
  tags: ['autodocs'],
};

export default meta;

export const Default = () => {
  return (
    <MockProvider>
      <OperationForm onOperationFormSubmit={console.log} />
    </MockProvider>
  );
};
