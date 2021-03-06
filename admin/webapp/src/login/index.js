import React from 'react';
import ReactDOM from 'react-dom';

import App from '~/login/app.js';

const root = (() => {
  const element = document.createElement('div');
  element.id = 'root';
  return element;
})();

document.body.appendChild(root);
ReactDOM.render(<App />, root);
