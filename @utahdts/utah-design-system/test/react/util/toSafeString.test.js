import { describe, expect, test } from 'vitest';
import { toSafeString } from '../../../react/util/toSafeString';

describe('toSafeString', () => {
  test('empties', () => {
    expect(toSafeString(null)).toBe('');
    expect(toSafeString(undefined)).toBe('');
    expect(toSafeString(NaN)).toBe('');
    expect(toSafeString('')).toBe('');
  });

  test('numbers', () => {
    expect(toSafeString(0)).toBe('0');
    expect(toSafeString(Infinity)).toBe('Infinity');
    expect(toSafeString(-102)).toBe('-102');
  });

  test('strings', () => {
    expect(toSafeString('i am string!')).toBe('i am string!');
  });
});
