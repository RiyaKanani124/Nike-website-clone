
import React from 'react';
import Data from './Data';
import Productdata from './productdata';

const Men = () => {
  const menProducts = Data.slice(4, 8); 

  console.log(menProducts); 

  return (
    <div className="product">
      <h1>Men's Products</h1>
      <div className="product-list">
        {menProducts.map((product) => (
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

export default Men;
