import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Test the Pokemon Component', () => {
  test('Test the Pokemon Card', () => {
    const { history } = renderWithRouter(<App />);
    const pokemonName = screen.getByTestId(/pokemon-name/i);
    const pokemonType = screen.getByTestId('pokemon-type');
    const pokemonWeight = screen.getByTestId(/pokemon-weight/i);
    expect(pokemonName).toHaveTextContent('Pikachu');
    expect(pokemonType).toHaveTextContent('Electric');
    expect(pokemonWeight).toHaveTextContent('Average weight: 6.0 kg');
    const pokedexImg = screen.getByRole('img');
    expect(pokedexImg).toHaveAttribute('alt', 'Pikachu sprite');
    expect(pokedexImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    const nextPokemonButton = screen.getByTestId(/next-pokemon/i);
    expect(nextPokemonButton).toHaveTextContent(/Próximo pokémon/i);
    expect(nextPokemonButton).toBeInTheDocument();
    const detailsLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(nextPokemonButton);
    expect(pokemonName).toHaveTextContent('Charmander');
    expect(pokemonType).toHaveTextContent('Fire');
    expect(pokemonWeight).toHaveTextContent('Average weight: 8.5 kg');
    expect(pokedexImg).toHaveAttribute('alt', 'Charmander sprite');
    expect(pokedexImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png');
    userEvent.click(detailsLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/4');
    const favoriteSelection = screen.getByText('Pokémon favoritado?');
    userEvent.click(favoriteSelection);
    const favoriteStarMark = screen.getByAltText('Charmander is marked as favorite');
    expect(favoriteStarMark).toHaveAttribute('src', '/star-icon.svg');
  });
});
