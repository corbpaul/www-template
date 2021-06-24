import React, { ElementType, forwardRef, ReactNode } from 'react';
import styled from 'styled-components';

const BoxRoot = styled.div`
  box-sizing: 'border-box';
  margin: 0;
  min-width: 0;
`;

interface BoxProps {
  children: ReactNode;
  component?: ElementType;
}

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ component = 'div', ...other }, ref) => {
    return <BoxRoot as={component} ref={ref} {...other} />;
  },
);

export { Box };
