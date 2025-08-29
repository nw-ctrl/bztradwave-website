import React from 'react';
import agricultureIcon from '../assets/images/icon_agriculture_minimal.png';
import electronicsIcon from '../assets/images/icon_electronics_minimal.png';
import clothingIcon from '../assets/images/icon_clothing_minimal.png';

const Products = () => {
  const products = [
    {
      id: 'agriculture',
      title: 'Agriculture',
      icon: agricultureIcon,
      description: 'Premium agricultural products from Australia with organic certification and sustainable farming practices.',
      features: ['Organic Certification', 'Quality Assurance', 'Global Distribution', 'Sustainable Practices']
    },
    {
      id: 'electronics',
      title: 'Electronics',
      icon: electronicsIcon,
      description: 'Cutting-edge technology solutions and electronic components with comprehensive technical support.',
      features: ['Latest Technology', 'Technical Support', 'Bulk Orders', 'Innovation Partners']
    },
    {
      id: 'clothing',
      title: 'Clothing & Garments',
      icon: clothingIcon,
      description: 'Fashion-forward clothing and garments with sustainable materials and ethical production methods.',
      features: ['Sustainable Materials', 'Ethical Production', 'Custom Orders', 'Fashion Trends']
    }
  ];

  return (
    <section id="products" className="section">
      <div className="container">
        <h2 className="section-title">Our Product Lines</h2>
        <p className="section-subtitle">
          Discover our comprehensive range of products across three key sectors, 
          each backed by AI-driven market insights and quality assurance.
        </p>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.icon} alt={product.title} className="product-icon" />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-features" style={{ padding: '0 var(--space-md) var(--space-lg)' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {product.features.map((feature, index) => (
                    <li key={index} style={{ 
                      color: 'var(--medium-gray)', 
                      fontSize: '14px', 
                      marginBottom: 'var(--space-xs)',
                      paddingLeft: 'var(--space-sm)',
                      position: 'relative'
                    }}>
                      <span style={{ 
                        position: 'absolute', 
                        left: 0, 
                        color: 'var(--soft-blue)' 
                      }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

