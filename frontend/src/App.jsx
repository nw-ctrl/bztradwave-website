import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import AIInsights from './components/AIInsights';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <AIInsights />
        <Contact />
      </main>
    </div>
  );
}

export default App;

