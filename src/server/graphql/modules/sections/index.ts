import 'graphql-import-node';

import { createModule } from 'graphql-modules';

import { resolvers } from './resolvers';
import * as schema from './sections.graphql';

const sectionsModule = createModule({
  id: 'sections-module',
  dirname: __dirname,
  typeDefs: [schema],
  resolvers,
});

export { sectionsModule };
