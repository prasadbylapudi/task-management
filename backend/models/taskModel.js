// In-memory task store
let tasks = [];
// Function to create a task
const createTask = (title, description, deadline, createdBy) => {
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    deadline,
    status: 'Pending',
    createdBy,
    approvedBy: null,
    approvedAt: null,
  };
  tasks.push(newTask);
  return newTask;
};

// Function to get all tasks
const getTasks = () => tasks;

// Function to approve a task
const approveTask = (taskId, approvedBy) => {
  const task = tasks.find((task) => task.id === taskId);
  if (task && task.status === 'Pending') {
    task.status = 'Approved';
    task.approvedBy = approvedBy;
    task.approvedAt = new Date().toISOString();
  }
  return task;
};

module.exports = { createTask, getTasks, approveTask };
