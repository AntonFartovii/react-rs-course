import React, { useEffect, useState } from 'react';
import FormCard from '../components/Form';
import Cards from '../components/Cards';
import { ICard } from '../data/data';
import { IPageProps } from './MainPage';

const FormPage = ({ showPageName }: IPageProps) => {
  const name = 'Form page';

  useEffect(() => {
    showPageName && showPageName(name);
  }, [showPageName]);

  const [cards, setCards] = useState<ICard[]>([]);
  const [message, setMessage] = useState<string>('');

  const handleCardAdd = async (card: ICard) => {
    await setCards([...cards, card]);
    await setMessage('Вы успешно добавили товар');
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  return (
    <>
      <FormCard onSubmitCard={handleCardAdd} />
      <div className="validation">{message}</div>
      <Cards cards={cards} />
    </>
  );
};

export default FormPage;
