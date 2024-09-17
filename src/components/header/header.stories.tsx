import type { Meta } from '@storybook/react';
import Header from './header';
import { MainProvider } from '../../store/provider';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Header> = {
  title: 'Layouts/Header',
  component: Header,
  tags: ['autodocs'],
};
export default meta;

export const Default = () => {
  return (
    <BrowserRouter>
      <MainProvider>
        <Header />
      </MainProvider>
    </BrowserRouter>
  );
};
