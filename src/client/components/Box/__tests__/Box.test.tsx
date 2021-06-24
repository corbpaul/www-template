import React from 'react';
import { render, screen } from '@testing-library/react';

import { Box } from '../Box';

describe('<Box/>', () => {
  test('renders with correct base styles', () => {
    const children = 'Foo';

    render(<Box>{children}</Box>);

    const renderedBox = screen.getByText(children);
    expect(renderedBox).toBeInTheDocument();
    expect(renderedBox).toHaveStyleRule({ 'box-sizing': 'border-box' });
  });
});
