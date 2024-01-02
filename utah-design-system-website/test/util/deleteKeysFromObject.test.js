import { describe, expect, test } from 'vitest';
import { deleteKeysFromObject } from '../../src/react/util/deleteKeysFromObject';

describe('deleteKeysFromObject', () => {
  test('deleteKeysFromObject : simple', () => {
    const obj = { one: 1, two: 2 };
    expect(deleteKeysFromObject(obj, ['one'])).toStrictEqual({ two: 2 });
  });

  test('deleteKeysFromObject : nested', () => {
    const obj = { one: 1, two: 2, three: { one: 1, four: 4 } };
    expect(deleteKeysFromObject(obj, ['one'])).toStrictEqual({ two: 2, three: { four: 4 } });
  });

  test('deleteKeysFromObject : nulls', () => {
    const obj = { one: null, two: 2, three: { one: null, four: 4 } };
    expect(deleteKeysFromObject(obj, ['one'])).toStrictEqual({ two: 2, three: { four: 4 } });
  });
});
