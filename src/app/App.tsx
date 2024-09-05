import React from 'react';
import './App.scss';
import '../theme/fonts.scss';
import { Layout } from '../layout/layout';
import { MainProvider } from '../store/provider';
import { MainPage } from '../pages/main';
import { createRandomOperations } from '../model/utils';

function App() {
  return (
    <MainProvider>
      <Layout>
        <MainPage />
      </Layout>
    </MainProvider>
  );
}

export default App;
