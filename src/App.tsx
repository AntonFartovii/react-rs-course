import React from 'react';
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import Header from "./common/Header";
import Content from "./common/Content";
import Pages from './components/Pages';

function App() {

    return (
        <div className="App">
            <BrowserRouter>
              <Pages/>
            </BrowserRouter>
        </div>
    )
}

export default App
