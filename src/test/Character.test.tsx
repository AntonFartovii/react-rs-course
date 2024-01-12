import React from 'react';
import { describe, expect, test, vi } from 'vitest';
import { renderWithProviders } from './test-utils';
import Character from '../components/Character';
import { ICharacter } from '../models/ICharacter';
import Characters from '../components/Characters';
import { screen } from '@testing-library/react';

describe('Character test', () => {
  const mockOnOpenModal = vi.fn();

  const card: ICharacter = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  };

  beforeEach(() => {
    mockOnOpenModal.mockClear();
  });

  test('render Character component', async () => {
    renderWithProviders(<Character card={card} openModal={mockOnOpenModal} />);
    await expect(screen.findByDisplayValue(/Rick Sanchez/i)).toBeDefined();
  });

  test('preloader', async () => {
    renderWithProviders(<Character card={card} openModal={mockOnOpenModal} />);
    await expect(screen.findByDisplayValue(/Rick Sanchez/i)).toBeDefined();
  });

  test('render Character component', async () => {
    renderWithProviders(<Characters items={[card]} />);
    await expect(screen.findByTestId(/card-container/i)).toBeDefined();
  });

  test('should have a property "name"', () => {
    // Создаем экземпляр интерфейса
    const character: ICharacter = { name: 'John' };
    expect(character.name).toEqual('John');
    expect(card.name).toEqual('Rick Sanchez');
  });
});
