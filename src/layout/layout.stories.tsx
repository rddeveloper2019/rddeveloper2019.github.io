import type { Meta } from '@storybook/react';
import { Layout } from './layout';
import { MainProvider } from '../store/provider';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Layout> = {
  title: 'Layouts/Layout',
  component: Layout,
  tags: ['autodocs'],
};
export default meta;

export const Default = () => {
  return (
    <BrowserRouter>
      <MainProvider>
        <Layout />
      </MainProvider>
    </BrowserRouter>
  );
};
