import { describe, expect, test } from 'vitest';
import { copyObjectWithoutFields } from '../../src/react/util/copyObjectWithoutFields';

const KEY_A = 'a';
const KEY_B = 'b';

const objectMissingAllKey = {
  c: 'c',
  d: 'd',
};

const objectMissingKey = {
  [KEY_A]: 'a',
  ...objectMissingAllKey,
};

const objectWithKey = {
  [KEY_B]: 'b',
  ...objectMissingKey,
};

describe('copyObjectWithoutFields', () => {
  test('skip keys', () => {
    expect(copyObjectWithoutFields(objectWithKey, [KEY_B])).toStrictEqual(objectMissingKey);

    expect(copyObjectWithoutFields(
      {
        a: objectMissingKey,
        c: { d: { e: { f: { g: { h: objectWithKey } } } } },
        i: { [KEY_B]: objectWithKey },
      },
      [KEY_A, KEY_B]
    )).toStrictEqual({
      c: { d: { e: { f: { g: { h: objectMissingAllKey } } } } },
      i: {},
    });
  });
});
