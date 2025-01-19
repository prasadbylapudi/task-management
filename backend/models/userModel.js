// models/userModel.js
const bcrypt = require('bcryptjs');

// In-memory user store
const users = [
  {
    id: 1,
    username: 'admin',
    password: bcrypt.hashSync('admin', 10), // Hashed password
    role: 'admin', // Admin user
  },
  {
    id: 2,
    username: 'user',
    password: bcrypt.hashSync('user', 10), // Hashed password
    role: 'user', // Regular user
  },
];

// Find user by username
const findUserByUsername = (username) => users.find(user => user.username === username);

module.exports = { findUserByUsername };
