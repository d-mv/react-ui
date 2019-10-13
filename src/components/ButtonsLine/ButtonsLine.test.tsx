import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';
import ButtonsLine from '.';

// set mock data
const state = { status: false };
const onClick = () => {
  state.status = true;
};
const data = {
  buttons: [
    <Button onClick={onClick} title='PRIMARY' />,
    <Button secondary onClick={onClick} title='SECONDARY' />,
  ],
};
const component = <ButtonsLine {...data} />;

// testing
describe('<Button /> test', () => {
  it('renders the children correctly', () => {
    const { getByTestId } = render(component);
    const renderedPrimary = getByTestId('button__primary');
    const renderedSecondary = getByTestId('button__secondary');
    expect(renderedPrimary.textContent).toEqual('PRIMARY');
    expect(renderedSecondary.textContent).toEqual('SECONDARY');
  });
  it('works the action', () => {
    const { getByTestId } = render(component);
    const renderedComponent = getByTestId('button__primary');
    fireEvent.click(renderedComponent);
    expect(state.status).toBeTruthy;
  });
});
