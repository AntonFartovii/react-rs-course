import React, {ReactElement} from "react";
import {
    ABOUT_US, FORM_ROUTE,
    MAIN_ROUTE,
    PAGE_404,
} from './constants/pages';
import MainPage from './pages/MainPage';
import AboutPage from "./pages/AboutPage";
import Page404 from "./pages/Page404";

export interface IRoute {
    name: string
    path: string
    Component: ReactElement
}

export const routesPages: IRoute[] = [
    {
        name: 'Main page',
        path: MAIN_ROUTE,
        Component: <MainPage/>,
    },
    {
        name: 'About us',
        path: ABOUT_US,
        Component: <AboutPage/>,
    }
]

export const routesAll: IRoute[] = [
    ...routesPages,
    {
        name: 'Page 404',
        path: PAGE_404,
        Component: <Page404/>
    }
]
