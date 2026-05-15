import React from 'react';
import './AboutUs.css';
import img from '../assets/aboutus.png';

function AboutUs() 
{
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      
      <div className="about-image-wrapper">
        {/* Replace with your actual image path */}
        <img src={img} alt="Fashion illustration" className="about-image" />
      </div>

      <div className="about-content">
        <p>
          We are a modern fashion brand focused on creating stylish, comfortable, and high-quality 
          clothing for everyday life. Our goal is to offer designs that are both trendy and 
          timeless, giving customers confidence in every outfit they wear.
        </p>

        <p>
          We believe in using good materials, sustainable practices, and thoughtful 
          craftsmanship. Every piece we create is made with attention to detail and a passion 
          for fashion.
        </p>

        <p>
          Our team brings together creativity, experience, and fresh ideas to deliver the best for 
          Our customers. We're committed to offering a smooth shopping experience and 
          products that inspire your personal style.
        </p>

        <p className="about-footer">
          Thank you for being a part of our journey. Together, we continue to shape a better and 
          more stylish future.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;