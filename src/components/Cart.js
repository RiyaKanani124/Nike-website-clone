import React, { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import './cartStyles.css';

const Cart = () => {
  const { cartItems, resetCartView, removeCartItem, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  useEffect(() => {
    resetCartView();
  }, [resetCartView]);

  const handleRemoveItem = (index) => {
    removeCartItem(index);
  };

  const handleIncreaseQuantity = (index) => {
    increaseQuantity(index);
  };

  const handleDecreaseQuantity = (index) => {
    decreaseQuantity(index);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <span className="cart-item-title">{item.title}</span>
                  <span className="cart-item-price">${item.price.toFixed(2)}</span>
                  <div className="cart-item-quantity-container">
                    <button 
                      className={`quantity-button ${item.quantity === 1 ? 'remove-button' : ''}`} 
                      onClick={() => handleDecreaseQuantity(index)}
                    >
                      -1
                    </button>
                    <span className="cart-item-quantity">{item.quantity}</span>
                    <button className="quantity-button" onClick={() => handleIncreaseQuantity(index)}>+1</button>
                  </div>
                </div>
                <div className="cart-item-actions">
                  <button className="remove-button" onClick={() => handleRemoveItem(index)}>Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <>
          <div className="total-price">
            Total: ${getTotalPrice().toFixed(2)}
          </div>
          <button className="checkout-button">Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
