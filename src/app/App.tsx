import React from 'react';
import './App.scss';
import '../theme/fonts.scss';
import Logo from 'src/components/logo/logo';
import Header from 'src/components/header/header';
import { Size } from 'src/components/logo/types';
import Modal from '../components/modal/modal';
import { OperationDetailType } from 'src/app/types';
import Card from 'src/components/card-2/card';
import OperationDetail from 'src/components/operation-detail/operation-detail';
import { GiSlicedBread } from 'react-icons/gi';

const ModalContentExample = () => {
  return (
    <div>
      <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Use Google’s location service?</h2>
      <p style={{ marginTop: '20px' }}>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps
        are running.
      </p>
    </div>
  );
};

const dataOneLine: OperationDetailType[] = [
  {
    id: '1',
    category: 'Продукты',
    title: 'Хлеб',
    description: 'Бородинский без дрожевой',
    amount: 57,
  },
];

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

function App() {
  return (
    <div>
      {/* <Modal visible={true}> */}
      {/*  <ModalContentExample />*/}
      {/*</Modal>*/}
      <Card>
        {data.map((detail, index) => (
          <OperationDetail
            key={detail.id}
            icon={<GiSlicedBread size={30} />}
            data={detail}
            bordered={index !== data.length - 1 || data.length === 1}
          />
        ))}
      </Card>
    </div>
  );
}

export default App;
