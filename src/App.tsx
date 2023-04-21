import React, { useState } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

function App() {
  const [namePage, setNamePage] = useState<string>('');

  const handlePageNameChange = (name: string) => {
    setNamePage(name);
  };

    return (
      <>
        <header>
          <div>
            {namePage && namePage}
          </div>
          <NavBar/>
        </header>
        <main className="container container-main">
          <div className="inner-wrapper">
            <AppRouter showPageName={handlePageNameChange}/>
          </div>
        </main>
      </>
    );
}

export default App;
