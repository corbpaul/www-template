// extend @testing-library
require(`@testing-library/jest-dom/extend-expect`);

// accessibility
import { toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);
