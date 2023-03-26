import React from 'react';
import FormCard from '../components/Form';
import Cards from '../components/Cards';
import { ICard } from '../data/data';
import { IPageProps } from './MainPage';

interface IFormPageState {
  cards: ICard[];
  message: string;
}

export default class FormPage extends React.Component<IPageProps, IFormPageState> {
  name: string;

  constructor(props: IPageProps) {
    super(props);
    this.name = 'Form page';
    this.showTest = this.showTest.bind(this);
    this.state = {
      cards: [],
      message: '',
    };
  }

  showTest() {
    this.props.showPageName && this.props.showPageName(this.name);
  }

  componentDidMount(): void {
    this.showTest();
  }

  handleCardAdd = (card: ICard) => {
    this.setState({
      cards: [...this.state.cards, card],
      message: 'Вы успешно добавили товар',
    });
    setTimeout(() => {
      this.setState({
        ...this.state,
        message: '',
      });
    }, 2000);
  };

  render() {
    return (
      <>
        <FormCard onSubmitCard={this.handleCardAdd} />
        <div className="validation">{this.state.message}</div>
        <Cards cards={this.state.cards} />
      </>
    );
  }
}
