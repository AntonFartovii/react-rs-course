import React, { useState } from 'react';
import { IFilm } from '../API/MainApi';
import Film from './Film';
import MyModal from './UI/myModal';

const Films = ({ items }: { items: IFilm[] }) => {
  const [modal, setModal] = useState<boolean>(false)

  function handleModal() {
    setModal(true)
  }

  return (
    <div className="card-container" key="1c">
      {
        items.map( (card: IFilm) => (
        <Film key={card.id} card={card} openModal={handleModal}/>
      ))
      }
      <MyModal visible={modal} setVisible={setModal}>
        <button>zxczxcxcz</button>
      </MyModal>
    </div>
  );
};

export default Films;
