import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import React from 'react';

function Home() {
  return <div>Home Page</div>;
}

function App() {
  return (
    <>
      <Helmet>
        <title>My Title</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Switch>
        <Route exact={true} path="/" component={Home} />
      </Switch>
    </>
  );
}

export { App };
