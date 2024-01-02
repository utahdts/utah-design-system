import { describe, expect, test } from 'vitest';
import { createTableFilterFunctions } from '../../../../../react/components/table/util/createTableFilterFunctions';

describe('createTableFilterFunctions', () => {
  const filterValues = {
    name: {
      exactMatch: true,
      value: 'one',
    },
    missing: {
      exactMatch: false,
      value: '',
    },
  };

  test('functions', () => {
    expect(createTableFilterFunctions(filterValues))
      .toStrictEqual({
        missing: expect.any(Function),
        name: expect.any(Function),
      });
  });
});
