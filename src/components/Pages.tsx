import React, { ReactNode } from 'react';
import {ICard} from "../data/data";
import Header from '../common/Header';
import Content from '../common/Content';
import AppRouter from './AppRouter';
import { Route, Routes } from 'react-router-dom';
import { ABOUT_US, MAIN_ROUTE } from '../constants/pages';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';

interface IPagesProps {
  children?: ReactNode
}

interface IPagesState {
  namePage: string
}

export default class Pages extends React.Component<IPagesProps, IPagesState> {
  constructor(props: IPagesProps) {
    super(props);
    this.state = {
      namePage: '' || 'State page'
    }
    this.handlePageNameChange = this.handlePageNameChange.bind(this);
  }

  handlePageNameChange(name: string) {
    this.setState({
      namePage: name
    });
  }

  render() {
    return (
      <>
          <Header currentPage={this.state.namePage}/>
          <Content>
            <AppRouter showPageName={this.handlePageNameChange}/>
            {/*<Routes>*/}
              {/*<Route path={MAIN_ROUTE} element={<MainPage showPageName={this.handlePageNameChange}/>}/>*/}
              {/*<Route path={ABOUT_US} element={<AboutPage showPageName={this.handlePageNameChange}/>}/>*/}
            {/*</Routes>*/}
          </Content>
      </>
    );
  }
};
