import type { Meta } from '@storybook/react';
import { FullscreenLoader } from './fullscreen-loader';

const meta: Meta<typeof FullscreenLoader> = {
  title: 'Components/FullscreenLoader',
  component: FullscreenLoader,
  tags: ['autodocs'],
  argTypes: {
    active: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {},
};
