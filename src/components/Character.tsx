import React from 'react';
import { ICharacter } from '../models/ICharacter';

interface ICardProps {
  card: ICharacter;
  openModal: (content: JSX.Element) => void;
}

const Character = ({ card, openModal }: ICardProps) => {
  function handleClick() {
    openModal(content);
  }
  const content = (
    <div
      onClick={handleClick}
      key={card.id}
      id={`card_${card.id}`}
      className="card"
      data-testid={`card_${card.id}`}
    >
      <img src={card.image && card.image} alt={card.name && card.name} className="card-image" />
      <div className="card-body">
        <h2 className="card-name">{card.name &&card.name}</h2>
        <h3 className="card-status">{card.status && card.status}</h3>
        <p className="card-species">{card.species && card.species}</p>
        <h5 className="card-gender">{card.gender && card.gender}</h5>
        <p className="card-location">
          <a href={card.location.url && card.location.url} target="_blank">
            {card.location.name && card.location.name}
          </a>
        </p>
        <p className="card-origin">
          <a href={card.origin.url && card.origin.url} target="_blank">
            {card.origin.name && card.origin.name}
          </a>
        </p>
        <p className="card-created">
            {card.created && card.created}
        </p>
      </div>
    </div>
  );

  return content;
};

export default Character;
