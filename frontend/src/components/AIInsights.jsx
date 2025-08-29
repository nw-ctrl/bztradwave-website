import React, { useState } from 'react';

const AIInsights = () => {
  const [insights, setInsights] = useState([
    { category: 'Agriculture', trend: '+12%', value: '2.4M', color: 'var(--success-green)' },
    { category: 'Electronics', trend: '+8%', value: '8.9M', color: 'var(--soft-blue)' },
    { category: 'Clothing', trend: '+15%', value: '5.7M', color: 'var(--warning-orange)' }
  ]);

  return (
    <section id="insights" className="section section-light">
      <div className="container">
        <h2 className="section-title">AI-Powered Market Insights</h2>
        <p className="section-subtitle">
          Real-time market intelligence powered by advanced AI algorithms 
          to help you make informed trading decisions.
        </p>
        
        <div className="insights-dashboard" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 'var(--space-lg)', 
          marginTop: 'var(--space-xl)' 
        }}>
          {insights.map((insight, index) => (
            <div key={index} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
                <h3 className="card-title">{insight.category}</h3>
                <span style={{ 
                  color: insight.color, 
                  fontWeight: '600', 
                  fontSize: '18px' 
                }}>{insight.trend}</span>
              </div>
              <div style={{ 
                fontSize: '32px', 
                fontWeight: '700', 
                color: 'var(--soft-blue)', 
                marginBottom: 'var(--space-sm)' 
              }}>
                ${insight.value}
              </div>
              <div style={{ 
                height: '8px', 
                background: 'var(--light-gray)', 
                borderRadius: '4px', 
                overflow: 'hidden' 
              }}>
                <div style={{ 
                  height: '100%', 
                  background: insight.color, 
                  width: `${60 + index * 15}%`,
                  borderRadius: '4px',
                  transition: 'width 1s ease-out'
                }}></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="insights-features mt-5">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: 'var(--space-md)' 
          }}>
            <div className="card text-center">
              <h4 style={{ color: 'var(--soft-blue)', marginBottom: 'var(--space-sm)' }}>Real-time Data</h4>
              <p style={{ color: 'var(--medium-gray)', fontSize: '14px' }}>
                Live market updates every 15 minutes
              </p>
            </div>
            <div className="card text-center">
              <h4 style={{ color: 'var(--soft-blue)', marginBottom: 'var(--space-sm)' }}>AI Predictions</h4>
              <p style={{ color: 'var(--medium-gray)', fontSize: '14px' }}>
                Advanced algorithms predict market trends
              </p>
            </div>
            <div className="card text-center">
              <h4 style={{ color: 'var(--soft-blue)', marginBottom: 'var(--space-sm)' }}>Risk Analysis</h4>
              <p style={{ color: 'var(--medium-gray)', fontSize: '14px' }}>
                Comprehensive risk assessment tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInsights;

