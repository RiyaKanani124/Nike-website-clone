import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [hasViewedCart, setHasViewedCart] = useState(false);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProductIndex = prevItems.findIndex(item => item.title === product.title);
      if (existingProductIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingProductIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    setHasViewedCart(false); 
  };

  const resetCartView = () => {
    setHasViewedCart(true);
  };

  const removeCartItem = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  const updateCartItemQuantity = (index, quantity) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      if (updatedItems[index].quantity + quantity > 0) {
        updatedItems[index].quantity += quantity;
      } else {
        updatedItems.splice(index, 1);
      }
      return updatedItems;
    });
  };

  const increaseQuantity = (index) => {
    updateCartItemQuantity(index, 1);
  };

  const decreaseQuantity = (index) => {
    updateCartItemQuantity(index, -1);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, hasViewedCart, resetCartView, removeCartItem, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
