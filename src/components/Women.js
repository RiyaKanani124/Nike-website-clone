
import React from 'react';
import Productdata from './productdata';
import Data from './Data';

const Women = () => {
  const womenProducts = Data.slice(10, 14); // Slicing the data to get products with IDs 11 to 14

  return (
    <div className="product">
      <h1>Women's Products</h1>
      <div className="product-list">
        {womenProducts.map((product) => (
          <Productdata
            key={product.id}
            image={product.image}
            title={product.title}
            des={product.des}
            price={product.price}
            // color={product.color}
            // size={product.size}
          />
        ))}
      </div>
    </div>
  );
}

export default Women;
