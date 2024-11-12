import { describe, expect, test } from 'vitest';
import { dataOfAllDataTypes, DATA_OF_ALL_DATATYPES, allDataTypes } from './dataOfAllDataTypes';

describe('dataOfAllDataTypes', () => {
  test.each(Object.values(allDataTypes))(
    'allDataTypes keys all exist',
    (dataTypeKey) => (
      // @ts-expect-error testing typing is terrible
      expect(DATA_OF_ALL_DATATYPES[dataTypeKey]).not.toBeUndefined()
    )
  );
  test.each(Object.keys(DATA_OF_ALL_DATATYPES))(
    'DATA_OF_ALL_DATATYPES keys all in allDataTypes',
    (dataTypeKey) => (
      expect(Object.values(allDataTypes).includes(dataTypeKey)).toBe(true)
    )
  );

  test('includes', () => {
    expect(dataOfAllDataTypes({ includes: [allDataTypes.STRING] }).length).toBe(Object.values(DATA_OF_ALL_DATATYPES.string).length);
  });

  test('excludes', () => {
    // @ts-expect-error testing typing is terrible
    const excludeAllTypesButString = Object.keys(allDataTypes).filter((key) => key !== 'STRING').map((key) => allDataTypes[key]);
    expect(dataOfAllDataTypes({ excludes: excludeAllTypesButString }).length).toBe(Object.values(DATA_OF_ALL_DATATYPES.string).length);
  });
});
