// extend @testing-library
require(`@testing-library/jest-dom/extend-expect`);

// styled-components
import 'jest-styled-components';

// accessibility
import { toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);
