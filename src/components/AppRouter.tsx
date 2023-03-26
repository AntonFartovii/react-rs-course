import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ABOUT_US, FORM_ROUTE, MAIN_ROUTE, PAGE_404 } from '../constants/pages';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import Page404 from '../pages/Page404';
import FormPage from '../pages/FormPage';

interface IRouterProps {
  showPageName?: (name: string) => void;
}

export default class AppRouter extends Component<IRouterProps> {
  constructor(props: IRouterProps) {
    super(props);
  }

  render() {
    return (
      <Routes>
        <Route
          path={MAIN_ROUTE}
          element={<MainPage showPageName={this.props.showPageName} />}
        ></Route>
        <Route
          path={FORM_ROUTE}
          element={<FormPage showPageName={this.props.showPageName} />}
        ></Route>
        <Route
          path={ABOUT_US}
          element={<AboutPage showPageName={this.props.showPageName} />}
        ></Route>
        <Route path="/404" element={<Page404 showPageName={this.props.showPageName} />}></Route>

        <Route path="*" element={<Navigate to={PAGE_404} />}></Route>
      </Routes>
    );
  }
}
