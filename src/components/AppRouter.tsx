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
                    {/*{*/}
                    {/*    routesAll.map( this.renderRoute )*/}
                    {/*}*/}
                    {/*<Route path="*" element={<Navigate to={PAGE_404}/>} />*/}
                  <Route path={MAIN_ROUTE} element={<MainPage showPageName={this.props.showPageName}/>}/>
                  <Route path={FORM_ROUTE} element={<FormPage showPageName={this.props.showPageName}/>}/>
                  <Route path={ABOUT_US} element={<AboutPage showPageName={this.props.showPageName}/>}/>
                  <Route path="*" element={<Navigate to={PAGE_404}/>} />
                </Routes>

        );
    }
};

