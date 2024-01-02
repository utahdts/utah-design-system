import { describe, expect, test } from 'vitest';
import { filterTableRecords } from '../../../../../react/components/table/util/filterTableRecords';

describe('filterTableRecords', () => {
  const record1 = { record: { id: 1, name: 'one', occupation: 'ring leader' } };
  const record2 = { record: { id: 2, name: 'two', occupation: 'ring leader' } };

  test('functions', () => {
    expect(filterTableRecords(
      [
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
      ],
      {
        missing: () => true,
        name: (name) => name.includes('one'),
      }
    ))
      .toStrictEqual([record1]);
  });
});
