import findMenuItemInMenuItemsListsByPathname from '../../../../react/util/menuItems/findMenuItemInMenuItemsListsByPathname';

test('findMenuItemInMenuItemsListsByPathname: null menu items', () => {
  expect(findMenuItemInMenuItemsListsByPathname({
    menuItemsListsArray: null,
    pathname: 'test/url',
  })).toBe(undefined);
});

test('findMenuItemInMenuItemsListsByPathname: empty menu items', () => {
  expect(findMenuItemInMenuItemsListsByPathname({
    menuItemsListsArray: [[], null, undefined, '', [[[[[], [], []]]]], false],
    pathname: 'test/url',
  })).toBe(undefined);
});

test('findMenuItemInMenuItemsListsByPathname: path found: top level list 1', () => {
  expect(findMenuItemInMenuItemsListsByPathname({
    menuItemsListsArray: [[{ title: 'item-1', link: 'test/url1' }, { title: 'item-2', link: 'test/url2' }]],
    pathname: 'test/url1',
  })).toStrictEqual({
    title: 'item-1',
    link: 'test/url1',
  });
});

test('findMenuItemInMenuItemsListsByPathname: path found: top level list 2', () => {
  expect(findMenuItemInMenuItemsListsByPathname({
    menuItemsListsArray: [[{ title: 'item-1', link: 'test/url1' }, { title: 'item-2', link: 'test/url2' }]],
    pathname: 'test/url2',
  })).toStrictEqual({
    title: 'item-2',
    link: 'test/url2',
  });
});

test('findMenuItemInMenuItemsListsByPathname: path found: child level list 1', () => {
  expect(findMenuItemInMenuItemsListsByPathname({
    menuItemsListsArray: [[
      { title: 'item-1', link: 'test/url1', children: [{ title: 'item-1-1', link: 'test/url1-1' }, { title: 'item-1-2', link: 'test/url1-2' }] },
      { title: 'item-2', link: 'test/url2', children: [{ title: 'item-2-1', link: 'test/url2-1' }, { title: 'item-2-2', link: 'test/url2-2' }] },
    ]],
    pathname: 'test/url1-2',
  })).toStrictEqual({
    title: 'item-1-2',
    link: 'test/url1-2',
  });
});

test('findMenuItemInMenuItemsListsByPathname: path found: child level list 2', () => {
  expect(findMenuItemInMenuItemsListsByPathname({
    menuItemsListsArray: [[
      { title: 'item-1', link: 'test/url1', children: [{ title: 'item-1-1', link: 'test/url1-1' }, { title: 'item-1-2', link: 'test/url1-2' }] },
      { title: 'item-2', link: 'test/url2', children: [{ title: 'item-2-1', link: 'test/url2-1' }, { title: 'item-2-2', link: 'test/url2-2' }] },
    ]],
    pathname: 'test/url2-2',
  })).toStrictEqual({
    title: 'item-2-2',
    link: 'test/url2-2',
  });
});

test('findMenuItemInMenuItemsListsByPathname: path not found: multi list, multi children', () => {
  expect(findMenuItemInMenuItemsListsByPathname({
    menuItemsListsArray: [[
      { title: 'item-1', link: 'test/url1', children: [{ title: 'item-1-1', link: 'test/url1-1' }, { title: 'item-1-2', link: 'test/url1-2' }] },
      { title: 'item-2', link: 'test/url2', children: [{ title: 'item-2-1', link: 'test/url2-1' }, { title: 'item-2-2', link: 'test/url2-2' }] },
    ]],
    pathname: 'test/not-found',
  })).toBe(undefined);
});
