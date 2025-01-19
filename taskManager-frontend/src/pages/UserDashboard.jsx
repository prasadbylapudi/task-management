import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';

const backendUrl = 'https://task-management-4bn7aho7g-prasadbylapudis-projects.vercel.app';
// const backendUrl = 'http://localhost:5000';


const UserDashboard = ({ token }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await fetch(`${backendUrl}/api/tasks`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default UserDashboard;
