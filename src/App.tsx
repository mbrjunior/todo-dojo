import React from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import useTasks from './hooks/useTasks';
import "./App.css";


const App: React.FC = () => {
  const [{ tasks }, { addTask }] = useTasks();

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <TaskList tasks={tasks} />
      <AddTaskForm onAddTask={addTask} />
    </div>
  );
};

export default App;