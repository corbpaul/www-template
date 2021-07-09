import 'reflect-metadata';
import { testkit } from 'graphql-modules';

import { sectionsModule } from '..';

describe('graphql sections module', () => {
  test('is a valid schema', async () => {
    const app = testkit.testModule(sectionsModule, {
      replaceExtensions: true,
    });

    expect(app.schema.getQueryType()).toBeDefined();
  });
});
