import React, { ReactNode } from 'react';
import { MockedProvider } from '@apollo/react-testing';

function getMockedApolloWrapper(mocks = [], children: ReactNode) {
  return (
    <MockedProvider
      mocks={mocks}
      addTypename={false}
      defaultOptions={{
        mutate: {
          errorPolicy: 'all',
        },
      }}
    >
      {children}
    </MockedProvider>
  );
}

export { getMockedApolloWrapper };
