import {
  describe,
  expect,
  test,
  vi,
} from 'vitest';
import { determinePaginationLinks } from '../../../../../../react/components/navigation/pagination/util/determinePaginationLinks';

describe('determinePaginationLinks: scenarios', () => {
  // eslint-disable-next-line no-console
  const consoleWarn = console.warn;
  // eslint-disable-next-line no-console
  console.warn = vi.fn();

  test.each([
    // tests: [#Pages, pageIndex, pageIndexesResult]
    // even if zero pages and current page 1, still reports 1
    [-1, 1, [0]],
    [0, 1, [0]],

    // even if zero pages, still reports one page
    [0, 0, [0]],

    [1, 0, [0]],

    [2, 0, [0, 1]],
    [2, 1, [0, 1]],

    [3, 0, [0, 1, 2]],
    [3, 1, [0, 1, 2]],
    [3, 2, [0, 1, 2]],

    [4, 0, [0, 1, 2, 3]],
    [4, 1, [0, 1, 2, 3]],
    [4, 2, [0, 1, 2, 3]],
    [4, 3, [0, 1, 2, 3]],

    [5, 0, [0, 1, 2, 3, 4]],
    [5, 1, [0, 1, 2, 3, 4]],
    [5, 2, [0, 1, 2, 3, 4]],
    [5, 3, [0, 1, 2, 3, 4]],
    [5, 4, [0, 1, 2, 3, 4]],

    [6, 0, [0, 1, 2, 3, 4, 5]],
    [6, 1, [0, 1, 2, 3, 4, 5]],
    [6, 2, [0, 1, 2, 3, 4, 5]],
    [6, 3, [0, 1, 2, 3, 4, 5]],
    [6, 4, [0, 1, 2, 3, 4, 5]],
    [6, 5, [0, 1, 2, 3, 4, 5]],

    [7, 0, [0, 1, 2, 3, 4, 5, 6]],
    [7, 1, [0, 1, 2, 3, 4, 5, 6]],
    [7, 2, [0, 1, 2, 3, 4, 5, 6]],
    [7, 3, [0, 1, 2, 3, 4, 5, 6]],
    [7, 4, [0, 1, 2, 3, 4, 5, 6]],
    [7, 5, [0, 1, 2, 3, 4, 5, 6]],
    [7, 6, [0, 1, 2, 3, 4, 5, 6]],

    [8, 0, [0, 1, 2, 3, 4, NaN, 7]],
    [8, 1, [0, 1, 2, 3, 4, NaN, 7]],
    [8, 2, [0, 1, 2, 3, 4, NaN, 7]],
    [8, 3, [0, 1, 2, 3, 4, NaN, 7]],
    [8, 4, [0, NaN, 3, 4, 5, 6, 7]],
    [8, 5, [0, NaN, 3, 4, 5, 6, 7]],
    [8, 6, [0, NaN, 3, 4, 5, 6, 7]],
    [8, 7, [0, NaN, 3, 4, 5, 6, 7]],

    [9, 0, [0, 1, 2, 3, 4, NaN, 8]],
    [9, 1, [0, 1, 2, 3, 4, NaN, 8]],
    [9, 2, [0, 1, 2, 3, 4, NaN, 8]],
    [9, 3, [0, 1, 2, 3, 4, NaN, 8]],
    [9, 4, [0, NaN, 3, 4, 5, NaN, 8]],
    [9, 5, [0, NaN, 4, 5, 6, 7, 8]],
    [9, 6, [0, NaN, 4, 5, 6, 7, 8]],
    [9, 7, [0, NaN, 4, 5, 6, 7, 8]],
    [9, 8, [0, NaN, 4, 5, 6, 7, 8]],

    // max: [?, ?, [0, ..., 3, 4, 5, ..., 8]] after this, the scenarios all prove themselves the same? because the ellipsis swallow two or more #s

    [23, 0, [0, 1, 2, 3, 4, NaN, 22]],
    [23, 1, [0, 1, 2, 3, 4, NaN, 22]],
    [23, 2, [0, 1, 2, 3, 4, NaN, 22]],
    [23, 3, [0, 1, 2, 3, 4, NaN, 22]],
    [23, 4, [0, NaN, 3, 4, 5, NaN, 22]],
    [23, 5, [0, NaN, 4, 5, 6, NaN, 22]],
    [23, 6, [0, NaN, 5, 6, 7, NaN, 22]],
    // ...1, 2, skip a few...
    [23, 18, [0, NaN, 17, 18, 19, NaN, 22]],
    [23, 19, [0, NaN, 18, 19, 20, 21, 22]],
    [23, 20, [0, NaN, 18, 19, 20, 21, 22]],
    [23, 21, [0, NaN, 18, 19, 20, 21, 22]],
    [23, 22, [0, NaN, 18, 19, 20, 21, 22]],

  ])(
    'determinePaginationLinks: scenarios: %i, %i',
    (numberOfPages, currentPageIndex, expectedPageIndexes) => {
      const paginationLinks = determinePaginationLinks({ currentPageIndex, numberOfPages });
      expect(paginationLinks.length).toBe(expectedPageIndexes.length);
      const paginationLinksPageIndexes = paginationLinks.map((paginationLink) => paginationLink.pageIndex);
      expectedPageIndexes.forEach((pageIndex, pageIndexIndex) => (
        expect(paginationLinksPageIndexes[pageIndexIndex]).toBe(pageIndex)
      ));
    }
  );
  // eslint-disable-next-line no-console
  console.warn = consoleWarn;
});
