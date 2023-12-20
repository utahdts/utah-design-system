import { expect, test } from 'vitest';
import { chainSorters } from '../../../react/util/chainSorters';

test('chainSorters - several rules', () => {
  const sorter = chainSorters([
    (a, b) => a - b,
    (a, b) => b - a,
    (a, b) => b + a,
  ]);

  // hits the last comparator
  expect(sorter(1, 1)).toBeGreaterThan(0);
  // hits first comparator
  expect(sorter(2, 1)).toBeGreaterThan(0);
  // hits first comparator
  expect(sorter(1, 2)).toBeLessThan(0);
  // hits them all and is still 0
  expect(sorter(0, 0)).toBe(0);
});

test('chainSorters - single rule', () => {
  const sorter = chainSorters([
    (a, b) => a - b,
  ]);

  expect(sorter(1, 1)).toBe(0);
  expect(sorter(2, 1)).toBeGreaterThan(0);
  expect(sorter(1, 2)).toBeLessThan(0);
  expect(sorter(0, 0)).toBe(0);
});

test('chainSorters - no rules', () => {
  const sorter = chainSorters([]);

  // defaults to 0 if nothing is provided
  expect(sorter(1, 1)).toBe(0);
});

test('chainSorters - null rules', () => {
  const sorter = chainSorters();

  // defaults to 0 if nothing is provided
  expect(sorter(1, 1)).toBe(0);
});

test('chainSorters - param spreading (single spread)', () => {
  const sorter = chainSorters(
    [
      (a, b, result) => result,
    ],
    'i am the result'
  );

  expect(sorter(1, 1)).toBe('i am the result');
});

test('chainSorters - param spreading (multi)', () => {
  // all 1-6 extra parameters are sent to the sorter
  // the sorter then pulls the max value of those numbers
  // this proves that sending however many parameters you want as additional parameters to the sorter chain are all given
  const sorter = chainSorters(
    [
      // returns 0 so skip it
      (a, b, ...adders) => Math.min(...adders),
      // returns 6 so return it
      (a, b, ...adders) => Math.max(...adders),
    ],
    1,
    2,
    6,
    5,
    4,
    0
  );

  expect(sorter(1, 1)).toBe(6);
});
