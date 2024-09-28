import type { Meta } from '@storybook/react';
import OperationsList from './index';
import { createRandomOperations } from '../../model/utils';
import React, { useEffect, useState } from 'react';
import { Operation } from '../../model/types';

const meta: Meta<typeof OperationsList> = {
  title: 'Components/OperationsList',
  component: OperationsList,
  tags: ['autodocs'],
};
export default meta;
const handlers = { onItemEdit: console.log, onItemSelect: console.log, onFavoriteItemToggle: console.log };
const operations = createRandomOperations(10);
export const Default = {
  args: {
    operations,
    isInfinite: false,
    ...handlers,
  },
};

export const InfiniteScroll = () => {
  const [count, setCount] = useState<number>(0);
  const [operations, setOperations] = useState<Operation[]>([...createRandomOperations(10)]);

  useEffect(() => {
    if (count) {
      setOperations((prev) => [...prev, ...createRandomOperations(5)]);
    }
  }, [count]);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <OperationsList operations={operations} addMore={() => setCount(count + 1)} {...handlers} />
    </div>
  );
};
