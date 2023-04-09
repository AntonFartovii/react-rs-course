import React from 'react';
import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormPage from '../pages/FormPage';
import FormCard from '../components/Form';

describe('Form', async () => {
  test('Form render', async () => {
    render(<FormPage />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  test('submit form', async () => {
    const mockOnSubmitCard = vi.fn();
    mockOnSubmitCard.mockClear();

    render(<FormCard onSubmitCard={mockOnSubmitCard} />, {
      container: document.body,
    });
  });
});
