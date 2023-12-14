import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import TaskList from '../components/TaskList';

describe('TaskList', () => {

  it('renders correctly with no tasks', () => {
    const { queryByRole } = render(<TaskList tasks={[]} />);
    expect(queryByRole('listitem')).toBeNull();
  });

  it('renders correctly with tasks', () => {
    const tasks = ['Test Task'];
    const { getByText } = render(<TaskList tasks={tasks} />);
    expect(getByText('Test Task')).toBeInTheDocument();
  });

});