import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the UseEffect component within the App component', async () => {
  render(<App />);
  const useSateComponent = await screen.findByTestId('use-state-component');
  expect(useSateComponent).toBeInTheDocument();
});
