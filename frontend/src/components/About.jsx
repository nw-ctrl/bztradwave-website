import React from 'react';

const About = () => {
  return (
    <section id="about" className="section section-light">
      <div className="container">
        <h2 className="section-title">About bzTradewave.au</h2>
        <p className="section-subtitle">
          Australia-based with global reach, we connect businesses worldwide through 
          innovative trade solutions and AI-powered market insights.
        </p>
        
        <div className="about-content">
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-lg)', marginTop: 'var(--space-xl)' }}>
            <div className="card">
              <h3 className="card-title">Our Mission</h3>
              <p className="card-content">
                To revolutionize international trade by providing seamless, AI-powered 
                solutions that connect Australian businesses with global markets.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Global Presence</h3>
              <p className="card-content">
                With partner offices across Asia, China, Europe, and Australia, 
                we offer comprehensive support for your international trade needs.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Innovation First</h3>
              <p className="card-content">
                Leveraging cutting-edge AI technology to provide real-time market 
                insights and optimize your trade operations for maximum efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

