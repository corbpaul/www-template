import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Helmet } from 'react-helmet';
import { renderToStringWithData } from '@apollo/client/react/ssr';
import { Request, Response } from 'express';
import { SchemaLink } from '@apollo/client/link/schema';
import { StaticRouter } from 'react-router-dom';
import React from 'react';
import Serialize from 'serialize-javascript';

import { App } from '../../client/containers/App';
import { schema } from '../graphql';

async function applicationRouteHandler(req: Request, res: Response) {
  try {
    const apolloClient = new ApolloClient({
      cache: new InMemoryCache(),
      defaultOptions: {
        mutate: {
          errorPolicy: 'all',
        },
      },
      link: new SchemaLink({
        schema,
      }),
      ssrMode: true,
    });

    const context = {};

    const body = (
      <ApolloProvider client={apolloClient}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </ApolloProvider>
    );

    return await renderToStringWithData(body).then((content) => {
      const helmet = Helmet.renderStatic();

      const apolloState = Serialize(apolloClient.cache.extract(), {
        isJSON: true,
      });

      return res.render('index', {
        apolloState,
        body: content,
        helmet,
      });
    });
  } catch {
    return res.status(500);
  }
}

export { applicationRouteHandler };
