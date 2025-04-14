import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import LoginCard from './pages/LoginCard';
import AddProductForm from './data/AddProductForm';
import Cart from './pages/Cart';
import NewProducts from './data/NewProducts';
import NewProductDetail from './pages/NewProductDetail';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginCard/>} />
            <Route path="/addproduct" element={<AddProductForm/>} />
            <Route path="/new" element={<NewProducts/>} />
            <Route path="/newdetail" element={<NewProductDetail/>} />
            <Route path="/newproduct/:id" element={<NewProductDetail />} />

          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App; 