import React, { useEffect, useState } from 'react';
import { ICard } from '../data/data';
import Search  from './Search';
import Card from './Card';

const Cards = ({cards}: {cards: ICard[]}) => {
  const [filterText, setFilterText] = useState('')

  const handleFilterChange = (filterText: string) => {
    setFilterText( filterText )
  };

  useEffect(() => {
    const filterText = localStorage.getItem('inputValue');
    filterText && setFilterText( filterText )
  }, [])


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
        <Search onFilterChange={handleFilterChange} />

        <div className="card-container" key="1c">
          {filteredCards.map((card: ICard) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </>
    );
}

export default Cards
