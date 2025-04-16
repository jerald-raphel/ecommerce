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
import crossIcon from '../assets/close-icon.png'; // <-- import image

const LoginSignupCard = ({ onLoginSuccess }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [showCard, setShowCard] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: ''
  });

  const navigate = useNavigate();

  // 🔁 API base from env or fallback to local
  const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:3000/api';

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
      ? `${API_BASE}/signup`
      : `${API_BASE}/login`;

    const payload = isSignup
      ? formData
      : { email: formData.email, password: formData.password };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        if (isSignup) {
          alert('Signup successful! Please login.');
          toggleMode();
        } else {
          setShowCard(false);
          onLoginSuccess?.();
          navigate('/addproduct');
        }
      } else {
        alert(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      alert('Network error. Please try again later.');
      console.error('Network or server error:', err);
    }
  };

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
