import React, { useEffect, useState } from 'react';
import { fetchFilms, IFilm } from '../API/MainApi';
import Films from '../components/Films';
import Search from '../components/Search';

export interface IPageProps {
  showPageName?: (name: string) => void;
}

interface IFilter {
  hairColor?: string;
  limit?: number;
}

const MainPage = ({ showPageName }: IPageProps): JSX.Element => {
  const name = 'Main page';
  const [films, setFilms] = useState<IFilm[]>([]);
  const [filterText, setFilterText] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const filter: IFilter = { limit: 15 };
    if (filterText) filter.hairColor = filterText;
    fetchFilms(filter).then((data) => setFilms(data));
    setIsLoading(false);
  }, [filterText]);

  useEffect(() => {
    const filterText = localStorage.getItem('inputValue');
    filterText && setFilterText(filterText);
  }, []);

  const handleFilterChange = (filterText: string) => {
    setFilterText(filterText);
  };

  const filteredFilms = films;

  useEffect(() => {
    showPageName && showPageName(name);
  }, [showPageName]);

  return (
    <>
      <Search onFilterChange={handleFilterChange} />
      {isLoading ? <span className="loader"></span> : <Films items={filteredFilms} />}
    </>
  );
};

export default MainPage;
