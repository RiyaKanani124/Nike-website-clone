import React from "react";
import "./productstyles.css";
import Productdata from "./productdata";
import Data from "./Data";

function Product() {
  // Use slice to extract products with IDs 1 to 4
  const slicedProducts = Data.slice(0, 4);

  return (
    <div className="product">
      <h1> Trending Products</h1>
      <div className="product-list">
        {slicedProducts.map((product) => (
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

export default Product;
