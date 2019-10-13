import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '.';

// set mock data
const state = { status: false };
const onClick = () => {
  state.status = true;
};
const data = 'TESTING_BUTTON';
const component = <Button onClick={onClick} title={data} />;

// testing
describe('<Button /> test', () => {
  it('renders the children correctly', () => {
    const { getByTestId } = render(component);
    const renderedComponent = getByTestId('button__primary');
    expect(renderedComponent.textContent).toEqual(data);
  });
  it('works the action', () => {
    const { getByTestId } = render(component);
    const renderedComponent = getByTestId('button__primary');
    fireEvent.click(renderedComponent);
    expect(state.status).toBeTruthy;
  });
});
