import React from 'react';
import { ICard } from '../data/data';
import { Search } from './Search';
import Card from './Card';

interface ICardsState {
  filterText: string;
}

interface ICardsProps {
  cards: ICard[];
}

export default class Cards extends React.Component<ICardsProps, ICardsState> {
  constructor(props: ICardsProps) {
    super(props);
    this.state = {
      filterText: '',
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange = (filterText: string) => {
    this.setState({ filterText });
  };

  componentDidMount(): void {
    const filterText = localStorage.getItem('inputValue');
    filterText && this.setState({ filterText });
  }

  render() {
    const cards = this.props.cards;
    const { filterText } = this.state;

    let filteredCards = cards;
    if (filterText.length > 0) {
      filteredCards = cards.filter(
        (card: ICard) =>
          card.title.toLowerCase().includes(filterText.toLowerCase()) ||
          card.description?.toLowerCase().includes(filterText.toLowerCase())
      );
    }

    return (
      <>
        <Search onFilterChange={this.handleFilterChange} />

        <div className="card-container" key="1c">
          {filteredCards.map((card: ICard) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </>
    );
  }
}
