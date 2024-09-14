import React from 'react';
import './App.scss';
import '../theme/fonts.scss';
import { Layout } from '../layout/layout';
import { MainProvider } from '../store/provider';
import { MainPage } from '../pages/main-page/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritesPage } from 'src/pages/favorites-page/favorites-page';

function App() {
  return (
    <BrowserRouter>
      <MainProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/profile" element={<div>Profile</div>} />
          </Routes>
        </Layout>
      </MainProvider>
    </BrowserRouter>
  );
}

export default App;
