import { MemoryRouter } from 'react-router-dom';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'theme-ui';
import React, { FC, ReactElement } from 'react';

import { themes } from '../../src/client/styles/themes';

const TestWrapper: FC = ({ children }) => {
  return (
    <ThemeProvider theme={themes.base}>
      <MemoryRouter>{children}</MemoryRouter>
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => render(ui, { wrapper: TestWrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };
