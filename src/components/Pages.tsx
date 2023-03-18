import React, { ReactNode } from 'react';
import Header from '../common/Header';
import Content from '../common/Content';
import AppRouter from './AppRouter';
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
      namePage: ''
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
          </Content>
      </>
    );
  }
};
