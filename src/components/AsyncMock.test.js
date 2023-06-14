import { screen, render } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders post if request succeeds", async () => {
    /*Mock using jest(replace build-in fetch func with our dummy fetch func;
    simulating success case,not actually sending a request to the API);
    Prevents unnecessary API call & works even if the server is down*/
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });

    //Arrange
    render(<Async />);

    //Act
    //...

    //Assert
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
