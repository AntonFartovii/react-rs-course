import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTitle } from './../store/reducers/SearchSlice';
import { RootState } from '../store/store';

interface ISearchProps {
  onFilterChange: (filterText: string) => void;
}

const Search = ({ onFilterChange }: ISearchProps) => {
  const dispatch = useDispatch();
  const { searchTitle } = useSelector((state: RootState) => state.searchReducer);

  const changeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTitle(event.target.value));
  };

  const handlerSearch = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onFilterChange(searchTitle);
    }
  };

  return (
    <>
      <div className="search-bar">
        <label htmlFor="my_search">Поиск:</label>
        <input
          id="my_search"
          type="text"
          placeholder="Searching by character name..."
          value={searchTitle}
          onChange={changeSearchInput}
          onKeyDown={handlerSearch}
        />
      </div>
      <p>Search Results for: {searchTitle}</p>
    </>
  );
};

export default Search;
