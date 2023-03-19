import React from 'react';
import { describe, expect, test, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import Page404 from '../pages/Page404';
import AppRouter from '../components/AppRouter';
import Cards from '../components/Cards';
import { cardData } from '../data/data';

describe('App', () => {

  test('', async () => {
    const data = cardData
    const container = render(<Cards cards={data}/>)
    const cards = document.querySelectorAll('.card')
    expect(cards.length).toBe(data.length)
  });

  test('Main page title', async () => {
    render(<MainPage/>);
    // expect(screen.getByText(/Main page/i)).toBeDefined()
    expect(screen.getByText(/Main page/i)).toBeInTheDocument()
  });

  test('About page title', async () => {
    render(<AboutPage/>);
    expect(screen.getByText(/About us/i)).toBeDefined()
  });

  test('Main page h1', () => {
    render(
      <BrowserRouter>
        <MainPage/>
      </BrowserRouter>
    )
    expect(screen.getByText(/Main page/i)).toBeTruthy()
  });

  test('About page h1', () => {
    render(
      <BrowserRouter>
        <AboutPage/>
      </BrowserRouter>
    )
    expect(screen.getByText(/About us/i)).toBeTruthy()
  });

  test('Error 404 page h1', () => {
    render(
      <BrowserRouter>
        <Page404/>
      </BrowserRouter>
    )
    expect(screen.getByText(/Error 404!/i)).toBeTruthy()
  });

  test('Page not found', async () => {
    render (
      <MemoryRouter initialEntries={['/page-not-found']}>
        <AppRouter/>
      </MemoryRouter>
    )
    // expect(screen.findByText(/Error 404!/i)).toBeVisible();

    // screen.debug()
    expect(
      screen.findByRole('heading', {
        level: 1
      })
    )
    // expect(screen.getByText(/Error 404!/i)).toBeTruthy()

  });
})
