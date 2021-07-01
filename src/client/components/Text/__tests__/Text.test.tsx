import React from 'react';
import { render, screen } from '@testing-library/react';

import { Text } from '../Text';

describe('<Text/>', () => {
  test('renders with correct base styles', () => {
    const children = 'Foo';

    render(<Text>{children}</Text>);

    const renderedBox = screen.getByText(children);
    expect(renderedBox).toBeInTheDocument();
    expect(renderedBox).toHaveStyleRule({ 'box-sizing': 'border-box' });
  });
});
