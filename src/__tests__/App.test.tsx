import { render, fireEvent } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";
import useTasks from "../hooks/useTasks";

jest.mock("../hooks/useTasks");

describe("App", () => {
  beforeEach(() => {
    (useTasks as jest.Mock).mockReturnValue([
      { tasks: [] },
      { addTask: jest.fn(), deleteTask: jest.fn(), clearTasks: jest.fn() },
    ]);
  });

  it("renders correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText("Lista de Tarefas")).toBeInTheDocument();
  });

  it("renders TaskList with correct tasks", () => {
    (useTasks as jest.Mock).mockReturnValueOnce([
      { tasks: ["Test Task"] },
      { addTask: jest.fn(), deleteTask: jest.fn(), clearTasks: jest.fn() },
    ]);
    const { getByText } = render(<App />);
    expect(getByText("Test Task")).toBeInTheDocument();
  });

  it("renders AddTaskForm", () => {
    const { getByText } = render(<App />);
    expect(getByText("Adicionar tarefa")).toBeInTheDocument();
  });

  it('clears all tasks when "Limpar tudo" button is clicked', () => {
    const clearTasks = jest.fn();
    (useTasks as jest.Mock).mockReturnValueOnce([
      { tasks: ["Test Task"] },
      { addTask: jest.fn(), deleteTask: jest.fn(), clearTasks },
    ]);
    const { getByText } = render(<App />);
    fireEvent.click(getByText("Limpar tudo"));
    expect(clearTasks).toHaveBeenCalled();
  });
});
