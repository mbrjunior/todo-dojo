import React from 'react';
import Task from './Task';

interface TaskListProps {
  tasks: string[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div key={index} className="task-item">
          <Task task={task} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
