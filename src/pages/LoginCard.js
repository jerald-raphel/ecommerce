// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/LoginCard.css';
// import crossIcon from '../assets/close-icon.png'; // <-- import image

// const LoginSignupCard = ({ onLoginSuccess }) => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [showCard, setShowCard] = useState(true);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     address: ''
//   });

//   const navigate = useNavigate();

//   const toggleMode = () => {
//     setIsSignup(!isSignup);
//     setFormData({ name: '', email: '', password: '', address: '' });
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const endpoint = isSignup
//       ? 'http://localhost:3000/api/signup'
//       : 'http://localhost:3000/api/login';

//     const payload = isSignup
//       ? formData
//       : { email: formData.email, password: formData.password };

//     try {
//       const res = await fetch(endpoint, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });

//       const result = await res.json();

//       if (result.success) {
//         if (isSignup) {
//           alert('Signup successful! Please login.');
//           toggleMode();
//         } else {
//           setShowCard(false);
//           onLoginSuccess?.();
//           navigate('/addproduct');
//         }
//       } else {
//         alert(result.message || 'Something went wrong. Please try again.');
//       }
//     } catch (err) {
//       alert('Network error. Please try again later.');
//       console.error('Network or server error:', err);
//     }
//   };

//   if (!showCard) return null;

//   return (
//     <div className="login-card-overlay">
//       <div className="login-card">
//         <img
//           src={crossIcon} // <-- use imported image here
//           alt="Close"
//           className="close-icon"
//           onClick={() => setShowCard(false)}
//         />
//         <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
//         <form onSubmit={handleSubmit}>
//           {isSignup && (
//             <input
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           )}
//           <input
//             name="email"
//             placeholder="Email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             name="password"
//             placeholder="Password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           {isSignup && (
//             <input
//               name="address"
//               placeholder="Address"
//               value={formData.address}
//               onChange={handleChange}
//               required
//             />
//           )}
//           <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
//         </form>
//         <div className="toggle-link" onClick={toggleMode}>
//           {isSignup
//             ? 'Already have an account? Login'
//             : "Don't have an account? Sign up"}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignupCard;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginCard.css';
import crossIcon from '../assets/close-icon.png';

const LoginSignupCard = ({ onLoginSuccess }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [showCard, setShowCard] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
  });

  const navigate = useNavigate();

  const toggleMode = () => {
    setIsSignup(!isSignup);
    setFormData({ name: '', email: '', password: '', address: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isSignup
      ? 'https://ecommerce-server-orkq.onrender.com/api/signup'
      : 'https://ecommerce-server-orkq.onrender.com/api/login';

    const payload = isSignup
      ? formData
      : { email: formData.email, password: formData.password };

      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      
        // Check for HTTP error status before calling .json()
        if (!res.ok) {
          const errorText = await res.text(); // in case it's HTML or plain text
          console.error('Server responded with error:', errorText);
          throw new Error(`HTTP ${res.status} - ${res.statusText}`);
        }
      
        // Try parsing JSON safely
        let result;
        try {
          result = await res.json();
        } catch (jsonErr) {
          console.error('Failed to parse JSON:', jsonErr);
          throw new Error('Invalid response format from server.');
        }
      
        console.log('✅ API Response:', result);
      
        if (result.success) {
          if (isSignup) {
            alert('Signup successful! Please login.');
            toggleMode();
          } else {
            alert('Login successful!');
            setShowCard(false);
            onLoginSuccess?.();
            navigate('/addproduct');
          }
        } else {
          alert(result.message || 'Login/signup failed.');
        }
      } catch (err) {
        console.error('❌ Network or logic error:', err);
        alert('Something went wrong. Please check the console for more info.');
      }
      

  if (!showCard) return null;

  return (
    <div className="login-card-overlay">
      <div className="login-card">
        <img
          src={crossIcon}
          alt="Close"
          className="close-icon"
          onClick={() => setShowCard(false)}
        />
        <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {isSignup && (
            <input
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          )}
          <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
        </form>
        <div className="toggle-link" onClick={toggleMode}>
          {isSignup
            ? 'Already have an account? Login'
            : "Don't have an account? Sign up"}
        </div>
      </div>
    </div>
  );
};

export default LoginSignupCard;
