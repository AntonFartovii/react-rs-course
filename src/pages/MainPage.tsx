import React, { useEffect, useState } from 'react';
import Characters from '../components/Characters';
import Search from '../components/Search';
import { characterAPI } from '../services/CharactersService';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export interface IPageProps {
  showPageName?: (name: string) => void;
}

const MainPage = ({ showPageName }: IPageProps): JSX.Element => {
  const name = 'Main page';
  const searchTitle = useSelector((state: RootState) => state.searchReducer.searchTitle);
  const [filterName, setFilterName] = useState<string>(searchTitle);

  const { data, error, isLoading } = characterAPI.useFetchAllCharactersQuery(filterName);

  const handleFilterChange = (filterText: string) => {
    setFilterName(filterText);
  };

  useEffect(() => {
    showPageName && showPageName(name);
  }, [showPageName]);

  return (
    <>
      <Search onFilterChange={handleFilterChange} />
      {isLoading && <span className="loader"></span>}
      {error && <h1>Error</h1>}
      {data && <Characters items={data && data.results} />}
    </>
  );
};

export default MainPage;
