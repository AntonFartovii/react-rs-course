import React from 'react';
import { IPageProps } from './MainPage';

export default class AboutPage extends React.Component<IPageProps> {
  name: string;

  constructor(props: IPageProps) {
    super(props);
    this.name = 'About us';
    this.showTest = this.showTest.bind(this);
  }

  showTest() {
    this.props.showPageName && this.props.showPageName(this.name);
  }

  componentDidMount(): void {
    this.showTest();
  }

  render() {
    return <h1>About us</h1>;
  }
}
