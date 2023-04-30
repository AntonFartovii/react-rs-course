import React from 'react';
import { describe, expect, test, vi } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormCard from '../components/Form';
import { renderWithProviders } from './test-utils';
import FormPage from '../pages/FormPage';

describe('FormCard', () => {
  const mockOnSubmitCard = vi.fn();
  const mockOnShowTitle = vi.fn();
  const user = userEvent.setup();

  beforeEach(() => {
    mockOnSubmitCard.mockClear();
    mockOnShowTitle.mockClear();
  });

  const renderFormCard = () => renderWithProviders(<FormCard />);

  const submitFormCard = async () => {
    fireEvent.submit(screen.getByTestId('form'));
    await screen.findByTestId('form');
  };

  test('overwrite the text field', async () => {
    renderFormCard();

    const input = screen.getByTestId('title');
    await user.tripleClick(input);
    await user.keyboard('bar');

    expect(input).toHaveValue('bar');
  });

  test('input title after submit form', async () => {
    renderFormCard();
    const input = screen.getByTestId('title');
    await user.tripleClick(input);
    await user.keyboard('bar');
    await submitFormCard();
    expect(input).not.toHaveValue('');
  });

  test('should not be error message of condition', async () => {
    renderFormCard();
    await userEvent.click(screen.getByLabelText(/condition/i));
    await submitFormCard();
    await expect(screen.findByText(/You must agree/i)).toBeDefined();
  });

  test('render Form page', async () => {
    renderWithProviders(<FormPage showPageName={mockOnShowTitle} />);
    await expect(screen.findByText(/Form page/i)).toBeDefined();
  });
});
