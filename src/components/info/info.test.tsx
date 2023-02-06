import { render, screen } from "@testing-library/react";
import { Info } from "./info";

describe("Given the Info component", () => {
  describe("When called upon it", () => {
    test("Then it should renderize the header", () => {
      render(<Info />);
      const role = screen.getAllByRole("list");
      expect(role.length).toBe(4);
    });
  });
});
