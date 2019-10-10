import React from "react";
import { render } from "@testing-library/react";
import Button from ".";

const mockFn = () => {};

describe("<Button /> test", () => {
  it("renders the component", () => {
    const { getByTestId } = render(
      <Button color='primary' onClick={mockFn}>
        BUTTON
      </Button>
    );
    expect(getByTestId("button__primary")).toBeTruthy;
  });
  it("renders the children",
    () => {
      const testString = "TESTING_BUTTON";
      const { getByTestId } = render(
        <Button color='primary' onClick={mockFn}>
          {testString}
        </Button>
      );
      const result = getByTestId("button__primary").textContent
      expect(result).toEqual(testString);
    });
});
