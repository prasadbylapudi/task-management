// routes/taskRoutes.js
const express = require('express');
const protect = require('../middleware/authMiddleware');
const { createTask, getTasks, approveTask } = require('../models/taskModel');
const router = express.Router();

// Create a task (Admin only)
router.post('/', protect, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Not authorized to create tasks' });
  }

  const { title, description, deadline } = req.body;
  const task = createTask(title, description, deadline, req.user.username);
  res.status(201).json(task);
});

// Get all tasks (Accessible to both admin and user)
router.get('/', protect, (req, res) => {
  const tasks = getTasks();
  res.json(tasks);
});

// Approve a task (Admin only)
router.put('/:id/approve', protect, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Not authorized to approve tasks' });
  }

  const task = approveTask(parseInt(req.params.id), req.user.username);
  if (!task) {
    return res.status(404).json({ message: 'Task not found or already approved' });
  }

  res.json(task);
});

module.exports = router;
