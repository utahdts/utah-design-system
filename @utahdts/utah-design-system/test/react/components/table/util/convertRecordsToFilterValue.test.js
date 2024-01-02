import { describe, expect, test } from 'vitest';
import { convertRecordsToFilterValue } from '../../../../../react/components/table/util/convertRecordsToFilterValue';

describe('convertRecordsToFilterValue', () => {
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
  const record1 = { record: { id: 1, name: 'one', occupation: 'ring leader' } };
  const record2 = { record: { id: 2, name: 'two', occupation: 'ring leader' } };

  test('record conversion', () => {
    expect(convertRecordsToFilterValue([record1, record2], filterValues))
      .toStrictEqual([
        {
          record: record1,
          filterFields: {
            missing: '',
            name: 'one',
          },
        },
        {
          record: record2,
          filterFields: {
            missing: '',
            name: 'two',
          },
        },
      ]);
  });
});
