// components/Product.js
import React from 'react';

const Product = ({ id, title, description, price, image, onAddToCart }) => {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <button onClick={() => onAddToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Product;
