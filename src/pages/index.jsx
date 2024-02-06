// pages/index.jsx

import React from 'react';
import ProductGrid from '../components/ProductGrid'; // Import ProductGrid component

const ProductListingPage = () => {
  const products = [
    {
      id: 1,
      title: 'Laptop',
      description: 'High-performance laptop with Intel Core i7 processor and 16GB RAM.',
      price: 100000.99,
      image: 'p/images/product1.jpeg'
    },
    {
      id: 2,
      title: 'SmartPhone',
      description: 'Latest smartphone with a high resolution display and dual-camers setup',
      price: 19999.99,
      image: '/images/product2.jpeg'
    },
    {
        id: 3,
        title: 'Headphones',
        description: 'Noise-canceling headphones with wireless connectivity and long battery life.',
        price: 9999.99,
        image: '/images/product3.jpeg'
      },
      {
        id: 4,
        title: 'Backpack',
        description: 'Durable backpack with multiple compartments and padded laptop sleeve.',
        price: 999.99,
        image: '/images/product4.jpeg'
      },
      {
        id: 5,
        title: 'Smartwatch',
        description: 'Fitness tracker smartwatch with heart rate monitoring and GPS functionality',
        price: 49999.99,
        image: '/images/product5.jpeg'
      },
    
  ];

  const handleAddToCart = (productId) => {
    // Add logic to add product to cart
    console.log(`Product added to cart: ${productId}`);
  };

  return (
    <div className="product-listing-page">
      <h2>Products</h2>
      <ProductGrid products={products} onAddToCart={handleAddToCart} /> {/* Use ProductGrid component */}
    </div>
  );
};

export default ProductListingPage;
