import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

interface ISearchProps {
  onFilterChange: (filterText: string) => void;
}

const Search = ({ onFilterChange }: ISearchProps) => {
  const [input, setInput] = useState('');
  const valueRef = useRef('');

  const changeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    onFilterChange(event.target.value);
  };

  useEffect(() => {
    const input: string = localStorage.getItem('inputValue') || '';
    input && setInput(input);
  }, []);

  useEffect(() => {
    valueRef.current = input;
  }, [input]);

  useEffect(() => {
    return () => {
      localStorage.setItem('inputValue', valueRef.current!);
    };
  }, []);

  return (
    <div className="search-bar">
      <label htmlFor="my_search">Поиск:</label>
      <input
        id="my_search"
        type="text"
        placeholder="Search..."
        value={input}
        onChange={changeSearchInput}
      />
    </div>
  );
};

export default Search;
