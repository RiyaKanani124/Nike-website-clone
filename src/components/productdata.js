import React from 'react';
import { NavLink } from 'react-router-dom';

const Productdata = ({ image, title, des, price, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ title, price }); 
  };

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt="Product" />
      </div>
      <div className="product-details">
        <h2>{title}</h2>
        <p>{des}</p>
        <div className="product-actions">
          <p>
            <span className="price-label">Price: </span>
            <span className="price-value">${price}</span>
          </p>
          <NavLink to={`/product/${title}`}>
            <button className="cart-button">View</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Productdata;
