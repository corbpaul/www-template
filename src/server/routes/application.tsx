import { Helmet } from 'react-helmet';
import { renderToString } from 'react-dom/server';
import { Request, Response } from 'express';
import { StaticRouter } from 'react-router-dom';
import React from 'react';

import { App } from '../../client/containers/App';

async function applicationRouteHandler(req: Request, res: Response) {
  try {
    const context = {};

    const body = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>,
    );

    const helmet = Helmet.renderStatic();

    return res.render('index', {
      body,
      helmet,
    });
  } catch {
    return res.status(500);
  }
}

export { applicationRouteHandler };
