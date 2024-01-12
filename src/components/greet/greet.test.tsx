import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";
import "@testing-library/jest-dom";

describe("Greet", () => {
  test("render correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Yoo");
    expect(textElement).toBeInTheDocument();
  });

  test("render with a name", () => {
    render(<Greet name="John" />);
    const textElement = screen.getByText("Yoo John");
    expect(textElement).toBeInTheDocument();
  });
});
