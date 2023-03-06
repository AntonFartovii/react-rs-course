import React from 'react';
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import Header from "./common/Header";
import Content from "./common/Content";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Content>
                    <AppRouter/>
                </Content>
            </BrowserRouter>
        </div>
    )
}

export default App
