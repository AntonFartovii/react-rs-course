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
import Content from '../common/Content';
import Header from '../common/Header';
import { Search } from '../components/Search';

describe('App', () => {

  test('renders an input element', () => {
    render(<Search onFilterChange={() => {}} />);
    const input = screen.getByRole('text')
    // expect(screen.getByLabelText<HTMLInputElement>('my_search').value).toBe('');
  });

  test('App', async () => {
    render(<App/>)
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  test('navigates to 404 page when route is not found', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <AppRouter />
      </MemoryRouter>
    );

    expect(screen.getByText('Error 404!')).toBeInTheDocument();
  });

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

  test('renders content children', () => {
    const text = 'Hello, World!';
    const {getByText} = render(<Content>{text}</Content>);
    expect(getByText(text)).toBeInTheDocument();
  });


})
