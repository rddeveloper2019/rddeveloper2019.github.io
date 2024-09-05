import type { Meta } from '@storybook/react';
import OperationsList from './index';
import { createRandomOperations } from '../../model/utils';

const meta: Meta<typeof OperationsList> = {
  title: 'Components/OperationsList',
  component: OperationsList,
  tags: ['autodocs'],
};
export default meta;

const operations = createRandomOperations(25);
export const Detail = {
  args: {
    operations,
  },
};
