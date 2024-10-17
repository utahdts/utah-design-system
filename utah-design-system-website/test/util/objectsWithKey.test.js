import { describe, expect, test } from 'vitest';
import { objectsWithKey } from '../../src/react/util/objectsWithKey';

const KEY = 'b';

const objectMissingKey = {
  a: 'a',
  c: 'c',
  d: 'd',
};

const objectWithKey = {
  [KEY]: 'b',
  ...objectMissingKey,
};

describe('objectsWithKey', () => {
  test('non object values (BAD TYPES)', () => {
    // @ts-expect-error testing invalid/badly typed values
    expect(objectsWithKey(null, 'test')).toStrictEqual([]);
    // @ts-expect-error testing invalid/badly typed values
    expect(objectsWithKey(undefined, 'test')).toStrictEqual([]);
    // @ts-expect-error testing invalid/badly typed values
    expect(objectsWithKey(NaN, 'test')).toStrictEqual([]);
    // @ts-expect-error testing invalid/badly typed values
    expect(objectsWithKey(Infinity, 'test')).toStrictEqual([]);
    // @ts-expect-error testing invalid/badly typed values
    expect(objectsWithKey(3, 'test')).toStrictEqual([]);
    // @ts-expect-error testing invalid/badly typed values
    expect(objectsWithKey(true, 'test')).toStrictEqual([]);
    // @ts-expect-error testing invalid/badly typed values
    expect(objectsWithKey(false, 'test')).toStrictEqual([]);
    // @ts-expect-error testing invalid/badly typed values
    expect(objectsWithKey(Symbol('not an object!'), 'test')).toStrictEqual([]);
    // @ts-expect-error testing invalid/badly typed values
    expect(objectsWithKey('not a string', 'test')).toStrictEqual([]);
  });

  test('object values (! nested) (no-match)', () => {
    expect(objectsWithKey(objectMissingKey, KEY)).toStrictEqual([]);
    expect(objectsWithKey([objectMissingKey], KEY)).toStrictEqual([]);
  });

  test('object values (nested) (no-match)', () => {
    expect(objectsWithKey({ a: objectMissingKey, c: objectMissingKey }, KEY)).toStrictEqual([]);
    expect(objectsWithKey([{ a: objectMissingKey, c: objectMissingKey }], KEY)).toStrictEqual([]);
  });

  test('object values (! nested) (match)', () => {
    expect(objectsWithKey(objectWithKey, KEY)).toStrictEqual([objectWithKey]);
    expect(objectsWithKey([objectWithKey, objectWithKey], KEY)).toStrictEqual([objectWithKey, objectWithKey]);
  });

  test('object values (nested) (match)', () => {
    expect(objectsWithKey(
      {
        a: objectMissingKey,
        c: { d: { e: { f: { g: { h: objectWithKey } } } } },
        i: { [KEY]: objectWithKey },
      },
      KEY
    ))
      .toStrictEqual([objectWithKey, { [KEY]: objectWithKey }, objectWithKey]);
  });

  test('object values has key but value is undefined', () => {
    expect(objectsWithKey({ [KEY]: undefined }, KEY)).toStrictEqual([]);
    expect(objectsWithKey({ [KEY]: { [KEY]: undefined } }, KEY)).toStrictEqual([{ [KEY]: { [KEY]: undefined } }]);
    expect(objectsWithKey([{ [KEY]: undefined }], KEY)).toStrictEqual([]);
    expect(objectsWithKey([{ [KEY]: [{ [KEY]: undefined }] }], KEY)).toStrictEqual([{ [KEY]: [{ [KEY]: undefined }] }]);
  });
});
