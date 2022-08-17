import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Test the Favorite Pokemons page', () => {
  test('Test the page when are no favorite pokemons', () => {
    renderWithRouter(<FavoritePokemons />);
    const noFavorite = screen.getByText(/No favorite pokemon found/i);
    expect(noFavorite).toBeInTheDocument();
  });
});
