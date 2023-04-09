import React, { useEffect, useState } from 'react';
import { fetchFilms, IFilm } from '../API/MainApi';
import { useFetching } from '../hooks/useFetching';
import Films from '../components/Films';
import Search from '../components/Search';

export interface IPageProps {
  showPageName?: (name: string) => void;
}

const MainPage = ({ showPageName }: IPageProps): JSX.Element => {
  const name = 'Main page';
  const [films, setFilms] = useState<IFilm[]>([]);
  const [filterText, setFilterText] = useState('');

  const [fetchData, isLoading] = useFetching(async () => {
    const data = await fetchFilms();
    setFilms(data);
  });

  useEffect(() => {
    fetchData();
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
