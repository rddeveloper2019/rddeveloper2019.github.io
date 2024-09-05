import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import OperationDetail from '../operation-detail/operation-detail';
import { GiSlicedBread, GiWallet } from 'react-icons/gi';
import { Operation } from '../../model/types';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    children: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is a card component',
    width: 400,
  },
};

const data: Operation[] = [
  {
    id: 'lgtxju',
    name: 'Operation 84',
    desc: 'Description for Operation 84',
    createdAt: '17.04.2018',
    amount: 795,
    category: { id: 'vbp6jt', name: 'sport', photo: 'https://picsum.photos/200' },
    type: 'Profit',
  },
  {
    id: '351dll',
    name: 'Operation 38',
    createdAt: '14.05.2019',
    amount: 329,
    category: { id: 'm2y75v', name: 'dance', photo: 'https://picsum.photos/200' },
    type: 'Profit',
  },
  {
    id: '7byr4q',
    name: 'Operation 54',
    createdAt: '15.05.2020',
    amount: 68,
    category: { id: '0gevb4', name: 'hobby', photo: 'https://picsum.photos/200' },
    type: 'Profit',
  },
];

export const CardWithOperationsDetail: Story = {
  args: {
    children: [data[0]].map((detail: Operation, index: number) => (
      <OperationDetail key={detail.id} data={detail} bordered={index !== data.length - 1 || data.length === 1} />
    )),
    width: 400,
  },
};

export const CardWithOperationsDetails: Story = {
  args: {
    children: data.map((detail: Operation, index: number) => (
      <OperationDetail key={detail.id} data={detail} bordered={index !== data.length - 1 || data.length === 1} />
    )),
    width: 350,
  },
};
