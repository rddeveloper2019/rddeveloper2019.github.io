import type { Meta } from '@storybook/react';
import OperationDetail from './operation-detail';
import React from 'react';
import { OperationDetailExample } from './story-example/operation-detail-example';
import { MockProvider } from '../../layout/mock-provider';

const meta: Meta<typeof OperationDetail> = {
  title: 'Components/OperationDetail',
  component: OperationDetail,
  tags: ['autodocs'],
};
export default meta;

export const Default = () => {
  return (
    <MockProvider>
      <OperationDetailExample />
    </MockProvider>
  );
};
