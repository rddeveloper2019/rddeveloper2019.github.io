import React from 'react';
import { Meta, Story } from '@storybook/react';
import MiniCard, { MiniCardProps } from './MiniCard';

export default {
  title: 'Components/CardMini',
  component: MiniCard,
  tags: ['autodocs'],
  argTypes: {
    category: { control: 'text' },
    sum_currency: { control: 'text' },
  },
} as Meta;

const Template: Story<MiniCardProps> = (args) => <MiniCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  category: 'Категория',
  sum_currency: '100,0 ',
};
