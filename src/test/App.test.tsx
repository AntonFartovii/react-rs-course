import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import Page404 from '../pages/Page404';
import AppRouter from '../components/AppRouter';
import Cards from '../components/Cards';
import { cardData } from '../data/data';
import Content from '../common/Content';
import Card from '../components/Card';
import { STATE_GOOD } from '../constants/pages';
import { renderWithProviders } from './test-utils';

describe('App', () => {
  const data = cardData;

  const card = {
    id: '1',
    imagePath: 'path/to/image',
    title: 'Card Title',
    description: 'Card description',
    price: 10,
    currency: 'USD',
    state: STATE_GOOD[0],
  };

  test('renders an input element', async () => {
    renderWithProviders(<Cards cards={data} />);
  });

  test('should display all card properties', async () => {
    const { getByText, getByAltText } = render(<Card card={card} />);
    expect(getByAltText(card.title)).toBeInTheDocument();
    expect(getByText(card.title)).toBeInTheDocument();
    expect(getByText(card.description)).toBeInTheDocument();
    expect(getByText(`Price: ${card.price} ${card.currency}`)).toBeInTheDocument();
    expect(getByText(`State: ${card.state}`));
  });

  test('Cards', async () => {
    renderWithProviders(<Cards cards={data} />);
    const cards = document.querySelectorAll('.card');
    expect(cards.length).toBe(data.length);
  });

  test('About page h1', () => {
    renderWithProviders(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    );
    expect(screen.getByText(/About us/i)).toBeTruthy();
  });

  test('Error 404 page h1', () => {
    renderWithProviders(
      <BrowserRouter>
        <Page404 />
      </BrowserRouter>
    );
    expect(screen.getByText(/Error 404!/i)).toBeTruthy();
  });

  test('navigates to 404 page when route is not found', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/unknown']}>
        <AppRouter />
      </MemoryRouter>
    );
    expect(screen.getByText('Error 404!')).toBeInTheDocument();
  });

  test('renders content children', () => {
    const text = 'Hello, World!';
    const { getByText } = render(<Content>{text}</Content>);
    expect(getByText(text)).toBeInTheDocument();
  });
});
