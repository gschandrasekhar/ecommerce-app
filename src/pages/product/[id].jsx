// src/pages/product/[id].jsx
import React from 'react';
import { useParams } from 'react-router-dom'; // if you're using React Router

const ProductPage = () => {
  const { id } = useParams(); // if you're using React Router
  // Fetch product details using id
  // You can use useEffect to fetch data based on the id or use React Query
  return (
    <div>
      <h2>Product Details Page</h2>
      <p>Product ID: {id}</p>
      {/* Add product details */}
    </div>
  );
};

export default ProductPage;
