/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Header from './Components/Header';
import DatingCards from './Components/Cards';
import SwipeButtons from './Components/Swipe';
import './reset.css';

function App() {
  return (
    <div>
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
