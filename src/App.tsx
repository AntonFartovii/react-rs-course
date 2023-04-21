import React, { useState } from 'react';
import './App.css';
import Header from './common/Header';
import Content from './common/Content';
import AppRouter from './components/AppRouter';

function App() {
  const [namePage, setNamePage] = useState<string>('');

  const handlePageNameChange = (name: string) => {
    setNamePage(name);
  };

  return (
    <>
      <Header currentPage={namePage} />
      <Content>
        <AppRouter showPageName={handlePageNameChange} />
      </Content>
    </>
  );
}

export default App;
