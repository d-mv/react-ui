import React from 'react';
import Button from '@material-ui/core/Button';
import { PropTypes } from '@material-ui/core';

export interface ButtonProps {
  title: string;
  disabled?: boolean;
  secondary?: boolean;
  // can send back it's child, class or id
  onClick: (arg0?: JSX.Element | string) => void;
}

export default function({ title, secondary, disabled, onClick }: ButtonProps) {
  let color: PropTypes.Color = 'primary';
  if (secondary) color = 'secondary';

  return (
    <Button
      data-testid={`button__${color}`}
      variant='contained'
      disabled={disabled}
      color={color}
      onClick={() => onClick()}>
      {title}
    </Button>
  );
}

