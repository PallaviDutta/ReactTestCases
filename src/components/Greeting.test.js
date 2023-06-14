import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Greeting component", () => {
  test("Renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act

    //Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Renders good to see you if the button was NOT clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act

    //Assert
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("Renders Changed if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    act(() => {
      const buttonElement = screen.getByRole("button");
      userEvent.click(buttonElement);
    });

    //Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render good to see you if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    act(() => {
      const buttonElement = screen.getByRole("button");
      userEvent.click(buttonElement);
    });

    //Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
