import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import { Heading, ThemeProvider } from 'theme-ui';
import React from 'react';

import { themes } from '../../styles/';

function Home() {
  return <Heading>Home Page</Heading>;
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
        </Switch>
      </ThemeProvider>
    </>
  );
}

export { App };
