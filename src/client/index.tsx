import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';
import React from 'react';

import { App } from './containers/App';

const client = new ApolloClient({
  defaultOptions: {
    mutate: {
      errorPolicy: 'all',
    },
  },
  link: new HttpLink({
    credentials: 'same-origin',
  }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);
