import type { ArgTypes, Meta } from '@storybook/react';
import Modal from './modal';
import React from 'react';
import { ModalPropSTypes } from '../modal/types';

const ModalContentExample = () => {
  return (
    <div>
      <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Use Google’s location service?</h2>
      <p style={{ marginTop: '20px' }}>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps
        are running.
      </p>
    </div>
  );
};

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  render: ({ ...args }) => (
    <Modal {...args}>
      <ModalContentExample />
    </Modal>
  ),
  tags: ['autodocs'],
  argTypes: {
    visible: 'boolean' as Partial<ArgTypes<ModalPropSTypes>>,
  },
};

export default meta;

export const Default = {
  args: { children: () => <ModalContentExample />, visible: true },
};
