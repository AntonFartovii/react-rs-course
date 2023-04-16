import React, { useState } from 'react';
import { IСharacter } from '../API/MainApi';
import Film from './Film';
import MyModal from './UI/myModal';

const Films = ({ items }: { items: IСharacter[] }) => {
  const [modal, setModal] = useState<boolean>(false);
  const [content, setContent] = useState<JSX.Element>();

  function handleModal(content: JSX.Element) {
    setModal(true);
    setContent(content);
  }

  return (
    <div className="card-container" key="1c">
      {items.map((card: IСharacter) => (
        <Film key={card.id} card={card} openModal={handleModal} />
      ))}
      <MyModal visible={modal} setVisible={setModal}>
        <>{content}</>
      </MyModal>
    </div>
  );
};

export default Films;
