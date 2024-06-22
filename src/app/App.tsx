import React from 'react';
import './App.css';
import Logo from 'src/components/logo/logo';
import { Size } from 'src/components/logo/types';

function App() {
  return (
    <div className="App">
      <Logo
        image="https://png.pngtree.com/png-clipart/20230508/original/pngtree-happy-dog-png-image_9151232.png"
        color="#2C98F0"
        size={Size.LARGE}
      />
    </div>
  );
}

export default App;
