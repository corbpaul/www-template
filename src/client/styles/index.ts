import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { themes } from './themes';

const GlobalStyles = createGlobalStyle`
 ${normalize}
`;

export { GlobalStyles, themes };
