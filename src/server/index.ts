import compression from 'compression';
import dotenvSafe from 'dotenv-safe';
import express from 'express';
import hbs from 'hbs';

import { apolloGraphqlServer } from './graphql';
import { applicationRouteHandler } from './routes/application';
import { expressLogger, expressErrorLogger } from './middleware/logger';
import { resolveAsset, resolveAssetParams } from './views/helpers/resolveAsset';

const PORT = process.env.NODE_PORT || 3000;
const staticAssetPath = 'static'; // url where static assets are served from
const staticAssetOutputPath = 'public'; // dir where static assets are built

// enable env vars
dotenvSafe.config();

// create application
const app = express();

// compression
app.use(compression());

// logging
app.use(expressLogger);

// GraphQL
apolloGraphqlServer(app);

// templating
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
hbs.registerHelper('resolveAsset', (filename: resolveAssetParams['filename']) =>
  resolveAsset({
    filename,
  }),
);

// static assets
app.use(`/${staticAssetPath}`, express.static(staticAssetOutputPath));

// routes
app.get('*', applicationRouteHandler);

// error logging (needs to come after router)
app.use(expressErrorLogger);

// start server
app.listen(PORT, () => {
  console.info('Server running on port %d', PORT);
});
