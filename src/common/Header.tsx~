import React from 'react';
import NavBar from '../components/NavBar';

interface IHeaderProps {
  currentPage?: string;
}

export default class Header extends React.Component<IHeaderProps> {
  constructor(props: IHeaderProps) {
    super(props);
  }

  render() {
    return (
      <header>
        <div>{this.props.currentPage && 'Current page: ' + this.props.currentPage}</div>
        <NavBar />
      </header>
    );
  }
}
