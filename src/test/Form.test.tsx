import React from 'react';
import { describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './test-utils';
import FormCard from '../components/Form';
import { IForm } from '../models/IForm';

describe('Form test', () => {
  test('render Form component', async () => {
    renderWithProviders(<FormCard />);
    await expect(screen.findByTestId(/form/i)).toBeDefined();
  });

  test('render Form button', async () => {
    renderWithProviders(<FormCard />);
    await expect(screen.findByLabelText(/Send/i)).toBeDefined();
  });

  test('message where card is added', async () => {
    renderWithProviders(<FormCard />, {
      preloadedState: {
        formReducer: {
          cards: [],
          message: true,
        },
      },
    });
    await expect(screen.findByText(/Card is added success/i)).toBeDefined();
  });

  test('should have a property "title"', () => {
    const form: IForm = { title: 'anycard' };
    expect(form.title).toEqual('anycard');
  });
});
