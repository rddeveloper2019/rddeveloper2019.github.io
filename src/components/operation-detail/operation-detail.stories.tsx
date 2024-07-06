import type { Meta } from '@storybook/react';
import OperationDetail from './operation-detail';

const meta: Meta<typeof OperationDetail> = {
  title: 'Components/OperationDetail',
  component: OperationDetail,
  tags: ['autodocs'],
};
export default meta;

export const Detail = {
  args: {
    data: {
      id: '1',
      category: 'Продукты',
      title: 'Хлеб',
      description: 'Батон',
      amount: 50,
    },
    bordered: true,
    width: 400,
  },
};
