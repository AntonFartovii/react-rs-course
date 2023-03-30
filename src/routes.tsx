import React, { ReactElement } from 'react';
import { ABOUT_US, FORM_ROUTE, MAIN_ROUTE } from './constants/pages';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import FormPage from './pages/FormPage';

export interface IRoute {
  name: string;
  path: string;
  Component: (props: {showPageName?: (name: string) => void}) => JSX.Element;
}

export const routesPages: IRoute[] = [
  {
    name: 'Main page',
    path: MAIN_ROUTE,
    Component: ({showPageName}) => <MainPage showPageName={showPageName}/>,
  },
  {
    name: 'About us',
    path: ABOUT_US,
    // Component: <AboutPage />,
    Component: ({showPageName}) => <AboutPage showPageName={showPageName}/>,
  },
  {
    name: 'Form page',
    path: FORM_ROUTE,
    // Component: <FormPage />,
    Component: ({showPageName}) => <FormPage showPageName={showPageName}/>,
  },
];
