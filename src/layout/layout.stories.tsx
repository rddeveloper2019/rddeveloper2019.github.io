import type { Meta } from '@storybook/react';
import { Layout } from './layout';
import { MockProvider } from './mock-provider';
import React from 'react';

const meta: Meta<typeof Layout> = {
  title: 'Layouts/Layout',
  component: Layout,
  tags: ['autodocs'],
};
export default meta;

export const Default = () => {
  return (
    <MockProvider>
      <Layout />
    </MockProvider>
  );
};
