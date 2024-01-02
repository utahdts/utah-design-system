import { expect, test } from 'vitest';
import { arrayMatchRecursive } from '../../../react/util/arrayMatchRecursive';

test('arrayMatchRecursive', () => {
  const arrayField = 'children';
  const isMatchFunc = (item) => item?.isMatch;

  // null object
  expect(arrayMatchRecursive({
    object: null,
    arrayField,
    isMatchFunc,
  })).toBe(false);

  // no children
  expect(arrayMatchRecursive({
    object: {},
    arrayField,
    isMatchFunc,
  })).toBe(false);

  // no children match: no field
  expect(arrayMatchRecursive({
    object: { [arrayField]: [{}] },
    arrayField,
    isMatchFunc,
  })).toBe(false);

  // no children match: field false
  expect(arrayMatchRecursive({
    object: { [arrayField]: [{ isMatch: false }] },
    arrayField,
    isMatchFunc,
  })).toBe(false);

  // children match
  expect(arrayMatchRecursive({
    object: { [arrayField]: [{ isMatch: true }] },
    arrayField,
    isMatchFunc,
  })).toBe(true);

  // object itself matches
  expect(arrayMatchRecursive({
    object: { [arrayField]: [{ isMatch: false }], isMatch: true },
    arrayField,
    isMatchFunc,
  })).toBe(false);

  // nested children no match
  expect(arrayMatchRecursive({
    object: { [arrayField]: [{ isMatch: false, [arrayField]: [{ isMatch: false }] }], isMatch: true },
    arrayField,
    isMatchFunc,
  })).toBe(false);

  // nested children has a match
  expect(arrayMatchRecursive({
    object: { [arrayField]: [{ isMatch: false, [arrayField]: [{ isMatch: true }] }], isMatch: true },
    arrayField,
    isMatchFunc,
  })).toBe(false);

  // null object in child list
  expect(arrayMatchRecursive({
    object: { [arrayField]: [null, { isMatch: false }], isMatch: true },
    arrayField,
    isMatchFunc,
  })).toBe(false);
});
