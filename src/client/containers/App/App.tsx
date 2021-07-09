import { Helmet } from 'react-helmet';
import { Route, Switch, Link } from 'react-router-dom';
import { Heading, ThemeProvider } from 'theme-ui';
import React from 'react';

import { themes } from '../../styles/';

function Home() {
  return (
    <>
      <Link to="/series">Series</Link>
      <Heading>Home Page</Heading>
    </>
  );
}

function Series() {
  return (
    <>
      <Link to="/">Home</Link>
      <Heading>Series Page</Heading>
    </>
  );
}

function App() {
  return (
    <>
      <Helmet>
        <title>My Title</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <ThemeProvider theme={themes.base}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/series" component={Series} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export { App };
