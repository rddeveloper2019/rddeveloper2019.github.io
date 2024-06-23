import React from 'react';
import './App.scss';
import '../theme/fonts.scss';
import Logo from 'src/components/logo/logo';
import Header from 'src/components/header/header';
import { Size } from 'src/components/logo/types';
import Modal from '../components/modal/modal';

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
function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
