import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Products.css';

const products = [
  {
    type: "Plants",
    name: "Boncellensis Secullant",
    stars: 3,
    price: "34.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant3-free-img.jpg"
  },
  {
    type: "Cactus",
    name: "Cleistocactus",
    stars: 2,
    price: "28.00",
    offPrice: "25.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus2-free-img.jpg"
  },
  {
    type: "Plants",
    name: "Green Soil Lotus",
    stars: 4,
    price: "54.50",
    offPrice: "34.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant5-free-img.jpg"
  },
  {
    type: "Plants",
    name: "Money Plant",
    stars: 5,
    price: "23.00",
    offPrice: "20.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant1-free-img.jpg"
  },
  {
    type: "Plants",
    name: "Old Lady Cactus",
    stars: 3,
    price: "15.00",
    offPrice: "12.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus4-free-img.jpg"
  },
  {
    type: "Plants",
    name: "Piorro Quisquam",
    stars: 3,
    price: "32.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant4-free-img.jpg"
  },
  {
    type: "Plants",
    name: "Rattle Snake Tail",
    stars: 1,
    price: "45.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant6-free-img.jpg"
  },
  {
    type: "Cactus",
    name: "Star Cacuts",
    stars: 2,
    price: "34.00",
    offPrice: "32.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus6-free-img.jpg"
  }
];

function Products() {
  const renderStars = (stars) => {
    const starIcons = [];
    for (let i = 0; i < 5; i++) {
      starIcons.push(
        <i key={i} className={i < stars ? 'fas fa-star' : 'far fa-star'}></i>
      );
    }
    return starIcons;
  };
  return (
    <section className="products">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.src} alt={product.name} />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.type}</p>
            <div className="stars">
              {renderStars(product.stars)}
            </div> 
            <p className="price">
              {product.offPrice ? (
                <>
                  <span className="original-price">${product.price}</span> <span className="discounted-price">${product.offPrice}</span>
                </>
              ) : (
                <span>${product.price}</span>
              )}
            </p>           
          </div>
        </div>
      ))}
    </section>
  );
}

export default Products;
