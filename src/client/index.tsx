import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';
import React from 'react';

import { App } from './containers/App';

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
