import { describe, expect, test } from 'vitest';
import { objectsPathsWithKeys } from '../../src/react/util/objectsPathsWithKeys';

const KEY_A = 'a';
const KEY_B = 'b';

const objectMissingKey = {
  [KEY_A]: 'a',
  c: 'c',
  d: 'd',
};

const objectWithKey = {
  [KEY_B]: 'b',
  ...objectMissingKey,
};

describe('objectsPathsWithKeys', () => {
  test('non object values (BAD TYPES)', () => {
    // @ts-expect-error testing invalid/badly typed values
    expect(objectsPathsWithKeys(null, ['test'])).toStrictEqual([]);
    // @ts-expect-error testing invalid/badly typed values
    expect(objectsPathsWithKeys(undefined, ['test'])).toStrictEqual([]);
    // @ts-expect-error testing invalid/badly typed values
    expect(objectsPathsWithKeys(NaN, ['test'])).toStrictEqual([]);
    // @ts-expect-error testing invalid/badly typed values
    expect(objectsPathsWithKeys(Infinity, ['test'])).toStrictEqual([]);
    // @ts-expect-error testing invalid/badly typed values
    expect(objectsPathsWithKeys(3, ['test'])).toStrictEqual([]);
    // @ts-expect-error testing invalid/badly typed values
    expect(objectsPathsWithKeys(true, ['test'])).toStrictEqual([]);
    // @ts-expect-error testing invalid/badly typed values
    expect(objectsPathsWithKeys(false, ['test'])).toStrictEqual([]);
    // @ts-expect-error testing invalid/badly typed values
    expect(objectsPathsWithKeys(Symbol('not an object!'), ['test'])).toStrictEqual([]);
    // @ts-expect-error testing invalid/badly typed values
    expect(objectsPathsWithKeys('not a string', ['test'])).toStrictEqual([]);
  });

  test('object values (! nested) (no-match)', () => {
    expect(objectsPathsWithKeys(objectMissingKey, [KEY_B])).toStrictEqual([]);
    expect(objectsPathsWithKeys([objectMissingKey], [KEY_B])).toStrictEqual([]);
  });

  test('object values (nested) (no-match)', () => {
    expect(objectsPathsWithKeys({ a: objectMissingKey, c: objectMissingKey }, [KEY_B])).toStrictEqual([]);
    expect(objectsPathsWithKeys([{ a: objectMissingKey, c: objectMissingKey }], [KEY_B])).toStrictEqual([]);
  });

  test('object values (! nested) (match)', () => {
    expect(objectsPathsWithKeys(objectMissingKey, [KEY_B])).toStrictEqual([]);
    expect(objectsPathsWithKeys(objectWithKey, [KEY_B])).toStrictEqual([
      {
        path: '',
        searchKey: KEY_B,
        object: objectWithKey,
      },
    ]);
    expect(objectsPathsWithKeys([objectWithKey, objectWithKey], [KEY_B])).toStrictEqual([
      {
        path: '0',
        searchKey: KEY_B,
        object: objectWithKey,
      },
      {
        path: '1',
        searchKey: KEY_B,
        object: objectWithKey,
      },
    ]);
  });

  test('object values (nested) (match)', () => {
    expect(objectsPathsWithKeys(
      {
        a: objectMissingKey,
        c: { d: { e: { f: { g: { h: objectWithKey } } } } },
        i: { [KEY_B]: objectWithKey },
      },
      [KEY_B]
    ))
      .toStrictEqual([
        {
          path: 'c.d.e.f.g.h',
          searchKey: KEY_B,
          object: objectWithKey,
        },
        {
          path: 'i',
          searchKey: KEY_B,
          object: { [KEY_B]: objectWithKey },
        },
        {
          path: 'i.b',
          searchKey: KEY_B,
          object: objectWithKey,
        },
      ]);
  });

  test('object values has key but value is undefined', () => {
    expect(objectsPathsWithKeys({ [KEY_B]: undefined }, [KEY_B])).toStrictEqual([]);
    expect(objectsPathsWithKeys({ [KEY_B]: { [KEY_B]: undefined } }, [KEY_B])).toStrictEqual([
      {
        path: '',
        searchKey: KEY_B,
        object: { [KEY_B]: { [KEY_B]: undefined } },
      },
    ]);
    expect(objectsPathsWithKeys([{ [KEY_B]: undefined }], [KEY_B])).toStrictEqual([]);
    expect(objectsPathsWithKeys([{ [KEY_B]: [{ [KEY_B]: undefined }] }], [KEY_B])).toStrictEqual([
      {
        path: '0',
        searchKey: KEY_B,
        object: { [KEY_B]: [{ [KEY_B]: undefined }] },
      },
    ]);
  });

  test('multi-key', () => {
    expect(objectsPathsWithKeys(
      {
        a: objectMissingKey,
        c: { d: { e: { f: { g: { h: objectWithKey } } } } },
        i: { [KEY_B]: objectWithKey },
      },
      [KEY_A, KEY_B]
    ))
      .toStrictEqual([
        {
          object: {
            a: objectMissingKey,
            c: { d: { e: { f: { g: { h: objectWithKey } } } } },
            i: { b: objectWithKey },
          },
          path: '',
          searchKey: KEY_A,
        },
        {
          object: { a: 'a', c: 'c', d: 'd' },
          path: 'a',
          searchKey: KEY_A,
        },
        {
          object: objectWithKey,
          path: 'c.d.e.f.g.h',
          searchKey: KEY_A,
        },
        {
          object: objectWithKey,
          path: 'i.b',
          searchKey: KEY_A,
        },
        {
          object: objectWithKey,
          path: 'c.d.e.f.g.h',
          searchKey: KEY_B,
        },
        {
          object: { b: objectWithKey },
          path: 'i',
          searchKey: KEY_B,
        },
        {
          object: objectWithKey,
          path: 'i.b',
          searchKey: KEY_B,
        },
      ]);
  });
});
