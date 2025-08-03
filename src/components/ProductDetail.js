import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Data from './Data';
import './productDetailStyles.css';
import { CartContext } from './CartContext';

const ProductDetail = () => {
  const { title } = useParams();
  const { addToCart } = useContext(CartContext);
  
  const product = Data.find(product => product.title === title);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    console.log(`Added ${product.title} to cart`);
  };

  const handleSelectColor = (color) => {
    console.log(`Selected color: ${color}`);
  };

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.title} className='prodct-detail-img'/>
      </div>
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>{product.des}</p>
        <div className="color-selection">
          <p>Available Colors:</p>
          {product.color.map((color, index) => (
            <button
              key={index}
              className="color-button"
              style={{ backgroundColor: color }}
              onClick={() => handleSelectColor(color)}
            ></button>
          ))}
        </div>
        <div className="size-section">
          <p>Available Sizes:</p>
          <ul>
            {product.size.map((size, index) => (
              <li key={index}>{size}</li>
            ))}
          </ul>
        </div>
        <p className="price">
          <span className="price-label">Price: </span>
          <span className="price-value">${product.price}</span>
        </p>
        <button className="cart-button" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
