import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Test the pokedex page', () => {
  const pikachu = 'Pikachu sprite';
  test('Test if we can find the text "Encountered pokémons" in the page', () => {
    renderWithRouter(<App />);

    const pokedexText = screen.getByRole(
      'heading', { name: /Encountered pokémons/i, level: 2 },
    );
    expect(pokedexText).toBeInTheDocument();
  });
  test('Test the next pokemon button', () => {
    renderWithRouter(<App />);
    const nextPokemonButton = screen.getByTestId(/next-pokemon/i);
    expect(nextPokemonButton).toHaveTextContent(/Próximo pokémon/i);
    expect(nextPokemonButton).toBeInTheDocument();
    const pokedexImg = screen.getByRole('img');
    expect(pokedexImg).toHaveAttribute('alt', pikachu);
    userEvent.click(nextPokemonButton);
    expect(pokedexImg).toHaveAttribute('alt', 'Charmander sprite');
    userEvent.click(nextPokemonButton);
    userEvent.click(nextPokemonButton);
    userEvent.click(nextPokemonButton);
    userEvent.click(nextPokemonButton);
    userEvent.click(nextPokemonButton);
    userEvent.click(nextPokemonButton);
    userEvent.click(nextPokemonButton);
    userEvent.click(nextPokemonButton);
    expect(pokedexImg).toHaveAttribute('alt', pikachu);
  });
  test('Test the type filter Button', () => {
    renderWithRouter(<App />);
    const typeElectricButton = screen.getByRole('button', { name: /Electric/i });
    expect(typeElectricButton).toHaveAttribute('data-testid', 'pokemon-type-button');
    userEvent.click(typeElectricButton);
    const pokedexImg = screen.getByRole('img');
    expect(pokedexImg).toHaveAttribute('alt', pikachu);
    expect(pokedexImg).toBeInTheDocument();
    userEvent.click(typeElectricButton);
    expect(pokedexImg).toHaveAttribute('alt', pikachu);
    expect(pokedexImg).toBeInTheDocument();
  });
  test('Test the all filter Button', () => {
    renderWithRouter(<App />);
    const allButton = screen.getByRole('button', { name: /All/i });
    const pokedexImg = screen.getByRole('img');
    const nextPokemonButton = screen.getByTestId(/next-pokemon/i);
    expect(nextPokemonButton).toHaveTextContent(/Próximo pokémon/i);
    expect(nextPokemonButton).toBeInTheDocument();
    userEvent.click(allButton);
    expect(pokedexImg).toHaveAttribute('alt', pikachu);
    userEvent.click(nextPokemonButton);
    expect(pokedexImg).toHaveAttribute('alt', 'Charmander sprite');
  });
});
