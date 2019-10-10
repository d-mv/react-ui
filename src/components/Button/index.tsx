import React from "react";
import Button from "@material-ui/core/Button";
import { PropTypes } from "@material-ui/core";

export interface ButtonProps {
  children: any;
  color: PropTypes.Color;
  disabled?: boolean;
  // can send back it's child, class or id
  onClick: (arg0?: JSX.Element | string) => void;
}

export default function({ children, color, disabled, onClick }: ButtonProps) {
  return (
    <Button
      data-testid={`button__${color}`}
      variant='contained'
      disabled={disabled}
      color={color}
      onClick={() => onClick()}>
      {children}
    </Button>
  );
}
