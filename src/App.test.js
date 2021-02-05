import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  // test to see if loading page is seen first
  const linkElement = screen.getByText(/Loading Page .../i);
  expect(linkElement).toBeInTheDocument();
});
