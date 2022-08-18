import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Test the PokemonDetails Page', () => {
  test('Test if the information shown is correct', () => {
    const { history } = renderWithRouter(<App />);
    const detailsLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(detailsLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
    const pokemonsDetailsTitle = screen.getByRole(
      'heading', { name: /pikachu details/i, level: 2 },
    );
    expect(pokemonsDetailsTitle).toBeInTheDocument();
    expect(detailsLink).not.toBeInTheDocument();
    const pokemonsDetailsSummary = screen.getByRole(
      'heading', { name: /Summary/i, level: 2 },
    );
    expect(pokemonsDetailsSummary).toBeInTheDocument();
    const pokemonSummaryText = screen.getByText(/This intelligent Pokémon roasts hard/g);
    expect(pokemonSummaryText).toBeInTheDocument();
    const pokemonsDetailsMap = screen.getByRole(
      'heading', { name: /Game Locations of Pikachu/i, level: 2 },
    );
    expect(pokemonsDetailsMap).toBeInTheDocument();
    const map = screen.getAllByAltText('Pikachu location');
    const map1 = map[0];
    const map2 = map[1];
    expect(map1).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(map2).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(map1).toBeInTheDocument();
    expect(map2).toBeInTheDocument();
    const favoritePokemon = screen.getByLabelText('Pokémon favoritado?');
    expect(favoritePokemon).toBeInTheDocument();
  });
});
