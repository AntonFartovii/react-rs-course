import React, { useEffect } from 'react';
import { IPageProps } from './MainPage';

const AboutPage = ({showPageName}: IPageProps) => {
  const name: string = 'About us';

  useEffect(() => {
    showPageName && showPageName( name )
  },[])

  return (
    <h1>About us</h1>
  )
}

export default AboutPage
