import type { Meta } from '@storybook/react';
import { ModalControl } from './modal-control';
import { withReactContext } from 'storybook-react-context';
import { MainContext } from '../../store/provider';

const meta: Meta<typeof ModalControl> = {
  title: 'Components/ModalControl',
  decorators: [
    withReactContext({
      Context: MainContext,
      initialState: null,
    }),
  ],
  component: ModalControl,
  tags: ['autodocs'],
};
export default meta;

export const Default = {
  args: {},
};
