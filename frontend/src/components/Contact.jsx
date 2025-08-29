import React, { useState } from 'react';
import { API_BASE_URL } from '../config'; // Add this import at the top

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to expand your global trade operations? Contact our team 
            for personalized solutions and expert guidance.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: 'var(--space-xxl)', 
            marginTop: 'var(--space-xl)' 
          }}>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="contact-info">
              <div className="card">
                <h3 className="card-title">Contact Information</h3>
                <div className="card-content">
                  <div style={{ marginBottom: 'var(--space-md)' }}>
                    <h4 style={{ color: 'var(--deep-navy)', marginBottom: 'var(--space-xs)' }}>Email</h4>
                    <p style={{ color: 'var(--soft-blue)' }}>connect@bztradewave.au</p>
                  </div>
                  <div style={{ marginBottom: 'var(--space-md)' }}>
                    <h4 style={{ color: 'var(--deep-navy)', marginBottom: 'var(--space-xs)' }}>Location</h4>
                    <p style={{ color: 'var(--medium-gray)' }}>Proudly from Australia</p>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--deep-navy)', marginBottom: 'var(--space-xs)' }}>Business Hours</h4>
                    <p style={{ color: 'var(--medium-gray)' }}>Monday - Friday: 9:00 AM - 6:00 PM AEST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>bzTradewave.au</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: 'var(--space-md)' }}>
                Global Trade, Powered by AI. Connecting Australian businesses with the world.
              </p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: 'var(--space-xs)' }}>
                  <a href="#home" className="footer-link">Home</a>
                </li>
                <li style={{ marginBottom: 'var(--space-xs)' }}>
                  <a href="#about" className="footer-link">About Us</a>
                </li>
                <li style={{ marginBottom: 'var(--space-xs)' }}>
                  <a href="#products" className="footer-link">Products</a>
                </li>
                <li style={{ marginBottom: 'var(--space-xs)' }}>
                  <a href="#contact" className="footer-link">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Legal</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: 'var(--space-xs)' }}>
                  <a href="/privacy" className="footer-link">Privacy Policy</a>
                </li>
                <li style={{ marginBottom: 'var(--space-xs)' }}>
                  <a href="/terms" className="footer-link">Terms of Service</a>
                </li>
                <li style={{ marginBottom: 'var(--space-xs)' }}>
                  <a href="/partner-login" className="footer-link">Partner Login</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 bzTradewave.au. Part of the premium website family by NextWave.au, Australia.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;

