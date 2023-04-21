import React from 'react';
import App from './App';
import { setupStore } from './store/store';
import { Provider } from 'react-redux';
import { hydrateRoot  } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const store = setupStore();

const root = document.getElementById('root') as HTMLElement

hydrateRoot(
  root,
    <Provider store={store}>
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </Provider>
)
