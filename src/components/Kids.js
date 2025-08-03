
import React from 'react';
import Productdata from './productdata';
import Data from './Data';

const Kids = () => {
  // Select product id: 9, 10, 15, and 14
  const kidsProducts = Data.filter(product => [9, 10, 15, 16].includes(product.id));

  return (
    <div className="product">
      <h1>Kids' Products</h1>
      <div className="product-list">
        {kidsProducts.map(product => (
        <Productdata
            key={product.id}
            image={product.image}
            title={product.title}
            des={product.des}
            price={product.price}
            color={product.color}
            size={product.size}
          />
        ))}
      </div>
    </div>
  );
}

export default Kids;
