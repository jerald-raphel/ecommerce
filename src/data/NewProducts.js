import React, { useState, useEffect } from 'react';
//import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/NewProducts.css';

const NewProducts = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchNewProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://ecommerce-server-orkq.onrender.com/api/products');
        const data = await response.json();

        const recentProducts = data
          .sort((a, b) => b.id - a.id)
          .slice(0, 10);

        setNewProducts(recentProducts);
      } catch (error) {
        console.error('Failed to fetch new products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewProducts();
  }, []);

  if (loading) return <div className="loading">Loading new products...</div>;

  return (
    <div className="new-products">
      <h2 className="section-title">New Arrivals</h2>
      <div className="products-grid">
        {newProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <span className="product-category">{product.category}</span>
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">${parseFloat(product.price).toFixed(2)}</p>
              <p className="description">{product.description}</p>

              <div className="product-actions">

                {/* ✅ Fixed Link syntax and route */}
                <Link to={`/newproduct/${product.id}`} className="view-details-link">
                  <button className="details-btn">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
