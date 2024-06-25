import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  title: 'Components/CardFull',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    category: { control: 'text' },
    description: { control: 'text' },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '400px',
  height: 'auto',
  category: 'Категория',
  description: 'Описание ',
};
