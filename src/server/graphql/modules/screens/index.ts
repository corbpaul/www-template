import 'graphql-import-node';

import { createModule } from 'graphql-modules';

import { resolvers } from './resolvers';
import * as schema from './screens.graphql';

const screensModule = createModule({
  id: 'screens-module',
  dirname: __dirname,
  typeDefs: [schema],
  resolvers,
});

export { screensModule };
