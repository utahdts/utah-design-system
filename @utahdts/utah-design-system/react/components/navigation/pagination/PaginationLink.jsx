import PropTypes from 'prop-types';
import joinClassNames from '../../../util/joinClassNames';

const propTypes = {
  // className to put on this element
  className: PropTypes.string,
  // the currently selected page
  currentPageIndex: PropTypes.number.isRequired,
  // the actual value shown on the page
  label: PropTypes.string.isRequired,
  // controlled component: page # changed
  onChange: PropTypes.func.isRequired,
  // index of this page out of all the pages (3 means it's the 4th page, 0 means first page)
  pageIndex: PropTypes.number.isRequired,
};
const defaultProps = {
  className: null,
};

function PaginationLink({
  className,
  currentPageIndex,
  onChange,
  label,
  pageIndex,
  ...rest
}) {
  return (
    <li className="pagination__list-item">
      <a
        aria-current={(pageIndex === currentPageIndex) ? 'page' : undefined}
        className={joinClassNames(
          'pagination__link',
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

PaginationLink.propTypes = propTypes;
PaginationLink.defaultProps = defaultProps;

export default PaginationLink;
