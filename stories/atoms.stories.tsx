import React from "react";
import Button from "components/Button";

export default { title: "Atoms" };

const mockFn = () => {};

export const Buttons = () => (
  <Button color='primary' onClick={mockFn}>
    Primary
  </Button>
);
