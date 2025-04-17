// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import '../styles/Cart.css';

// const Cart = () => {
//   const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

//   return (
//     <div className="cart">
//       <div className="container">
//         <h1 className="page-title">Your Cart</h1>
//         {cartItems.length === 0 ? (
//           <div className="empty-cart">
//             <p>Your cart is empty</p>
//             <Link to="/" className="btn btn-primary">Continue Shopping</Link>
//           </div>
//         ) : (
//           <div className="cart-content">
//             <div className="cart-items">
//               {cartItems.map(item => (
//                 <div key={item.id} className="cart-item card">
//                   <img src={item.image} alt={item.name} className="cart-item-image" />
//                   <div className="cart-item-details">
//                     <h3>{item.name}</h3>
//                     <p className="price">${item.price.toFixed(2)}</p>
//                     <div className="quantity-controls">
//                       <button 
//                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                         className="quantity-btn"
//                       >
//                         -
//                       </button>
//                       <span>{item.quantity}</span>
//                       <button 
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                         className="quantity-btn"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <div className="cart-item-total">
//                     <p>${(item.price * item.quantity).toFixed(2)}</p>
//                     <button 
//                       onClick={() => removeFromCart(item.id)}
//                       className="remove-btn"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             <div className="cart-summary">
//               <h2>Order Summary</h2>
//               <div className="summary-item">
//                 <span>Subtotal</span>
//                 <span>${getCartTotal().toFixed(2)}</span>
//               </div>
//               <div className="summary-item">
//                 <span>Shipping</span>
//                 <span>Free</span>
//               </div>
//               <div className="summary-item total">
//                 <span>Total</span>
//                 <span>${getCartTotal().toFixed(2)}</span>
//               </div>
//               <button className="btn btn-primary checkout-btn">
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart; 





// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import '../styles/Cart.css';
// import CloseIcon from '../assets/close-icon.png'; // Update the path if needed

// const Cart = () => {
//   const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
//   const [showCheckoutForm, setShowCheckoutForm] = useState(false);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // You can add your logic here to handle order submission
//     alert('Order placed successfully!');
//     setShowCheckoutForm(false);
//   };

//   return (
//     <div className="cart">
//       <div className="container">
//         <h1 className="page-title">Your Cart</h1>
//         {cartItems.length === 0 ? (
//           <div className="empty-cart">
//             <p>Your cart is empty</p>
//             <Link to="/" className="btn btn-primary">Continue Shopping</Link>
//           </div>
//         ) : (
//           <div className="cart-content">
//             <div className="cart-items">
//               {cartItems.map(item => (
//                 <div key={item.id} className="cart-item card">
//                   <img src={item.image} alt={item.name} className="cart-item-image" />
//                   <div className="cart-item-details">
//                     <h3>{item.name}</h3>
//                     <p className="price">${item.price.toFixed(2)}</p>
//                     <div className="quantity-controls">
//                       <button 
//                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                         className="quantity-btn"
//                       >
//                         -
//                       </button>
//                       <span>{item.quantity}</span>
//                       <button 
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                         className="quantity-btn"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <div className="cart-item-total">
//                     <p>${(item.price * item.quantity).toFixed(2)}</p>
//                     <button 
//                       onClick={() => removeFromCart(item.id)}
//                       className="remove-btn"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             <div className="cart-summary">
//               <h2>Order Summary</h2>
//               <div className="summary-item">
//                 <span>Subtotal</span>
//                 <span>${getCartTotal().toFixed(2)}</span>
//               </div>
//               <div className="summary-item">
//                 <span>Shipping</span>
//                 <span>Free</span>
//               </div>
//               <div className="summary-item total">
//                 <span>Total</span>
//                 <span>${getCartTotal().toFixed(2)}</span>
//               </div>
//               <button 
//                 className="btn btn-primary checkout-btn"
//                 onClick={() => setShowCheckoutForm(true)}
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         )}

//         {showCheckoutForm && (
//           <div className="checkout-form-overlay">
//             <div className="checkout-form-card">
//               <img 
//                 src={CloseIcon} 
//                 alt="Close" 
//                 className="close-icon" 
//                 onClick={() => setShowCheckoutForm(false)} 
//               />
//               <h2>Shipping Information</h2>
//               <form onSubmit={handleFormSubmit}>
//                 <div className="form-group">
//                   <label>Name</label>
//                   <input type="text" required />
//                 </div>
//                 <div className="form-group">
//                   <label>Mobile Number</label>
//                   <input type="tel" required />
//                 </div>
//                 <div className="form-group">
//                   <label>Address</label>
//                   <textarea required></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;







// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import '../styles/Cart.css';
// import CloseIcon from '../assets/close-icon.png'; // Update path if needed

// const Cart = () => {
//   const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
//   const [showCheckoutForm, setShowCheckoutForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     mobile: '',
//     address: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const validateMobileNumber = (mobile) => {
//     const regex = /^\+?[1-9]\d{1,14}$/; // E.164 format
//     return regex.test(mobile);
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
  
//     if (!validateMobileNumber(formData.mobile)) {
//       alert('Please enter a valid mobile number with country code (e.g., +919876543210).');
//       return;
//     }
  
//     try {
//       const response = await fetch('http://localhost:3000/api/send-sms', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           ...formData,
//           cart: cartItems,
//           total: getCartTotal().toFixed(2),
//         }),
//       });
  
//       if (response.ok) {
//         alert('Order placed successfully! A confirmation message has been sent.');
//         setShowCheckoutForm(false);
//       } else {
//         const data = await response.json();
//         alert(`Failed to send confirmation SMS. ${data.error || ''}`);
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Error sending message.');
//     }
//   };
  

//   return (
//     <div className="cart">
//       <div className="container">
//         <h1 className="page-title">Your Cart</h1>
//         {cartItems.length === 0 ? (
//           <div className="empty-cart">
//             <p>Your cart is empty</p>
//             <Link to="/" className="btn btn-primary">Continue Shopping</Link>
//           </div>
//         ) : (
//           <div className="cart-content">
//             <div className="cart-items">
//               {cartItems.map(item => (
//                 <div key={item.id} className="cart-item card">
//                   <img src={item.image} alt={item.name} className="cart-item-image" />
//                   <div className="cart-item-details">
//                     <h3>{item.name}</h3>
//                     <p className="price">${item.price.toFixed(2)}</p>
//                     <div className="quantity-controls">
//                       <button 
//                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                         className="quantity-btn"
//                       >
//                         -
//                       </button>
//                       <span>{item.quantity}</span>
//                       <button 
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                         className="quantity-btn"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <div className="cart-item-total">
//                     <p>${(item.price * item.quantity).toFixed(2)}</p>
//                     <button 
//                       onClick={() => removeFromCart(item.id)}
//                       className="remove-btn"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             <div className="cart-summary">
//               <h2>Order Summary</h2>
//               <div className="summary-item">
//                 <span>Subtotal</span>
//                 <span>${getCartTotal().toFixed(2)}</span>
//               </div>
//               <div className="summary-item">
//                 <span>Shipping</span>
//                 <span>Free</span>
//               </div>
//               <div className="summary-item total">
//                 <span>Total</span>
//                 <span>${getCartTotal().toFixed(2)}</span>
//               </div>
//               <button 
//                 className="btn btn-primary checkout-btn"
//                 onClick={() => setShowCheckoutForm(true)}
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         )}

//         {showCheckoutForm && (
//           <div className="checkout-form-overlay">
//             <div className="checkout-form-card">
//               <img 
//                 src={CloseIcon} 
//                 alt="Close" 
//                 className="close-icon" 
//                 onClick={() => setShowCheckoutForm(false)} 
//               />
//               <h2>Shipping Information</h2>
//               <form onSubmit={handleFormSubmit}>
//                 <div className="form-group">
//                   <label>Name</label>
//                   <input 
//                     type="text" 
//                     name="name" 
//                     value={formData.name} 
//                     onChange={handleChange} 
//                     required 
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Mobile Number</label>
//                   <input 
//                     type="tel" 
//                     name="mobile" 
//                     value={formData.mobile} 
//                     onChange={handleChange} 
//                     required 
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Address</label>
//                   <textarea 
//                     name="address" 
//                     value={formData.address} 
//                     onChange={handleChange} 
//                     required 
//                   ></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import '../styles/Cart.css';
// import CloseIcon from '../assets/close-icon.png';

// const Cart = () => {
//   const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
//   const [showCheckoutForm, setShowCheckoutForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     address: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:3000/api/send-email', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           address: formData.address,
//           total: getCartTotal().toFixed(2),
//         })
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         alert('Order placed! A confirmation email has been sent.');
//         setShowCheckoutForm(false);
//       } else {
//         alert('Failed to send confirmation email.');
//       }
//     } catch (err) {
//       console.error('Error sending email:', err);
//       alert('Error sending email.');
//     }
//   };

