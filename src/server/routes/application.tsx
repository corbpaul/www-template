import { Helmet } from 'react-helmet';
import { renderToString } from 'react-dom/server';
import { Request, Response } from 'express';
import { ServerStyleSheet } from 'styled-components';
import { StaticRouter } from 'react-router-dom';
import React from 'react';

import { App } from '../../client/containers/App';

async function applicationRouteHandler(req: Request, res: Response) {
  const sheet = new ServerStyleSheet();

  try {
    const context = {};

    const body = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>,
    );

    const helmet = Helmet.renderStatic();
    const styleTags = sheet.getStyleTags();

    return res.render('index', {
      body,
      helmet,
      styleTags,
    });
  } catch {
    return res.status(500);
  } finally {
    sheet.seal();
  }
}

export { applicationRouteHandler };
