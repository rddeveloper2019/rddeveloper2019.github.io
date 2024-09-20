import React from 'react';
import './App.scss';
import '../theme/fonts.scss';
import { Layout } from '../layout/layout';
import { ThemeProvider } from '../theme/theme-provider';
import { MainPage } from '../pages/main-page/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritesPage } from '../pages/favorites-page/favorites-page';
import { ProfilePage } from '../pages/profile-page/profile-page';
import { NoFoundPage } from '../pages/404-page/no-found-page';
import { OperationDetailPage } from '../pages/operation-detail-page/operation-detail-page';
import { Provider } from 'react-redux';
import store from '../store/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/operation/:id" element={<OperationDetailPage />} />{' '}
              <Route path="*" element={<NoFoundPage />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
