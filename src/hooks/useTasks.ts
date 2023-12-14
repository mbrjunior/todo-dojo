import useLocalStorage from './useLocalStorage';

interface TaskState {
  tasks: string[];
}

interface TaskActions {
  addTask: (task: string) => void;
  deleteTask: (index: number) => void;
  clearTasks: () => void;
}

const useTasks = (): [TaskState, TaskActions] => {
  const [tasks, setTasks] = useLocalStorage<string[]>('tasks', []);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return [
    { tasks },
    {
      addTask,
      deleteTask,
      clearTasks,
    },
  ];
};

export default useTasks;
