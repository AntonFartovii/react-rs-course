import React from 'react';
import { IRoute, routesPages } from '../routes';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const showClassName = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? 'header-link active' : 'header-link';
  };

  return (
    <div className="header-menu">
      {routesPages.map((route: IRoute) => (
        <NavLink key={route.name} to={route.path} className={showClassName} end>
          {route.name}
        </NavLink>
      ))}
    </div>
  );
};

export default NavBar;
