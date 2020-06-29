import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app.js';
import configureStore from './redux/configureStore';

const store = configureStore();

const root = (() => {
  const element = document.createElement('div');
  element.id = 'root';

  return element;
})();

document.body.appendChild(root);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
