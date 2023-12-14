import React from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import useTasks from './hooks/useTasks';
import "./App.css";


const App: React.FC = () => {
  const [{ tasks }, { addTask, deleteTask, clearTasks }] = useTasks();

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      <AddTaskForm onAddTask={addTask} />
      <button onClick={clearTasks}>Clear All Tasks</button>
    </div>
  );
};

export default App;