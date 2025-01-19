// routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findUserByUsername } = require('../models/userModel');
const router = express.Router();

// Login Route
router.post('/login', (req, res) => {
  console.log('Request Body:', req.body);

  const { username, password } = req.body;
  const user = findUserByUsername(username);

  console.log("user", user);
  console.log("password", password);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials username' });
  }

  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }



  // Generate JWT token
  const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.json({ token });
});

module.exports = router;
