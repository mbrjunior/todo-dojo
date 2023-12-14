import React, { useState } from "react";

interface AddTaskFormProps {
  onAddTask: (task: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      onAddTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="add-task-form">
      <input type="text" value={newTask} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Adicionar tarefa</button>
    </div>
  );
};

export default AddTaskForm;
