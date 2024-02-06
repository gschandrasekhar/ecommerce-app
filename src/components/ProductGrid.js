// components/ProductGrid.js
import React from 'react';
import Product from './Product';

const ProductGrid = ({ products, onAddToCart }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
