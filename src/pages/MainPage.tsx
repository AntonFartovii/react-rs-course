import React, { useEffect } from 'react';
import Cards from '../components/Cards';
import { cardData } from '../data/data';

export interface IPageProps {
  showPageName?: (name: string) => void;
}

const MainPage = ({showPageName}: IPageProps) => {
  const name: string = 'Main page';

  useEffect(()=> {
    showPageName && showPageName( name )
  },[])

  return (
    <Cards cards={cardData} />
    )
}

export default MainPage
