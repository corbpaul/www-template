import { ApolloServer } from 'apollo-server-express';
import { createApplication } from 'graphql-modules';
import { Express } from 'express';

import { rootModule } from './modules/root';
import { sectionsModule } from './modules/sections';
import { screensModule } from './modules/screens';

const application = createApplication({
  modules: [rootModule, sectionsModule, screensModule],
});

const schema = application.createSchemaForApollo();

function apolloGraphqlServer(app: Express) {
  const server = new ApolloServer({
    schema,
    playground: {
      settings: {
        'schema.polling.enable': false,
      },
    },
  });

  server.applyMiddleware({ app });
}

export { apolloGraphqlServer, schema };
