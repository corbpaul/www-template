import { Helmet } from 'react-helmet';
import { Request, Response } from 'express';
import { StaticRouter } from 'react-router-dom';
import React from 'react';

import { App } from '../../client/containers/App';

async function applicationRouteHandler(req: Request, res: Response) {
  try {
    const context = {};

    const body = (
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );

    return res.send(body);
  } catch {
    return res.status(500);
  }
}

export { applicationRouteHandler };
