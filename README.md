# www-template

[![CircleCI](https://circleci.com/gh/corbpaul/www-template.svg?style=shield&circle-token=be576d44c4a48cfb13c112c598335aeeed83c95a)](https://app.circleci.com/pipelines/github/corbpaul/www-template)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://github.com/corbpaul/www-template)
[![CodeFactor](https://www.codefactor.io/repository/github/corbpaul/www-template/badge?s=760f564ae445fb4a2b0e2ef5646b8f38dec94a65)](https://www.codefactor.io/repository/github/corbpaul/www-template)

## Development

Clone the repository and run:

```
# install dependencies
yarn

# start development server
yarn dev
```

The development runs both the `Express` server and the `Webpack devServer` concurrently, proxying the `Express` server to port `3001`. Go to `http://localhost:3000` to view the application.

Any changes to server-side code will restart the server (via `nodemon`) and any changes to client-side code will auto-change on the browser (via `react-refresh`.)

## GraphQL

### Modules

We use GraphQL Modules in order to separate the GraphQL schema implementation into small, reusable, easy-to-implement and easy-to-test pieces with the possibility to extract them easily if necessary in the future.

Each module is made up of a schema, resolvers and their datasource which makes the relevant calls to external apis.

In order to correctly type the resolvers, once the schema has changed, run `yarn generate` to create typings for the module.

### Apollo Server

The modules are collated in `src/server/graphql/index` and passed to an instance of Apollo Server. When this server is started (as part of the overall Express server) the GraphQL playground is available in dev environment at `/graphql`.

### Apollo Client (Server)

The server-side instance of Apollo Client is initiated in `src/server/routes/application`. Using `SchemaLink` allows performing GraphQL operations on the provided schema rather than making network calls when loading the page.

### Apollo Client (Browser)

The client-side instance of Apollo Client is initiated in `src/client/index`. The client is initiated with the value of `window.__APOLLO_STATE__` which is passed to the html via `src/server/routes/application`.

### Queries

Queries are made within React components as and when they are required. For example:

```
const GET_ME = gql`
  query me {
    me {
      firstName
    }
  }
`;
```

This query knows which resolver query to call and we want just the `firstName` to be returned. We call that query within the React component:

```
const { error, loading, data } = useQuery(GET_ME);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;

return <p>{data.me.firstName}</p>
```
