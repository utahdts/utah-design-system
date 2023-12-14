import { expect, test } from 'vitest';
import { joinClassNames } from '../../../react/util/joinClassNames';

test('joinClassNames', () => {
  expect(joinClassNames('1', '2')).toBe('1 2');
  expect(joinClassNames()).toBe('');
  expect(joinClassNames(null)).toBe('');
  expect(joinClassNames('1', null, '2', '')).toBe('1 2');
  expect(joinClassNames('1', null, ' 2 ', '')).toBe('1 2');
  expect(joinClassNames(['1', null, ' 2 ', ''])).toBe('1 2');
  expect(joinClassNames([['1', null], [' 2 ', '']])).toBe('1 2');
  expect(joinClassNames([['1', null]], [[' 2 ', '']])).toBe('1 2');
});
