import React from 'react';
import { render, screen } from '@testing-library/react';

function Placeholder() {
  return <div>Portfolio</div>;
}

test('renders portfolio placeholder', () => {
  render(<Placeholder />);
  expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();
});
