import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given the App component", () => {
  describe("When called upon it", () => {
    test("renders learn react link", () => {
      render(<App />);
      const linkElement = screen.getByText(/the pointing gentlemen/i);
      expect(linkElement).toBeInTheDocument();
      const role = screen.getAllByRole("list");
      expect(role.length).toBe(4);
    });
  });
});
