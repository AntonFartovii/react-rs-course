import React, {Component} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {IRoute, routesAll} from "../routes";
import { ABOUT_US, FORM_ROUTE, MAIN_ROUTE, PAGE_404 } from '../constants/pages';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import FormPage from '../pages/FormPage';

interface IRouterProps {
  showPageName?: (name: string) => void
}

interface IRouterState {

}

export default class AppRouter extends Component<IRouterProps, IRouterState> {

    constructor(props: IRouterProps) {
      super(props);
    }

    renderRoute(route: IRoute) {
      const Component: React.ReactElement = route.Component
      // Component.props.showPageName = this.props.showPageName
      return <Route key={route.path} path={route.path} element={Component}/>
    }

    render() {
        return (
                <Routes>
                  <Route key={MAIN_ROUTE} path={MAIN_ROUTE} element={<MainPage showPageName={this.props.showPageName}/>}/>
                  <Route key={ABOUT_US}   path={ABOUT_US} element={<AboutPage showPageName={this.props.showPageName}/>}/>
                  <Route key={PAGE_404}   path="*" element={<Navigate to={PAGE_404}/>}/>
                </Routes>

        );
    }
};

