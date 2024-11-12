import { describe, expect, test } from 'vitest';
import { findRecursive } from '../../../src/js/misc/findRecursive';

describe('findRecursive', () => {
  const testObject = {
    id: 1,
    one: 1,
    two: 2,
    children: [
      {
        id: 2, one: 1, two: 3, children: [],
      },
      {
        id: 3, one: 1, two: 4, children: null,
      },
      {
        id: 4,
        one: 1,
        two: 2,
        children: [
          {
            id: 5,
            one: 1,
            two: 2,
            children: [{
              id: 6, one: 1, two: 5,
            }],
          },
          {
            id: 7, one: 1, two: 6, children: [{ id: 8, one: 1, two: 7 }],
          },
          {
            id: 24,
            one: 10,
            two: 20,
            children: {
              id: 25,
              one: 13,
              two: 15,
            },
          },
        ],
        children2: [
          {
            id: 9, one: 10, two: 2, children: [{ id: 10, one: 1, two: 5 }],
          },
          {
            id: 11, one: 11, two: 6, children: [{ id: 12, one: 1, two: 7 }],
          },
        ],
      },
    ],
    children2: [
      {
        id: 13, one: 1, two: 3, children: [],
      },
      {
        id: 14, one: 1, two: 4, children: null,
      },
      {
        id: 15,
        one: 1,
        two: 2,
        children: [
          {
            id: 16, one: 1, two: 2, children: [{ id: 17, one: 1, two: 5 }],
          },
          {
            id: 18, one: 1, two: 6, children: [{ id: 19, one: 1, two: 7 }],
          },
        ],
        children2: [
          {
            id: 20, one: 20, two: 2, children: [{ id: 21, one: 1, two: 5 }],
          },
          {
            id: 22, one: 21, two: 6, children: [{ id: 23, one: 1, two: 7 }],
          },
        ],
      },
    ],
  };

  test('matching', () => {
    expect(findRecursive(testObject, ['children'], (o) => o.one === 1)).toBe(true);
    expect(findRecursive(testObject, ['children'], (o) => o.one === 20)).toBe(false);
    expect(findRecursive(testObject, ['children2'], (o) => o.one === 20)).toBe(true);
    expect(findRecursive(testObject, ['children'], (o) => o.id === 6)).toBe(true);
    expect(findRecursive(testObject, ['children'], (o) => o.id === 7)).toBe(true);
    expect(findRecursive(testObject, ['children2'], (o) => o.id === 11)).toBe(false);
    expect(findRecursive(testObject, ['children2'], (o) => o.one === 11)).toBe(false);
  });

  test('multi-fields', () => {
    expect(findRecursive(testObject, ['children', 'children2'], (o) => o.id === 11)).toBe(true);
    expect(findRecursive(testObject, ['children', 'children2'], (o) => o.one === 11)).toBe(true);
  });

  test('object is array', () => {
    expect(findRecursive([
      { testObject, id: '1a' },
      { testObject, id: '1b' },
      { testObject, id: '1c' },
    ], ['children'], (o) => o.id === '1a')).toBe(true);

    expect(findRecursive([
      { testObject, id: '1a' },
      { testObject, id: '1b' },
      { testObject, id: '1c' },
    ], ['children'], (o) => o.id === '1b')).toBe(true);

    expect(findRecursive([
      { testObject, id: '1a' },
      { testObject, id: '1b' },
      { testObject, id: '1c' },
    ], ['children'], (o) => o.id === '1c')).toBe(true);

    expect(findRecursive([
      { testObject, id: '1a' },
      { testObject, id: '1b' },
      { testObject, id: '1c' },
    ], ['children'], (o) => o.id === '1d')).toBe(false);
  });

  test('children is not array', () => {
    expect(findRecursive(testObject, ['children'], (o) => o.id === 25)).toBe(true);
  });

  test('empty object', () => {
    // @ts-expect-error doing bad value testing
    expect(findRecursive({}, ['children'], (o) => o.id === 25)).toBe(false);
    // @ts-expect-error doing bad value testing
    expect(findRecursive(undefined, ['children'], (o) => o?.id === 25)).toBe(false);
    // @ts-expect-error doing bad value testing
    expect(findRecursive(null, ['children'], (o) => o?.id === 25)).toBe(false);
    // @ts-expect-error doing bad value testing
    expect(findRecursive(3, ['children'], (o) => o.id === 25)).toBe(false);
    // @ts-expect-error doing bad value testing
    expect(findRecursive(NaN, ['children'], (o) => o.id === 25)).toBe(false);
    // @ts-expect-error doing bad value testing
    expect(findRecursive('what a weird test', ['children'], (o) => o.id === 25)).toBe(false);
  });

  test('no fields', () => {
    // @ts-expect-error doing bad value testing
    expect(findRecursive({}, [], (o) => o.id === 25)).toBe(false);
    // @ts-expect-error doing bad value testing
    expect(findRecursive({}, null, (o) => o.id === 25)).toBe(false);
    // @ts-expect-error doing bad value testing
    expect(findRecursive({}, undefined, (o) => o.id === 25)).toBe(false);
    // @ts-expect-error doing bad value testing
    expect(findRecursive({}, ['i am not a real field'], (o) => o.id === 25)).toBe(false);
  });
});
