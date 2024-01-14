import { render, screen } from "@testing-library/react";
import { Application } from "./application";
import "@testing-library/jest-dom";
describe("Application", () => {
  test("renders", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const pageHeading = screen.getByRole("heading", { level: 1 });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", { level: 2 });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    expect(nameElement2).toBeInTheDocument();

    const termsElement = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement).toBeInTheDocument();

    const paragranphElement = screen.getByText("All fields are mandatory");
    expect(paragranphElement).toBeInTheDocument();
  });
});
