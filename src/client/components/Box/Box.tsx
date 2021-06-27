import React, { ElementType, forwardRef, ReactNode } from 'react';
import styled from 'styled-components';

const BoxRoot = styled.div`
  box-sizing: 'border-box';
  margin: 0;
  min-width: 0;
`;

interface BoxProps {
  as?: ElementType;
  children: ReactNode;
}

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ as = 'div', ...other }, ref) => {
    return <BoxRoot as={as} ref={ref} {...other} />;
  },
);

export { Box };
