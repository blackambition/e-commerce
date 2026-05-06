import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Tours from './pages/Tours';
import About from './pages/About';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="tours" element={<Tours />} />
            <Route path="about" element={<About />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="product/:id" element={<ProductDetail />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
