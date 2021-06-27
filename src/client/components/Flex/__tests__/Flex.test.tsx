import React from 'react';
import { render, screen } from '@testing-library/react';

import { Flex } from '../Flex';

describe('<Flex/>', () => {
  test('renders with correct base styles', () => {
    const children = 'Foo';

    render(<Flex>{children}</Flex>);

    const renderedBox = screen.getByText(children);
    expect(renderedBox).toBeInTheDocument();
    expect(renderedBox).toHaveStyleRule({ display: 'flex' });
  });
});
