import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import '../styles/Home.css';
import NewProducts from '../data/NewProducts'; // ✅ Import the NewProducts component

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...new Set(products.map(product => product.category))];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="home">
      <div className="container">
        <h1 className="page-title">Featured Products</h1>

        <div className="filters">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card card fade-in">
              <Link to={`/product/${product.id}`}>
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-category">{product.category}</div>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">${product.price.toFixed(2)}</p>
                  <p className="description">{product.description}</p>
                  <button className="btn btn-primary view-details-btn">View Details</button>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found matching your criteria.</p>
          </div>
        )}

        {/* ✅ New Arrivals Section */}
       
        <NewProducts />
        <div>
        © 2025 Beast. All rights reserved. | Terms of Service | Privacy Policy | Refund Policy

        </div>
      </div>
    </div>
  );
};

export default Home;



