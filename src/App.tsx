import React, { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (task: string) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <TaskList tasks={tasks} />
      <AddTaskForm onAddTask={handleAddTask} />
    </div>
  );
};

export default App;
