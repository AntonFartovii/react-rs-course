import React, { useEffect } from 'react';
import { IPageProps } from './MainPage';

const Page404 = ({ showPageName }: IPageProps) => {
  const name = 'Page 404';

  useEffect(() => {
    showPageName && showPageName(name);
  }, [showPageName]);

  return <h1>Error 404!</h1>;
};

export default Page404;
