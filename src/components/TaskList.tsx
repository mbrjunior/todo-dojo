import React from 'react';
import Task from './Task';

interface TaskListProps {
  tasks: string[];
  onDeleteTask: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div key={index} className="task-item">
          <Task task={task} />
          <button onClick={() => onDeleteTask(index)}>Remover</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
