// models/userModel.js
const bcrypt = require('bcryptjs');

// In-memory user store
const users = [
  {
    id: 1,
    username: 'admin',
    password: 'admin', // Hashed password
    role: 'admin', // Admin user
  },
  {
    id: 2,
    username: 'user',
    password: 'user', // Hashed password
    role: 'user', // Regular user
  },
];

// Find user by username
const findUserByUsername = (username) => users.find(user => user.username === username);

module.exports = { findUserByUsername };
