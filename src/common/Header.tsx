import React from 'react';
import NavBar from '../components/NavBar';

interface IHeaderProps {
  currentPage?: string;
}

const Header = ({ currentPage }: IHeaderProps) => {
  return (
    <header>
      <div>{currentPage && currentPage}</div>
      <NavBar />
    </header>
  );
};

export default Header;
