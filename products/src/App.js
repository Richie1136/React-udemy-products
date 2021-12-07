import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/nav/Navigation';
import Products from './components/products/Products'
import Favorites from './components/favorites/Favorites';

const App = props => {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
