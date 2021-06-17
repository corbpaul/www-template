import 'graphql-import-node';

import { createModule } from 'graphql-modules';

import * as schema from './schema.graphql';

const rootModule = createModule({
  id: 'root-module',
  dirname: __dirname,
  typeDefs: [schema],
});

export { rootModule };
