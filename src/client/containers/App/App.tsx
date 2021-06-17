import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import styled from 'styled-components';

import { GlobalStyles, themes } from '../../styles/';

const StyledHeading = styled.h1`
  color: ${({ theme }: { theme: App.Theme }) => theme.colors.primary};
`;

function Home() {
  return <StyledHeading>Home Page</StyledHeading>;
}

function App() {
  return (
    <>
      <Helmet>
        <title>My Title</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <ThemeProvider theme={themes.base}>
        <GlobalStyles />
        <Switch>
          <Route exact={true} path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export { App };
