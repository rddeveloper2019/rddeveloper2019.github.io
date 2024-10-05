import OperationDetail from '../operation-detail';
import React from 'react';
import Card from '../../card/Card';
import { Operation } from '../../../model/types';

export const OperationDetailExample = () => {
  const stub: Operation = {
    id: '6700d4278e877ac8a957b09d',
    name: 'Meal',
    desc: '12312321',
    date: '2024-10-27T00:00:00.000Z',
    createdAt: '2024-10-05T05:52:39.613Z',
    updatedAt: '2024-10-05T05:52:46.441Z',
    type: 'Cost',
    amount: 12,
    category: {
      id: '66c8bd568e877ac8a9571dec',
      name: '1 Список',
      photo: null,
      commandId: '23209230423539',
      createdAt: '2024-08-23T16:48:22.215Z',
      updatedAt: '2024-08-23T16:48:22.215Z',
    },
    isFavorite: true,
    photo: 'https://picsum.photos/id/797/200/300',
  };

  return (
    <Card>
      <OperationDetail data={stub} />
    </Card>
  );
};
