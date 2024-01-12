import React from 'react';
import { describe, expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './test-utils';
import Search from '../components/Search';
import { setupStore } from '../store/store';
import userEvent from '@testing-library/user-event';

describe('Search', async () => {
  const mockOnFilterChange = vi.fn();
  const testValue = 'test';

  beforeEach(() => {
    mockOnFilterChange.mockClear();
  });

  test('Search render', async () => {
    renderWithProviders(<Search onFilterChange={mockOnFilterChange} />);
    await expect(screen.findByText(/Поиск/i)).toBeDefined();
  });

  test('get Redux store value', async () => {
    renderWithProviders(<Search onFilterChange={mockOnFilterChange} />, {
      preloadedState: {
        searchReducer: {
          searchTitle: testValue,
        },
      },
    });
    const searchInput = screen.getByPlaceholderText<HTMLInputElement>(
      'Searching by character name...'
    );
    expect(searchInput.value).toBe(testValue);
  });

  test('set Redux store value', async () => {
    const store = setupStore();
    renderWithProviders(<Search onFilterChange={mockOnFilterChange} />, { store });
    const searchInput = screen.getByPlaceholderText<HTMLInputElement>(
      'Searching by character name...'
    );
    await userEvent.type(searchInput, testValue);
    await userEvent.type(searchInput, '{enter}');
    expect(store.getState().searchReducer.searchTitle).toBe(testValue);
  });

  test('handleChange test', async () => {
    renderWithProviders(<Search onFilterChange={mockOnFilterChange} />);
    const searchInput = screen.getByPlaceholderText<HTMLInputElement>(
      'Searching by character name...'
    );
    await userEvent.type(searchInput, testValue);
    expect(searchInput.value).toBe(testValue);
  });
});
