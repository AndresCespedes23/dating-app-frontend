/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Header from './Components/Header';
import Cards from './Components/Cards';
import SwipeButtons from './Components/Buttons';
import './reset.css';

function App() {
  return (
    <div>
      <Header />
      <Cards />
      <SwipeButtons />
    </div>
  );
}

export default App;
