import type { Meta } from '@storybook/react';
import { MainProvider } from '../../theme/theme-provider';
import React from 'react';
import '../../i18n';

import OperationForm from './operation-form';

const meta: Meta<typeof OperationForm> = {
  title: 'Forms/OperationForm',
  component: OperationForm,
  tags: ['autodocs'],
};
export default meta;

export const Default = () => {
  return (
    <MainProvider>
      <div style={{ width: '50%' }}>
        <OperationForm />
      </div>
    </MainProvider>
  );
};
