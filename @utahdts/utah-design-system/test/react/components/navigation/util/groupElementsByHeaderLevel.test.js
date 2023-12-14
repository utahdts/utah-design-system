import { expect, test } from 'vitest';
import { groupElementsByHeaderLevel } from '../../../../../react/components/navigation/util/groupElementsByHeaderLevel';

test('groupElementsByHeaderLevel: empty', () => {
  expect(groupElementsByHeaderLevel([])).toStrictEqual([]);
  expect(groupElementsByHeaderLevel(null)).toStrictEqual([]);

  expect(groupElementsByHeaderLevel({})).toStrictEqual([]);
  expect(groupElementsByHeaderLevel(undefined)).toStrictEqual([]);
  expect(groupElementsByHeaderLevel(0)).toStrictEqual([]);
});

test('groupElementsByHeaderLevel: single level', () => {
  expect(groupElementsByHeaderLevel([{ tagName: 'h2' }]))
    .toStrictEqual([{
      children: [],
      level: 2,
      node: {
        tagName: 'h2',
      },
    }]);

  expect(groupElementsByHeaderLevel([{ tagName: 'h3' }]))
    .toStrictEqual([{
      children: [],
      level: 3,
      node: {
        tagName: 'h3',
      },
    }]);
});

test('groupElementsByHeaderLevel: multiLevel', () => {
  expect(groupElementsByHeaderLevel([
    { tagName: 'h2' },
    { tagName: 'h3' },
    { tagName: 'h4' },
    { tagName: 'h2' },
    { tagName: 'h1' },
    { tagName: 'h2' },
    { tagName: 'h2' },
    { tagName: 'h3' },
    { tagName: 'h4' },
    { tagName: 'h5' },
    { tagName: 'h6' },
  ]))
    .toStrictEqual([
      {
        node: { tagName: 'h2' },
        children: [
          {
            node: { tagName: 'h3' },
            children: [
              { node: { tagName: 'h4' }, children: [], level: 4 },
            ],
            level: 3,
          },
        ],
        level: 2,
      },
      {
        node: { tagName: 'h2' }, children: [], level: 2,
      },
      {
        node: { tagName: 'h1' },
        level: 1,
        children: [
          { node: { tagName: 'h2' }, children: [], level: 2 },
          {
            node: { tagName: 'h2' },
            level: 2,
            children: [
              {
                node: { tagName: 'h3' },
                level: 3,
                children: [
                  {
                    node: { tagName: 'h4' },
                    level: 4,
                    children: [
                      {
                        node: { tagName: 'h5' },
                        level: 5,
                        children: [
                          { node: { tagName: 'h6' }, children: [], level: 6 },
                        ],
                      }],
                  }],
              }],
          }],
      },
    ]);
});
