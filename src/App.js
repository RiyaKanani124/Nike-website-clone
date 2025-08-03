// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import './index.css';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import Footer from './components/Footer';
function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home/:fname" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/:title" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
       <Route path="/men" element={<Men />} />
       <Route path="/Women" element={<Women />} />
       <Route path="/Kids" element={<Kids />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
