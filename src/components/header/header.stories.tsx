import type { Meta } from '@storybook/react';
import Header from './header';
import { MainProvider } from '../../store/provider';
import React from 'react';

const meta: Meta<typeof Header> = {
  title: 'Layouts/Header',
  component: Header,
  tags: ['autodocs'],
};
export default meta;

export const Default = () => {
  return (
    <MainProvider>
      <Header />
    </MainProvider>
  );
};
