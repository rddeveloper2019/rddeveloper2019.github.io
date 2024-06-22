import type { Meta } from '@storybook/react';
import Logo from './logo';
import { Size } from './types';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    size: {
      options: [Size.LARGE, Size.MEDIUM],
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const Default = {
  args: {},
};

export const WithImage = {
  args: { image: 'https://png.pngtree.com/png-clipart/20230508/original/pngtree-happy-dog-png-image_9151232.png' },
};

export const Large = {
  args: {
    image: 'https://png.pngtree.com/png-clipart/20230508/original/pngtree-happy-dog-png-image_9151232.png',
    size: 'large',
  },
};

export const Medium = {
  args: {
    image: 'https://png.pngtree.com/png-clipart/20230508/original/pngtree-happy-dog-png-image_9151232.png',
    size: 'medium',
  },
};
export const CustomColor = {
  args: {
    image: 'https://png.pngtree.com/png-clipart/20230508/original/pngtree-happy-dog-png-image_9151232.png',
    size: 'large',
    color: 'pink',
  },
};
