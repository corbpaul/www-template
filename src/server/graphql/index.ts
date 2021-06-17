import { ApolloServer } from 'apollo-server-express';
import { createApplication } from 'graphql-modules';
import { Express } from 'express';

import { rootModule } from './modules/root';

const application = createApplication({
  modules: [rootModule],
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
