import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";
import "@testing-library/jest-dom";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
  });
});
