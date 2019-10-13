import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Loading from '.';

// testing
describe('<Loading /> test', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Loading />);
    const rendered = getByTestId('loading');
    expect(rendered).toBeTruthy;
  });
  it('renders all elements', () => {
    const { getByTestId } = render(<Loading />);
    const renderedOuter = getByTestId('loading-outer');
    const renderedMiddle = getByTestId('loading-middle');
    const renderedInner = getByTestId('loading-inner');
    expect(renderedOuter).toBeTruthy;
    expect(renderedMiddle).toBeTruthy;
    expect(renderedInner).toBeTruthy;
  });
});
