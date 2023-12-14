import { useState } from "react";

interface TaskState {
  tasks: string[];
}

interface TaskActions {
  addTask: (task: string) => void;
}

const useTasks = (): [TaskState, TaskActions] => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  return [
    { tasks },
    {
      addTask
    },
  ];
};

export default useTasks;
