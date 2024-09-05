import type { Meta } from '@storybook/react';
import OperationDetail from './operation-detail';
import { createRandomOperations } from '../../model/utils';

const meta: Meta<typeof OperationDetail> = {
  title: 'Components/OperationDetail',
  component: OperationDetail,
  tags: ['autodocs'],
};
export default meta;

const operation = createRandomOperations(1)[0];
export const Detail = {
  args: {
    data: operation,
    bordered: true,
    width: 400,
  },
};
