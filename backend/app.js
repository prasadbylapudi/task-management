// app.js
const express = require('express');
const cors = require('cors');
const app=express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());

  const corsOptions = {
    origin: 'http://localhost:5173', // Allow your frontend's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  };
  
  app.use(cors(corsOptions));

  app.use(bodyParser.urlencoded({ extended: true })); 
// Import routes
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use("/test", (req, res) => {
    res.send("Hello World");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
