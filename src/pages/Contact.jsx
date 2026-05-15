import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    subscribe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="form-container">
      <h2 className="top-title">Contact Us</h2>
      
      <div className="card">
        <div className="card-header">
          <h3>Contact <span>Us</span></h3>
          <p>Let's get in touch!</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <label>Name</label>
          </div>

          <div className="input-group">
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input 
              type="tel" 
              name="contact" 
              value={formData.contact} 
              onChange={handleChange} 
              required 
            />
            <label>contact</label>
          </div>

          <div className="checkbox-group">
            <input 
              type="checkbox" 
              id="subscribe" 
              name="subscribe" 
              checked={formData.subscribe} 
              onChange={handleChange} 
            />
            <label htmlFor="subscribe">I would like to receive newsletter</label>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;