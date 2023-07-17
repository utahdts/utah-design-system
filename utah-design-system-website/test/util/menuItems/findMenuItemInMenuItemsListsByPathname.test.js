import { expect, test } from 'vitest';
import findMenuItemInMenusByPathname from '../../../src/react/util/menuItems/findMenuItemInMenusByPathname';

test('findMenuItemInMenusByPathname: null menu items', () => {
  expect(findMenuItemInMenusByPathname({
    menus: null,
    pathname: 'test/url',
  })).toBe(undefined);
});

test('findMenuItemInMenusByPathname: empty menu items', () => {
  expect(findMenuItemInMenusByPathname({
    menus: [[], null, undefined, '', [[[[[], [], []]]]], false],
    pathname: 'test/url',
  })).toBe(undefined);
});

test('findMenuItemInMenusByPathname: path found: top level list 1', () => {
  expect(findMenuItemInMenusByPathname({
    menus: [{ menuItems: [{ title: 'item-1', link: 'test/url1' }, { title: 'item-2', link: 'test/url2' }] }],
    pathname: 'test/url1',
  })).toStrictEqual({
    title: 'item-1',
    link: 'test/url1',
  });
});

test('findMenuItemInMenusByPathname: path found: top level list 2', () => {
  expect(findMenuItemInMenusByPathname({
    menus: [{ menuItems: [{ title: 'item-1', link: 'test/url1' }, { title: 'item-2', link: 'test/url2' }] }],
    pathname: 'test/url2',
  })).toStrictEqual({
    title: 'item-2',
    link: 'test/url2',
  });
});

test('findMenuItemInMenusByPathname: path found: child level list 1', () => {
  expect(findMenuItemInMenusByPathname({
    menus: [
      { menuItems: [{ title: 'item-1', link: 'test/url1', children: [{ title: 'item-1-1', link: 'test/url1-1' }, { title: 'item-1-2', link: 'test/url1-2' }] }] },
      { menuItems: [{ title: 'item-2', link: 'test/url2', children: [{ title: 'item-2-1', link: 'test/url2-1' }, { title: 'item-2-2', link: 'test/url2-2' }] }] },
    ],
    pathname: 'test/url1-2',
  })).toStrictEqual({
    title: 'item-1-2',
    link: 'test/url1-2',
  });
});

test('findMenuItemInMenusByPathname: path found: child level list 2', () => {
  expect(findMenuItemInMenusByPathname({
    menus: [
      { menuItems: [{ title: 'item-1', link: 'test/url1', children: [{ title: 'item-1-1', link: 'test/url1-1' }, { title: 'item-1-2', link: 'test/url1-2' }] }] },
      { menuItems: [{ title: 'item-2', link: 'test/url2', children: [{ title: 'item-2-1', link: 'test/url2-1' }, { title: 'item-2-2', link: 'test/url2-2' }] }] },
    ],
    pathname: 'test/url2-2',
  })).toStrictEqual({
    title: 'item-2-2',
    link: 'test/url2-2',
  });
});

test('findMenuItemInMenusByPathname: path not found: multi list, multi children', () => {
  expect(findMenuItemInMenusByPathname({
    menus: [
      { menuItems: [{ title: 'item-1', link: 'test/url1', children: [{ title: 'item-1-1', link: 'test/url1-1' }, { title: 'item-1-2', link: 'test/url1-2' }] }] },
      { menuItems: [{ title: 'item-2', link: 'test/url2', children: [{ title: 'item-2-1', link: 'test/url2-1' }, { title: 'item-2-2', link: 'test/url2-2' }] }] },
    ],
    pathname: 'test/not-found',
  })).toBe(undefined);
});
