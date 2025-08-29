import React from 'react';
import logoMinimalist from '../assets/images/logo_minimalist.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <img src={logoMinimalist} alt="bzTradewave.au" className="logo" />
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#about" className="nav-link">About Us</a></li>
              <li><a href="#products" className="nav-link">Products</a></li>
              <li><a href="#insights" className="nav-link">News & Insights</a></li>
              <li><a href="#partners" className="nav-link">Partners</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>
          <div className="header-actions">
            <a href="/partner-login" className="btn btn-secondary">Partner Login</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

