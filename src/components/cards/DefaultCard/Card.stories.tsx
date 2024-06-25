import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  title: 'Components/CardFull',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    category: { control: 'text' },
    description: { control: 'text' },
    sum_currency: { control: 'test' },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  category: 'Категория',
  description: 'Описание',
  sum_currency: '100,0',
};
