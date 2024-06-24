import React from 'react';
import { Meta, Story } from '@storybook/react';
import MiniCard, { MiniCardProps } from './MiniCard';

export default {
  title: 'Components/CardMini',
  component: MiniCardProps,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    category: { control: 'text' },
    description: { control: 'text' },
  },
} as Meta;

const Template: Story<MiniCardProps> = (args) => <MiniCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '200px',
  height: 'auto',
  category: 'Категория',
  description: 'Описание ',
};
