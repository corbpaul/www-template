import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { themes } from './themes';

const GlobalStyles = createGlobalStyle`
 ${normalize}

 body {
   font-family: ${({ theme }: { theme: App.Theme }) => theme.fonts.body};
 }
`;

export { GlobalStyles, themes };
