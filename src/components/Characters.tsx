import React, { useState } from 'react';
import Character from './Character';
import MyModal from './UI/myModal';
import { ICharacter } from '../models/ICharacter';

const Characters = ({ items }: { items: ICharacter[] }) => {
  const [modal, setModal] = useState<boolean>(false);
  const [content, setContent] = useState<JSX.Element>();

  function handleModal(content: JSX.Element) {
    setModal(true);
    setContent(content);
  }

  return (
    <div className="card-container" key="1c">
      {items.map((card: ICharacter) => (
        <Character key={card.id} card={card} openModal={handleModal} />
      ))}
      <MyModal visible={modal} setVisible={setModal}>
        <>{content}</>
      </MyModal>
    </div>
  );
};

export default Characters;
