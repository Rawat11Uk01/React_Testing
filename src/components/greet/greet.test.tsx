import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";
import "@testing-library/jest-dom";
test("Greet render correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("Yo");
  expect(textElement).toBeInTheDocument();
});

test("Greet render with a name", () => {
  render(<Greet name="John" />);
  const textElement = screen.getByText("Yo John");
  expect(textElement).toBeInTheDocument();
});