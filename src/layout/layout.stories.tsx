import type { Meta } from '@storybook/react';
import { Layout } from './layout';
import { MainProvider } from '../store/provider';
import React from 'react';

const meta: Meta<typeof Layout> = {
  title: 'Layouts/Layout',
  component: Layout,
  tags: ['autodocs'],
};
export default meta;

export const Default = () => {
  return (
    <MainProvider>
      <Layout children={undefined} />
    </MainProvider>
  );
};
