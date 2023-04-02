import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PAGE_404 } from '../constants/pages';
import { IRoute, routesAll } from '../routes';

interface IRouterProps {
  showPageName?: (name: string) => void;
}

const AppRouter = ({ showPageName }: IRouterProps) => {
  const renderRoutes = (route: IRoute) => {
    const Component = route.Component;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={<Component showPageName={showPageName} />}
      />
    );
  };

  return (
    <Routes>
      {routesAll.map(renderRoutes)}
      <Route path="*" element={<Navigate to={PAGE_404} />} />
    </Routes>
  );
};

export default AppRouter;
