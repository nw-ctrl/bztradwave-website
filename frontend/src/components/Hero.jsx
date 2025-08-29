import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [stats, setStats] = useState({
    agriculture: 2.4,
    electronics: 8.9,
    clothing: 5.7
  });

  useEffect(() => {
    // Animate stats on load
    const timer = setTimeout(() => {
      setStats({
        agriculture: 2.4,
        electronics: 8.9,
        clothing: 5.7
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Global Trade, Powered by AI</h1>
          <p className="hero-subtitle">
            Proudly from Australia, we facilitate seamless international trade 
            with cutting-edge technology and dedicated support.
          </p>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">${stats.agriculture}M</div>
              <div className="stat-label">Agriculture Exports</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">${stats.electronics}M</div>
              <div className="stat-label">Electronics Trade</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">${stats.clothing}M</div>
              <div className="stat-label">Clothing Imports</div>
            </div>
          </div>
          
          <div className="hero-actions mt-5">
            <a href="#products" className="btn btn-primary">Explore Products</a>
            <a href="#about" className="btn btn-ghost">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

