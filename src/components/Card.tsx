import React from 'react';
import { ICard } from '../data/data';

interface ICardProps {
  card: ICard;
}

export default class Card extends React.Component<ICardProps> {
  render() {
    const card = this.props.card;

    return (
      <div key={card.id} id={`card_${card.id}`} className="card" data-testid={`card_${card.id}`}>
        <img src={card.imagePath} alt={card.title} className="card-image" />
        <div className="card-body">
          <h2 className="card-title">{card.title}</h2>
          <p className="card-description">{card.description}</p>
          <p className="card-price">
            {card.price ?? ''} {card.currency ?? ''}
          </p>
        </div>
      </div>
    );
  }
}
