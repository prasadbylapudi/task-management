import React from 'react';

const TaskList = ({ tasks, onApprove, isAdmin }) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="p-4 bg-gray-100 rounded shadow-md flex justify-between items-center"
        >
          <div>
            <h2 className="text-lg font-bold">{task.title}</h2>
            <p>{task.description}</p>
            <p>
              <span className="font-bold">Deadline:</span> {task.deadline}
            </p>
            <p>
              <span className="font-bold">Status:</span>{' '}
              {task.status === 'Approved' ? (
                <span className="text-green-500">Approved</span>
              ) : (
                <span className="text-yellow-500">Pending</span>
              )}
            </p>
            {task.status === 'Approved' && (
              <p>
                <span className="font-bold">Approved By:</span> {task.approvedBy}
              </p>
            )}
          </div>
          {isAdmin && task.status === 'Pending' && (
            <button
              onClick={() => onApprove(task.id)}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Approve
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
