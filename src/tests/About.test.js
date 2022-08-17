import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('Test the About Page', () => {
  test('Test the Pokedex information title', () => {
    renderWithRouter(<About />);
    const pokedexAboutTilte = screen.getByRole(
      'heading', { name: /About Pokédex/i, level: 2 },
    );
    expect(pokedexAboutTilte).toBeInTheDocument();
  });
  test('Test the Pokedex information', () => {
    renderWithRouter(<About />);
    const pokedexParagraph1 = screen.getByText(/This application/i);
    const pokedexParagraph2 = screen.getByText(/One can filter Pokémons/i);
    expect(pokedexParagraph1).toBeInTheDocument();
    expect(pokedexParagraph2).toBeInTheDocument();
  });
  test('Test the Pokedex image', () => {
    renderWithRouter(<About />);
    const pokedexImg = screen.getByRole('img');
    expect(pokedexImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    expect(pokedexImg).toBeInTheDocument();
  });
});