//   return (
//     <div className="cart">
//       <div className="container">
//         <h1 className="page-title">Your Cart</h1>
//         {cartItems.length === 0 ? (
//           <div className="empty-cart">
//             <p>Your cart is empty</p>
//             <Link to="/" className="btn btn-primary">Continue Shopping</Link>
//           </div>
//         ) : (
//           <div className="cart-content">
//             <div className="cart-items">
//               {cartItems.map(item => (
//                 <div key={item.id} className="cart-item card">
//                   <img src={item.image} alt={item.name} className="cart-item-image" />
//                   <div className="cart-item-details">
//                     <h3>{item.name}</h3>
//                     <p className="price">${item.price.toFixed(2)}</p>
//                     <div className="quantity-controls">
//                       <button 
//                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                         className="quantity-btn"
//                       >
//                         -
//                       </button>
//                       <span>{item.quantity}</span>
//                       <button 
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                         className="quantity-btn"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <div className="cart-item-total">
//                     <p>${(item.price * item.quantity).toFixed(2)}</p>
//                     <button 
//                       onClick={() => removeFromCart(item.id)}
//                       className="remove-btn"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="cart-summary">
//               <h2>Order Summary</h2>
//               <div className="summary-item">
//                 <span>Subtotal</span>
//                 <span>${getCartTotal().toFixed(2)}</span>
//               </div>
//               <div className="summary-item">
//                 <span>Shipping</span>
//                 <span>Free</span>
//               </div>
//               <div className="summary-item total">
//                 <span>Total</span>
//                 <span>${getCartTotal().toFixed(2)}</span>
//               </div>
//               <button 
//                 className="btn btn-primary checkout-btn"
//                 onClick={() => setShowCheckoutForm(true)}
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         )}

//         {showCheckoutForm && (
//           <div className="checkout-form-overlay">
//             <div className="checkout-form-card">
//               <img 
//                 src={CloseIcon} 
//                 alt="Close" 
//                 className="close-icon" 
//                 onClick={() => setShowCheckoutForm(false)} 
//               />
//               <h2>Shipping Information</h2>
//               <form onSubmit={handleFormSubmit}>
//                 <div className="form-group">
//                   <label>Name</label>
//                   <input 
//                     type="text" 
//                     name="name" 
//                     value={formData.name} 
//                     onChange={handleChange} 
//                     required 
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Email</label>
//                   <input 
//                     type="email" 
//                     name="email" 
//                     value={formData.email} 
//                     onChange={handleChange} 
//                     required 
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Address</label>
//                   <textarea 
//                     name="address" 
//                     value={formData.address} 
//                     onChange={handleChange} 
//                     required 
//                   ></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;






import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';
import CloseIcon from '../assets/close-icon.png'; // <-- import image

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });
  const [formError, setFormError] = useState('');
  
  // Directly use the Render API URL
  const API_BASE = 'https://ecommerce-server-awvj.onrender.com/api';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // 🛠️ Validate form data
    if (!formData.name || !formData.email || !formData.address) {
      setFormError('Please fill in all the fields!');
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          address: formData.address,
          total: getCartTotal().toFixed(2),
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert('Order placed! A confirmation email has been sent.');
        setShowCheckoutForm(false);
      } else {
        alert('Failed to send confirmation email.');
      }
    } catch (err) {
      console.error('Error sending email:', err);
      alert('Error sending email.');
    }
  };

  return (
    <div className="cart">
      <div className="container">
        <h1 className="page-title">Your Cart</h1>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <Link to="/" className="btn btn-primary">Continue Shopping</Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item card">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="price">${item.price.toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-total">
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-item">
                <span>Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="summary-item">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-item total">
                <span>Total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <button 
                className="btn btn-primary checkout-btn"
                onClick={() => setShowCheckoutForm(true)}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}

        {showCheckoutForm && (
          <div className="checkout-form-overlay">
            <div className="checkout-form-card">
              <img 
                src={CloseIcon} 
                alt="Close" 
                className="close-icon" 
                onClick={() => setShowCheckoutForm(false)} 
              />
              <h2>Shipping Information</h2>
              <form onSubmit={handleFormSubmit}>
                {formError && <div className="form-error">{formError}</div>}
                <div className="form-group">
                  <label>Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <textarea 
                    name="address" 
                    value={formData.address} 
                    onChange={handleChange} 
                    required 
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
