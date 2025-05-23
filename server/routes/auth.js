  // const express = require('express');
  // const router = express.Router();
  // const User = require('../models/User');

  // // Signup
  // router.post('/signup', async (req, res) => {
  //   const { name, email, password, address } = req.body;
  //   try {
  //     const existing = await User.findOne({ email });
  //     if (existing) return res.json({ success: false, message: 'Email already registered' });
  //     await User.create({ name, email, password, address });
  //     res.json({ success: true });
  //   } catch (err) {
  //     res.json({ success: false, message: 'Signup failed' });
  //   }
  // });

  // // Login
  // router.post('/login', async (req, res) => {
  //   const { email, password } = req.body;
  //   try {
  //     const user = await User.findOne({ email, password });
  //     if (!user) return res.json({ success: false, message: 'Invalid credentials' });
  //     res.json({ success: true, user });
  //   } catch (err) {
  //     res.json({ success: false, message: 'Login failed' });
  //   }
  // });

  // module.exports = router;



  const express = require('express');
  const User = require('../models/User');
  const router = express.Router();
  
  // Signup route
  router.post('/signup', async (req, res) => {
    const { name, email, password, address } = req.body;
  
    try {
      // Check if the email is already registered
      const existing = await User.findOne({ email });
      if (existing) {
        return res.status(400).json({ success: false, message: 'Email already registered' });
      }
  
      // Create a new user (password is saved as plain text here)
      const newUser = new User({
        name,
        email,
        password,  // Plain text password
        address
      });
  
      await newUser.save();  // Save the new user to the database
  
      // Respond with success
      res.status(201).json({ success: true, message: 'User registered successfully' });
  
    } catch (err) {
      console.error('Error during signup:', err);
      res.status(500).json({ success: false, message: 'Signup failed, please try again later.' });
    }
  });
  
  // Login route
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
      // Find user with matching email
      const user = await User.findOne({ email });
      if (!user) {
        return res.json({ success: false, message: 'Invalid credentials' });
      }
  
      // Check if the password matches
      if (user.password !== password) {  // Compare plain text passwords
        return res.json({ success: false, message: 'Invalid credentials' });
      }
  
      // Respond with success and user data (if login is successful)
      res.json({ success: true, user });
    } catch (err) {
      // Handle errors
      console.error(err);
      res.json({ success: false, message: 'Login failed' });
    }
  });
  
  module.exports = router;
  