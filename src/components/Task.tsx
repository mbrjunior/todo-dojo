import React from 'react';

interface TaskProps {
  task: string;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <div className="task">
      <span>{task}</span>
    </div>
  );
};

export default Task;