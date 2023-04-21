import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import App from './App';

interface IRenderProps {
  path: string;
}
const store = setupStore();

export const render = async ({ path }: IRenderProps) => {
  return ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={path}>
        <App/>
      </StaticRouter>
    </Provider>
  )
}
