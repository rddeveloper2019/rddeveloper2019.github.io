import type { Meta } from '@storybook/react';
import { ModalControl } from './modal-control';
import { MainProvider } from '../../store/provider';
import React from 'react';
import '../../i18n';

const meta: Meta<typeof ModalControl> = {
  title: 'Components/ModalControl',
  component: ModalControl,
  tags: ['autodocs'],
};
export default meta;

export const Default = () => {
  return (
    <MainProvider>
      <ModalControl />
    </MainProvider>
  );
};
