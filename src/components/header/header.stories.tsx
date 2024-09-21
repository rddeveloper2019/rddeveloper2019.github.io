import type { Meta } from '@storybook/react';
import Header from './header';
import React from 'react';
import { MockProvider } from '../../layout/mock-provider';

const meta: Meta<typeof Header> = {
  title: 'Layouts/Header',
  component: Header,
  tags: ['autodocs'],
};
export default meta;

export const Default = () => {
  return (
    <MockProvider>
      <Header />
    </MockProvider>
  );
};
