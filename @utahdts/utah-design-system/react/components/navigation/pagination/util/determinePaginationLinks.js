/**
 * @param {object} param
 * @param {number} param.currentPageIndex
 * @param {number} param.numberOfPages
 * @returns {{ isEllipsis: boolean, title?: string, label: string | null, pageIndex: number }[]}
 */
export function determinePaginationLinks({ currentPageIndex, numberOfPages }) {
  const numberOfPagesAtLeastOne = Math.max(numberOfPages, 1);
  let currentPageIndexUse = currentPageIndex || 0;
  if (currentPageIndex < 0 || currentPageIndex >= numberOfPagesAtLeastOne) {
    // eslint-disable-next-line no-console
    console.warn(`determinePaginationLinks: currentPageIndex out of range ${currentPageIndex}:${numberOfPages}`);
    currentPageIndexUse = 0;
  }
  if (!Number(currentPageIndex) && currentPageIndex !== 0) {
    // eslint-disable-next-line no-console
    console.warn(`determinePaginationLinks: bad currentPageIndex number ${currentPageIndex}:${numberOfPages}`);
    currentPageIndexUse = 0;
  }

  let slotsConsumed = 0;

  // keep 1st, last, currentPage and one less and one more than the current page
  const pageIndexKeepers = Array.from({ length: numberOfPagesAtLeastOne }).fill(false);
  pageIndexKeepers[0] = true;
  pageIndexKeepers[numberOfPagesAtLeastOne - 1] = true;
  // if one page then there's only one slot, so can't consume 2 slots (⌐⊙_⊙)
  slotsConsumed += numberOfPagesAtLeastOne === 1 ? 1 : 2;

  // if not last/first page, then mark current as a keeper
  if (currentPageIndexUse !== 0 && currentPageIndexUse !== numberOfPagesAtLeastOne - 1) {
    pageIndexKeepers[currentPageIndexUse] = true;
    slotsConsumed += 1;
  }

  const totalSlots = Math.min(7, numberOfPagesAtLeastOne);
  let currentPageLeft = currentPageIndexUse - 1;
  let currentPageRight = currentPageIndexUse + 1;

  while (true) {
    let slotsLeft = totalSlots - slotsConsumed;

    // ellipses will consume 2 slots
    // - left ellipsis (will be checked below if it will disappear)
    if (currentPageLeft > 0) {
      slotsLeft -= 1;
    }
    // - right ellipsis (will be checked below if it will disappear)
    if (currentPageRight < numberOfPagesAtLeastOne - 1) {
      slotsLeft -= 1;
    }

    // try to consume a number to the left of center
    if (slotsLeft && currentPageLeft > 0) {
      slotsConsumed += 1;
      pageIndexKeepers[currentPageLeft] = true;
      currentPageLeft -= 1;
      // if reached an edge, then the ellipsis slot was consumed, so don't change slotsLeft
      if (currentPageLeft > 0) {
        slotsLeft -= 1;
      }
    }

    // try to consume a number to the right of center
    if (slotsLeft && currentPageRight < numberOfPagesAtLeastOne - 1) {
      slotsConsumed += 1;
      pageIndexKeepers[currentPageRight] = true;
      currentPageRight += 1;
      // if reached an edge, then the ellipsis slot was consumed, so don't change slotsLeft
      if (currentPageRight < numberOfPagesAtLeastOne - 1) {
        slotsLeft -= 1;
      }
    }

    if (!slotsLeft) {
      break;
    }
  }

  // formulate links
  const paginationLinks = [];

  // push first index
  paginationLinks.push({
    isEllipsis: false,
    label: '1',
    pageIndex: 0,
  });

  // replace ellipsis left
  if (currentPageLeft === 1) {
    // only one page# being replaced, so just show the page# instead of ellipsis
    paginationLinks.push({
      isEllipsis: false,
      pageIndex: currentPageLeft,
      label: `${currentPageLeft + 1}`,
    });
  } else if (currentPageLeft > 0) {
    // push ellipsis
    paginationLinks.push({
      isEllipsis: true,
      label: null,
      pageIndex: NaN,
    });
  }

  // push all 'true' keepers (not start/end)
  for (let pageIndexKeepersIndex = 1; pageIndexKeepersIndex < pageIndexKeepers.length - 1; pageIndexKeepersIndex += 1) {
    if (pageIndexKeepers[pageIndexKeepersIndex]) {
      paginationLinks.push({
        isEllipsis: false,
        label: `${pageIndexKeepersIndex + 1}`,
        pageIndex: pageIndexKeepersIndex,
      });
    }
  }

  if (numberOfPagesAtLeastOne - currentPageRight === 2) {
    // push currentPageRight
    paginationLinks.push({
      isEllipsis: false,
      label: `${currentPageRight + 1}`,
      pageIndex: currentPageRight,
    });
  } else if (currentPageRight < numberOfPagesAtLeastOne - 1) {
    // push ellipsis
    paginationLinks.push({
      isEllipsis: true,
      label: null,
      pageIndex: NaN,
    });
  }

  // push last index
  if (numberOfPagesAtLeastOne > 1) {
    paginationLinks.push({
      isEllipsis: false,
      label: `${numberOfPagesAtLeastOne}`,
      pageIndex: numberOfPagesAtLeastOne - 1,
    });
  }

  return paginationLinks;
}
