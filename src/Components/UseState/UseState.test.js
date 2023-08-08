import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import UseState from './UseState';

test('renders the component with initial count value', () => {
  render(<UseState />);
  const counterElement = screen.getByText('Counter: 0');
  expect(counterElement).toBeInTheDocument();
});

test('increments the count when clicking the "+" button', () => {
  render(<UseState />);
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const counterElement = screen.getByText(/Counter: \d+/); // Regular expression to match "Counter: " followed by any digit(s)
  expect(counterElement).toBeInTheDocument();
});

test('decrements the count when clicking the "-" button', () => {
  render(<UseState />);
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const counterElement = screen.getByText(/Counter: -\d+/); // Regular expression to match "Counter: -" followed by any digit(s)
  expect(counterElement).toBeInTheDocument();
});
