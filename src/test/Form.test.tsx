import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormPage from '../pages/FormPage';

describe('Form', () => {
  test('Add card', () => {
    render(<FormPage />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
});
