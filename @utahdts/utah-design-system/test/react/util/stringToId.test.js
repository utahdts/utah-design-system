import { expect, test } from 'vitest';
import { stringToId } from '../../../react/util/stringToId';

test('stringToId', () => {
  expect(stringToId('1000')).toBe('1000');
  expect(stringToId()).toBe(undefined);
  expect(stringToId(null)).toBe(undefined);
  expect(stringToId(undefined)).toBe(undefined);
  expect(stringToId('Title')).toBe('title');
  expect(stringToId('Title 1')).toBe('title-1');
  expect(stringToId('dash-dash dash')).toBe('dash-dash-dash');
});
