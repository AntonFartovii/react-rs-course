import React from 'react';
import { ICard } from '../data/data';

interface ICardProps {
  card: ICard;
}

const Card = ({ card }: ICardProps) => {
  return (
    <div key={card.id} id={`card_${card.id}`} className="card" data-testid={`card_${card.id}`}>
      <img src={card.imagePath} alt={card.title} className="card-image" />
      <div className="card-body">
        <h2 className="card-title">{card.title}</h2>
        <p className="card-description">{card.description}</p>
        <p className="card-date">
          {card.date && `Date produce: ${card.date}`}
        </p>
        <p className="card-price">
          {card.price && `Price: ${card.price}`} {card.currency ?? ''}
        </p>
        <p className="card-state">{card.state && `State: ${card.state}`}</p>
      </div>
    </div>
  );
};

export default Card;
