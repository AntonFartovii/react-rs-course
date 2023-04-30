import React from 'react';
import { ABOUT_US, FORM_ROUTE, MAIN_ROUTE, PAGE_404 } from './data/constants';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import FormPage from './pages/FormPage';
import Page404 from './pages/Page404';

export interface IRoute {
  name: string;
  path: string;
  Component: (props: { showPageName?: (name: string) => void }) => JSX.Element;
}

export const routesPages: IRoute[] = [
  {
    name: 'Main page',
    path: MAIN_ROUTE,
    Component: ({ showPageName }) => <MainPage showPageName={showPageName} />,
  },
  {
    name: 'About us',
    path: ABOUT_US,
    Component: ({ showPageName }) => <AboutPage showPageName={showPageName} />,
  },
  {
    name: 'Form page',
    path: FORM_ROUTE,
    Component: ({ showPageName }) => <FormPage showPageName={showPageName} />,
  },
];

export const routesAll: IRoute[] = [
  ...routesPages,
  {
    name: 'Page 404',
    path: PAGE_404,
    Component: ({ showPageName }) => <Page404 showPageName={showPageName} />,
  },
];
