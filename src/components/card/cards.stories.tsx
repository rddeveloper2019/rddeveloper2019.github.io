import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import OperationDetail from '../operation-detail/operation-detail';
import { GiSlicedBread, GiWallet } from 'react-icons/gi';
import { OperationDetailType } from 'src/app/types';

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
  },
};

const data: OperationDetailType[] = [
  {
    id: '1',
    category: 'Продукты',
    title: 'Хлеб',
    description: 'Бородинский без дрожевой',
    amount: 57,
  },
  {
    id: '1',
    category: 'Продукты',
    title: 'Хлеб',
    description: 'Ржаной (в нарезке)',
    amount: 48,
  },
  {
    id: '1',
    category: 'Продукты',
    title: 'Хлеб',
    description: 'Батон с изюмом',
    amount: 45.5,
  },
  {
    id: '1',
    category: 'Продукты',
    title: 'Хлеб',
    description: 'Бородинский',
    amount: 75,
  },
];

const OperationDetail =()=> <OperationDetail
          icon={<GiSlicedBread size={30} />}
          data={data[0]}
          bordered={index !== data.length - 1 || data.length === 1}
        />;

export const CardWithOperationsDetail: Story = {
  args: {
    children: OperationDetail,
  },
};

const OperationDetails = data.map(
      (
        detail,
        index
      ) => (
        <OperationDetail
          key={detail.id}
          icon={<GiWallet size={30} />}
          data={detail}
          bordered={index !== data.length - 1 || data.length === 1}
        />
      )
    );

export const CardWithOperationsDetails: Story = {
  args: {
    children: OperationDetails,
  },
};
