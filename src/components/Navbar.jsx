import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import './navbar.css';
import { FaCartShopping } from 'react-icons/fa6';
import nikelogo from '../assets/niki.png';

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems, hasViewedCart, resetCartView } = useContext(CartContext);

  const handleNavigation = (path) => {
    if (path === '/cart') {
      resetCartView();
    }
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="logo-container" onClick={() => handleNavigation('/')}>
        <img src={nikelogo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="center-nav">
        <ul>
          <li onClick={() => handleNavigation('/men')}>Men</li>
          <li onClick={() => handleNavigation('/women')}>Women</li>
          <li onClick={() => handleNavigation('/kids')}>Kids</li>
        </ul>
      </div>
      <div className="cart-icon-container" onClick={() => handleNavigation('/cart')}>
        <FaCartShopping className="cart-icon" />
        {!hasViewedCart && cartItems.length > 0 && (
          <span className="cart-count">{cartItems.length}</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
