import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="https://avatars.githubusercontent.com/u/88433458?v=4" alt="Simply Natural Logo" />
          <span>Simply Natural</span>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <div className="cart">
            <span>$44.00</span>
            <span className="cart-icon"></span>
            <span className="cart-count">2</span>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Best Quality Plants</h2>
          <h1>Amazing Variety Of Plants Starting Just $12</h1>
          <button className="shop-now">Shop Now</button>
        </div>
        <div className="hero-image"></div>
      </section>
    </div>
  );
}

export default Header;
