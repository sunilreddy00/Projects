// App.js

import React from 'react';
import AppNavbar from './Navbar';
import Home from './Home';
import './Style.css';

const App = () => {
  return (
    <div className='container-fluid min-vh-100'>
      <div className='App'>
        <AppNavbar />
        <Home />
      </div>
    </div>
  );
};

export default App;
