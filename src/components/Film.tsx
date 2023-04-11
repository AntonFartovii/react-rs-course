import React from 'react';
import { IFilm } from '../API/MainApi';

interface ICardProps {
  card: IFilm;
  openModal: (content: JSX.Element) => void;
}

const Film = ({ card, openModal }: ICardProps) => {
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
      <img src={card.image} alt={card.firstEpisode} className="card-image" />
      <div className="card-body">
        <h2 className="card-title">{card.firstEpisode}</h2>
        <p className="card-description">{card.occupation}</p>
        <p className="card-price">{card.wikiUrl && <a href={card.wikiUrl}>Wiki</a>}</p>
        <p className="card-state">{card.voicedBy && `State: ${card.voicedBy}`}</p>
      </div>
    </div>
  );

  return content;
};

export default Film;
