import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove Router import
import LandingPage from './LandingPage';
import ProductListing from './ProductListing';
import CartSlice from './CartSlice';
import Header from './Header';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListing cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartSlice cart={cart} setCart={setCart} />} />
      </Routes>
    </>
  );
}

export default App;
