import { describe, expect, test } from 'vitest';
import { valueFromRanges } from '../../src/react/util/valueFromRanges';

const TOP = 'TOP';
const MIDDLE = 'MIDDLE';
const BOTTOM = 'BOTTOM';

const RANGES = [
  { minValue: 11, returnValue: TOP },
  { minValue: 8, returnValue: MIDDLE },
  { minValue: 0, returnValue: BOTTOM },
];

const DEFAULT_VALUE = 'default-value';

describe('valueFromRanges', () => {
  test.each([
    [Infinity, TOP],
    [11, TOP],
    [10, MIDDLE],
    [8, MIDDLE],
    [2, BOTTOM],
    [0, BOTTOM],
    [-Infinity, DEFAULT_VALUE],
  ])(
    'valueFromRangesScenarios - %n',
    (value, result) => {
      expect(valueFromRanges(value, RANGES, DEFAULT_VALUE)).toBe(result);
    }
  );

  test('empty range', () => {
    expect(valueFromRanges(Infinity, [], 'yeppers')).toBe('yeppers');
  });
});
