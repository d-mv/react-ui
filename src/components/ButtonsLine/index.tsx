import React from 'react';

import { Line } from '../../styles/layout/';

export interface ButtonsLineProps {
  buttons: JSX.Element[];
}

export default function({ buttons }: ButtonsLineProps): JSX.Element {
  return (
    <Line
      data-testid='buttons-line'
      align='center'
      justify='center'
      spacing={2}
      padding='1rem 0'>
      {buttons.map(button => button)}
    </Line>
  );
}
