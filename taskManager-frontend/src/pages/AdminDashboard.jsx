import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const backendUrl = 'https://task-management-4bn7aho7g-prasadbylapudis-projects.vercel.app';
// const backendUrl = 'http://localhost:5000';

const AdminDashboard = ({ token }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await fetch(`${backendUrl}/api/tasks`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setTasks(data);
  };

  const createTask = async (task) => {
    const response = await fetch(`${backendUrl}/api/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(task),
    });
    const newTask = await response.json();
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const approveTask = async (taskId) => {
    await fetch(`${backendUrl}/api/tasks/${taskId}/approve`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <TaskForm onCreateTask={createTask} />
      <TaskList tasks={tasks} onApprove={approveTask} isAdmin />
    </div>
  );
};

export default AdminDashboard;
