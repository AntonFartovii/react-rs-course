import React from 'react';
import { IFilm } from '../API/MainApi';
import Film from './Film';

const Films = ({ items }: { items: IFilm[] }) => {
  return (
    <div className="card-container" key="1c">
      {items.map((card: IFilm) => (
        <Film key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Films;
