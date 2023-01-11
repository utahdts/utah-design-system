import { describe, expect, test } from 'vitest';
import isString from '../../../src/js/misc/isString';

describe('isString', () => {
  test('string', () => {
    expect(isString('i am a string!')).toBe(true);
    expect(isString('')).toBe(true);
    expect(isString(String('also a string'))).toBe(true);
  });

  test('not string', () => {
    expect(isString(3)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
  });
});
