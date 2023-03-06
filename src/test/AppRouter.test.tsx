import React from 'react';
import { render, screen } from '@testing-library/react';
import App from "../App";

test('renders App component', () => {
    render(<App />);
    expect(true).toBe(true);
});

test('it renders', () => {
    render(<App />);
});
