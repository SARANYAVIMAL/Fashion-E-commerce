// App.jsx
import React from 'react';
import './Home.css';
import img from '../assets/h1(1).jpg';
import img1 from '../assets/h1(2).jpg';
import img2 from '../assets/h1(3).jpg';
import img3 from '../assets/h2(1).jpg';
import img5 from '../assets/h2(2).jpg';
import img6 from '../assets/h2(3).jpg';
import img7 from '../assets/h2(4).jpg';
import img4 from '../assets/h3.jpg';
import img10 from '../assets/h4(1).jpg';

function Home() {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Elevate Your Style This Season</h1>
          <p className="hero-subtitle">
            Discover our new collection of premium fashion wear designed for modern trends.
          </p>
          <button className="hero-cta">Go To Shop</button>
        </div>
        <div className="hero-gallery">
          <div className="hero-img-card orange-set">
            <img src={img} alt="image" />
          </div>
          <div className="hero-img-card blue-dress">
            <img src={img1} alt="image1" />
          </div>
          <div className="hero-img-card beige-outfit">
            <img src={img2} alt="image2" />
          </div>
           
           
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Shop By Category</h2>
        <div className="category-grid">
          
          <div className="category-card"><img src={img3} alt="image" /><span className="category-label">Casual</span></div>
          <div className="category-card"><img src={img5} alt="image" /><span className="category-label">Formal</span></div>
          <div className="category-card"><img src={img6} alt="image" /><span className="category-label">Sportswear</span></div>
          <div className="category-card"><img src={img7} alt="image"/><span className="category-label">Accessories</span></div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="promo-banner">
        <div className="promo-overlay">
          <img src={img4} alt="image" className='promo-img4' />
          <h2 className="promo-text">50% OFF</h2>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="products-section">
        <div className="product-grid">
          
          <div className="product-card">
            <div className="product-thumb p1">
              </div>
              <div className="hero-img-card beige-outfit"></div>
            <button className="buy-now-btn">Buy Now</button>
          </div>
          
          <div className="product-card">
            <div className="product-thumb p2"></div>
            <button className="buy-now-btn">Buy Now</button>
          </div>
          
          <div className="product-card">
            <div className="product-thumb p3">
              <img src={img10} alt="product" className='final'/>
            </div>
            <button className="buy-now-btn">Buy Now</button>
          </div>
          
          <div className="product-card">
            <div className="product-thumb p4"></div>
            <button className="buy-now-btn">Buy Now</button>
          </div>
        
        </div>
      </section>
</div>
  );
}

export default Home;
