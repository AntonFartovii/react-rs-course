import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

interface ISearchProps {
  onFilterChange: (filterText: string) => void;
}

const Search = ({ onFilterChange }: ISearchProps) => {
  const [input, setInput] = useState<string>('');
  const valueRef = useRef<string>('');

  const changeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handlerSearch = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onFilterChange(valueRef.current);
    }
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
        placeholder="Searching by character name..."
        value={input}
        onChange={changeSearchInput}
        onKeyDown={handlerSearch}
      />
      <button className="btn-send" onClick={() => {}}>
        Send
      </button>
    </div>
  );
};

export default Search;
