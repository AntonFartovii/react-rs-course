import React, { useEffect, useState } from 'react';
import FormCard from '../components/Form';
import Cards from '../components/Cards';
import { ICard } from '../data/data';
import { IPageProps } from './MainPage';


const FormPage = ({showPageName}: IPageProps) => {
  const name: string = 'Form page'

  useEffect(()=> {
    showPageName && showPageName( name )
  },[])

  const [cards, setCards]: [ICard[], any] = useState([])
  const [message, setMessage]: [string, any] = useState('')

  const handleCardAdd = (card: ICard) => {
    setCards([...cards, card]);
    setTimeout(() => {
      setMessage( 'Вы успешно добавили товар' )
    }, 2000);
  };

  return (
    <>
      <FormCard onSubmitCard={handleCardAdd} />
      <div className="validation">{message}</div>
      <Cards cards={cards} />
    </>
  )
}

export default FormPage
