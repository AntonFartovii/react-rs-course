import React, { useEffect } from 'react';
import FormCard from '../components/Form';
import Cards from '../components/Cards';
import { IPageProps } from './MainPage';
import { useAppSelector } from '../hooks/redux';
import { RootState } from '../store/store';

const FormPage = ({ showPageName }: IPageProps) => {
  const name = 'Form page';

  useEffect(() => {
    showPageName && showPageName(name);
  }, [showPageName]);

  const { cards, message } = useAppSelector((state: RootState) => state.formReducer);

  return (
    <>
      <FormCard />
      {message && <div className="message-card">Card is added success</div>}
      <Cards cards={cards && cards} />
    </>
  );
};

export default FormPage;
