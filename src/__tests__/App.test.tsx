import { render } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";
import useTasks from "../hooks/useTasks";

jest.mock("../hooks/useTasks");

describe("App", () => {
  beforeEach(() => {
    (useTasks as jest.Mock).mockReturnValue([
      { tasks: [] },
      { addTask: jest.fn() },
    ]);
  });

  it("renders correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText("Lista de Tarefas")).toBeInTheDocument();
  });
});
