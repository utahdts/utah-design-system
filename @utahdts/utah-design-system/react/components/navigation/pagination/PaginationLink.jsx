import { joinClassNames } from '../../../util/joinClassNames';

/**
 * @param {object} props
 * @param {string} [props.className] className to put on this element
 * @param {number} props.currentPageIndex the currently selected page
 * @param {string} props.label the actual value shown on the page
 * @param {number} props.numberOfPages total number of pages
 * @param {(newPageIndex: number) => void} props.onChange controlled component: page # changed
 * @param {number} props.pageIndex index of this page out of all the pages (3 means it's the 4th page, 0 means first page)
 * @returns {import('react').JSX.Element}
 */
export function PaginationLink({
  className,
  currentPageIndex,
  onChange,
  numberOfPages,
  label,
  pageIndex,
  ...rest
}) {
  return (
    <li className="pagination__list-item">
      <a
        aria-current={(pageIndex === currentPageIndex) ? 'page' : undefined}
        aria-label={`${(pageIndex === (numberOfPages - 1)) ? 'Last page, ' : ''}${(pageIndex === currentPageIndex) ? '' : 'Go to '}page ${label}`}
        className={joinClassNames(
          'pagination__link',
          className,
          currentPageIndex !== pageIndex && 'pagination__link--inactive',
          currentPageIndex === pageIndex && 'pagination__link--active'
        )}
        href={`#pagination-${pageIndex}`}
        onClick={() => onChange(pageIndex)}
        {...rest}
      >
        {label}
      </a>
    </li>
  );
}
