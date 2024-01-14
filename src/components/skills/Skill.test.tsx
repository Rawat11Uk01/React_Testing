import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from "./Skills";
import "@testing-library/jest-dom";

describe("Skills", () => {
  const skills = ["skill1", "skill2", "skill3"];
  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(skills.length);
  });

  test("render a text", () => {
    render(<Skills skills={skills} />);
    const textElement = screen.getByText("A list of skills", { exact: false });
    expect(textElement).toBeInTheDocument();
  });

  test("render login button", () => {
    render(<Skills skills={skills} />);
    const buttonElement = screen.queryByRole("button", { name: "Login" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("render start learning button", () => {
    render(<Skills skills={skills} />);
    const buttonElement = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(buttonElement).not.toBeInTheDocument();
  });

  test("start learning button will eventually be rendered", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    // screen.debug();
    const buttonElement = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      { timeout: 3000 }
    );
    // screen.debug();
    expect(buttonElement).toBeInTheDocument();
  });
});
