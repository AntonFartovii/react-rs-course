import React, { useEffect } from 'react';
import Cards from '../components/Cards';
import { cardData } from '../data/data';

export interface IPageProps {
  showPageName?: (name: string) => void;
}

const MainPage = ({ showPageName }: IPageProps): JSX.Element => {
  const name = 'Main page';

  useEffect(() => {
    showPageName && showPageName(name);
  }, [showPageName]);

  return <Cards cards={cardData} />;
};

export default MainPage;
