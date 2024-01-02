import { expect, test } from 'vitest';
import { findElementsByTagNameMatch } from '../../../../../react/components/navigation/util/findElementsByTagNameMatch';

const h2a = { id: 'h2a', tagName: 'h2' };
const h2b = { id: 'h2b', tagName: 'h2' };
const h3a = { id: 'h3a', tagName: 'h3' };
const h2c = {
  id: 'h2c',
  tagName: 'h2',
  children: [h3a, h3a],
};
const h1a = { id: 'h1a', tagName: 'h1' };
const h4a = { id: 'h4a', tagName: 'h4' };
const h4b = {
  id: 'h4b',
  tagName: 'h4',
  children: [h3a, h3a],
};
const h4c = {
  id: 'h4c',
  tagName: 'h4',
  children: [h4a, h4a],
};
const h2d = {
  id: 'h2d',
  tagName: 'h2',
  children: [h1a, h4a],
};
const h2e = {
  id: 'h2e',
  tagName: 'h2',
  children: [
    h2c,
    h4b,
    h2d,
    h1a,
  ],
};

test('findElementsByTagNameMatch: match (only h2, h3)', () => {
  expect(findElementsByTagNameMatch(h2a)).toStrictEqual([h2a]);
  expect(findElementsByTagNameMatch(h2b)).toStrictEqual([h2b]);
});

test('findElementsByTagNameMatch: no match', () => {
  expect(findElementsByTagNameMatch(h1a)).toStrictEqual([]);
  expect(findElementsByTagNameMatch(h4a)).toStrictEqual([]);
});

test('findElementsByTagNameMatch: parent match - children match', () => {
  expect(findElementsByTagNameMatch(h2c)).toStrictEqual([h2c, h3a, h3a]);
});

test('findElementsByTagNameMatch: no parent match - children match', () => {
  expect(findElementsByTagNameMatch(h4b)).toStrictEqual([h3a, h3a]);
});

test('findElementsByTagNameMatch: parent match - children do not match', () => {
  expect(findElementsByTagNameMatch(h2d)).toStrictEqual([h2d]);
});

test('findElementsByTagNameMatch: parent match - children do not match', () => {
  expect(findElementsByTagNameMatch(h4c)).toStrictEqual([]);
});

test('findElementsByTagNameMatch: multi-level', () => {
  expect(findElementsByTagNameMatch(h2e)).toStrictEqual([h2e, h2c, h3a, h3a, h3a, h3a, h2d]);
});
