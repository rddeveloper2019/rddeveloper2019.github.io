import type { Meta } from '@storybook/react';
import TextButton from './text-button';
import { TextButtonState } from './types';

const meta: Meta<typeof TextButton> = {
  title: 'Components/TextButton',
  component: TextButton,
  tags: ['autodocs'],
  argTypes: {
    state: {
      options: [
        TextButtonState.DEFAULT,
        TextButtonState.DISABLED,
        TextButtonState.PRIMARY,
        TextButtonState.SECONDARY,
        TextButtonState.LINK,
      ],
      control: { type: 'radio' },
      children: 'Click me',
      disabled: false,
    },
  },
};

export default meta;

export const Default = {
  args: {
    children: 'Click me',
  },
};

export const Disabled = {
  args: {
    state: TextButtonState.DISABLED,
    children: TextButtonState.DISABLED,
  },
};

export const Primary = {
  args: {
    state: TextButtonState.PRIMARY,
    children: TextButtonState.PRIMARY,
  },
};
