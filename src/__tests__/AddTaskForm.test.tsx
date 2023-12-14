import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTaskForm from "../components/AddTaskForm";

describe("AddTaskForm", () => {
  const mockOnAddTask = jest.fn();

  it("renders correctly", () => {
    const { getByRole } = render(<AddTaskForm onAddTask={mockOnAddTask} />);
    expect(getByRole("textbox")).toBeInTheDocument();
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("changes input value when user types", () => {
    const { getByRole } = render(<AddTaskForm onAddTask={mockOnAddTask} />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "Test Task" } });
    expect(input).toHaveValue("Test Task");
  });

  it('calls onAddTask when "Adicionar tarefa" button is clicked', () => {
    const { getByRole } = render(<AddTaskForm onAddTask={mockOnAddTask} />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "Test Task" } });
    fireEvent.click(getByRole("button"));
    expect(mockOnAddTask).toHaveBeenCalledWith("Test Task");
  });
});
