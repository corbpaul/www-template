import React, { ElementType, forwardRef, ReactNode } from 'react';

import { Box } from '../Box';

interface TextProps {
  as?: ElementType;
  children: ReactNode;
}

const Text = forwardRef<HTMLDivElement, TextProps>(
  ({ as = 'span', ...other }, ref) => {
    return <Box as={as} ref={ref} {...other} />;
  },
);

export { Text };
