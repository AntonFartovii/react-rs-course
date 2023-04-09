import React from 'react';
import { IFilm } from '../API/MainApi';

interface ICardProps {
  card: IFilm;
}

const Film = ({ card }: ICardProps) => {
  return (
    <div key={card.id} id={`card_${card.id}`} className="card" data-testid={`card_${card.id}`}>
      <img src={card.image} alt={card.firstEpisode} className="card-image" />
      <div className="card-body">
        <h2 className="card-title">{card.firstEpisode}</h2>
        <p className="card-description">{card.occupation}</p>
        <p className="card-price">{card.wikiUrl && <a href={card.wikiUrl}>Wiki</a>}</p>
        <p className="card-state">{card.voicedBy && `State: ${card.voicedBy}`}</p>
      </div>
    </div>
  );
};

export default Film;
