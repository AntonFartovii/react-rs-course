import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import {setupStore} from "./store/store";
import { Provider } from 'react-redux';

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
