// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import '../styles/Navbar.css';

// const Navbar = () => {
//   const { cartItems } = useCart();
//   const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="navbar-content">
//           <Link to="/" className="logo">
//             ShopEase
//           </Link>
//           <div className="nav-links">
//             <Link to="/">Home</Link>
//             <Link to="/cart" className="cart-icon">
//               <span>🛒</span>
//               {cartItemCount > 0 && (
//                 <span className="cart-count">{cartItemCount}</span>
//               )}
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar; 



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Navbar.css';
import LoginCard from '../pages/LoginCard';

const Navbar = () => {
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [showLogin, setShowLogin] = useState(false);

  const handleAddProductClick = () => {
    if (window.confirm("If you want to add your own products, please login.")) {
      setShowLogin(false); // Reset first to ensure state change is registered
      setTimeout(() => {
        setShowLogin(true);
      }, 0); // Next tick, reopen
    }
  };
  

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo">Beast</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            {/* <Link to="/new">new</Link> */}
            <Link onClick={handleAddProductClick}>Add</Link>
            <Link to="/cart" className="cart-icon">
              <span>🛒</span>
              {cartItemCount > 0 && (
                <span className="cart-count">{cartItemCount}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
      {showLogin && <LoginCard closeLogin={() => setShowLogin(false)} />}
    </nav>
  );
};

export default Navbar;

