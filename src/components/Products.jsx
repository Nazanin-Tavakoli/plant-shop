import React from 'react';
import './Products.css';

function Products() {
  const productImages = [
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
  ];

  return (
    
    <section className="products">
      {productImages.map((src, index) => (
        <div key={index} className="product">
          <img src={src} alt={`Plant ${index + 1}`} />
        </div>
      ))}
    </section>
  
  );
}

export default Products;
