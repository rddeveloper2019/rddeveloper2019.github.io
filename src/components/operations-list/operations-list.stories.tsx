import type { Meta } from '@storybook/react';
import OperationsList from './index';
import React from 'react';
import { MockProvider } from '../../layout/mock-provider';
import {
  OperationsListInfiniteScrollExample,
  OperationsListExample,
} from './opeartions-list-story-example/operations-list-example';

const meta: Meta<typeof OperationsList> = {
  title: 'Components/OperationsList',
  component: OperationsList,
  tags: ['autodocs'],
};
export default meta;

export const Default = () => {
  return (
    <MockProvider>
      <OperationsListExample />
    </MockProvider>
  );
};

export const InfiniteScroll = () => {
  return (
    <MockProvider>
      <OperationsListInfiniteScrollExample />
    </MockProvider>
  );
};
