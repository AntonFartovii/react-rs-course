import React from 'react';
import Cards from '../components/Cards';
import { cardData } from '../data/data';

export interface IPageProps {
  showPageName?: (name: string) => void;
}

export default class MainPage extends React.Component<IPageProps> {
  name: string;

  constructor(props: IPageProps) {
    super(props);
    this.name = 'Главная страница';
    this.showTest = this.showTest.bind(this);
  }

  showTest() {
    this.props.showPageName && this.props.showPageName(this.name);
  }

  componentDidMount(): void {
    this.showTest();
  }

  render() {
    return (
      <>
        <h1>Main page</h1>
        <Cards cards={cardData} />
      </>
    );
  }
}
