import compression from 'compression';
import dotenvSafe from 'dotenv-safe';
import express from 'express';

import { expressLogger, expressErrorLogger } from './middleware/logger';

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

// static assets
app.use(`/${staticAssetPath}`, express.static(staticAssetOutputPath));

// routes
app.get('*', (_, res) => res.send('Hello'));

// error logging (needs to come after router)
app.use(expressErrorLogger);

// start server
app.listen(PORT, () => {
  console.info('Server running on port %d', PORT);
});
