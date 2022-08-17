import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Test the not found page', () => {
  test('Test the not found text', () => {
    renderWithRouter(<NotFound />);
    const notFoundText = screen.getByRole(
      'heading', { name: /Page requested not found/i, level: 2 },
    );
    expect(notFoundText).toBeInTheDocument();
  });
  test('Test the not found image', () => {
    renderWithRouter(<NotFound />);
    const notFoundImg = screen.getByAltText(
      /Pikachu crying because the page requested was not found/i,
    );
    expect(notFoundImg).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
    expect(notFoundImg).toBeInTheDocument();
  });
});
