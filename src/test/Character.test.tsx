import React from 'react';
import { describe, test, vi } from 'vitest';
import { renderWithProviders } from './test-utils';
import Character from '../components/Character';
import { ICharacter } from '../models/ICharacter';

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
  });
});
