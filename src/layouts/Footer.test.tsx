import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Counter component', () => {
  test('renders the initial count', () => {
    render(<Footer />);
    const countElement = screen.getByText('Kobe Brants');
    expect(countElement).toBeTruthy();
  });
});
