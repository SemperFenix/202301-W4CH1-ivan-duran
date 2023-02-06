import { render, screen } from "@testing-library/react";
import { Gentleman } from "./gentleman";
import { MOCK_CASPOSOS } from "../../mocks/mock";
describe("Given the Gentleman component", () => {
  describe("When called upon it", () => {
    test("Then it should renderize the list", () => {
      const item = MOCK_CASPOSOS[0];
      render(
        <Gentleman
          id={item.id}
          name={item.name}
          status={item.status}
          profession={item.profession}
          twitter={item.twitter}
          picture={item.picture}
          alternativeText={item.alternativeText}
          selected={item.selected}
        />
      );
      const linkElement = screen.getByText(/Osborne/i);
      expect(linkElement).toBeInTheDocument();
      const role = screen.getAllByRole("listitem");
      expect(role.length).toBe(4);
    });
  });
});
