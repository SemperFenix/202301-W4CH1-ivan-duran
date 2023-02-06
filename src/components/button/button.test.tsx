import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Given the App component", () => {
  describe("When called upon it", () => {
    test("Then it should renderize the header", () => {
      render(<Button />);
      const linkElement = screen.getByText(/the pointing gentlemen/i);
      expect(linkElement).toBeInTheDocument();
      const role = screen.getAllByRole("button");
      expect(role.length).toBe(1);
    });
  });
});
