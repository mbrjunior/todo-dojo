import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import TaskList from '../components/TaskList';

describe('TaskList', () => {
  const mockDeleteTask = jest.fn();

  it('renders correctly with no tasks', () => {
    const { queryByRole } = render(<TaskList tasks={[]} onDeleteTask={mockDeleteTask} />);
    expect(queryByRole('listitem')).toBeNull();
  });

  it('renders correctly with tasks', () => {
    const tasks = ['Test Task'];
    const { getByText } = render(<TaskList tasks={tasks} onDeleteTask={mockDeleteTask} />);
    expect(getByText('Test Task')).toBeInTheDocument();
  });

  it('deletes task when delete button is clicked', () => {
    const tasks = ['Test Task'];
    const { getByText } = render(<TaskList tasks={tasks} onDeleteTask={mockDeleteTask} />);
    fireEvent.click(getByText('Remover'));
    expect(mockDeleteTask).toHaveBeenCalledWith(0);
  });
});