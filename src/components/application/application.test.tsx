import { render, screen } from "@testing-library/react";
import { Application } from "./application";
import "@testing-library/jest-dom";
describe("Application", () => {
  test("renders", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox");
    expect(nameElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();
  });
});
