import PropTypes from 'prop-types';
import { useEffect } from 'react';
import useComponentState from '../../hooks/forms/useComponentState';
import joinClassNames from '../../util/joinClassNames';
import Button from '../buttons/Button';

const propTypes = {
  className: PropTypes.string,
  // starting page number (for uncontrolled)
  defaultValue: PropTypes.number,
  id: PropTypes.string,
  // controlled component: page # changed
  onChange: PropTypes.func,
  // how many items on each "page"
  pageSize: PropTypes.number.isRequired,
  // how many total items there are in the full data set
  totalNumberItems: PropTypes.number.isRequired,
  // controlled component: value is the current page number (0 based-index)
  value: PropTypes.number,
};
const defaultProps = {
  className: null,
  defaultValue: 0,
  id: null,
  onChange: null,
  value: NaN,
};

function Pagination({
  className,
  defaultValue,
  id,
  onChange,
  pageSize,
  totalNumberItems,
  value,
  ...rest
}) {
  const { onChange: currentOnChange, value: currentValue } = useComponentState({ defaultValue, onChange, value });
  const totalPages = Math.ceil(totalNumberItems / pageSize);

  // check if current page is out of range...
  useEffect(
    () => {
      // if 0 records then 0 pages and 0 value is OK (0-based page index)
      if ((totalPages || currentValue) && currentValue >= totalPages) {
        currentOnChange(totalPages - 1);
      }
    },
    [currentValue, pageSize, totalNumberItems]
  );

  return (
    <section className={joinClassNames('some-pagination-classname', className)} id={id} {...rest}>
      <Button
        isDisabled={currentValue === 0}
        onClick={() => currentOnChange(0)}
      >
        First
      </Button>
      <Button
        isDisabled={currentValue === 0}
        onClick={() => currentOnChange(Math.max(0, value - 1))}
      >
        Previous
      </Button>

      <div className="some-pagination-classname__page-buttons">
        {
          Array.from({ length: totalPages }).map((_, pageIndex) => (
            <Button
              className={joinClassNames('pagination-item', pageIndex === currentValue ? 'pagination-item--active' : '')}
              // eslint-disable-next-line react/no-array-index-key
              key={`pagination-page-${id}-${pageIndex}`}
              onClick={() => currentOnChange(pageIndex)}
            >
              {pageIndex + 1}
            </Button>
          ))
        }
      </div>

      <Button
        isDisabled={!totalPages || currentValue === totalPages - 1}
        onClick={() => currentOnChange(Math.min(totalPages - 1, value + 1))}
      >
        Next
      </Button>
      <Button
        isDisabled={!totalPages || currentValue === totalPages - 1}
        onClick={() => currentOnChange(totalPages - 1)}
      >
        Last
      </Button>
    </section>
  );
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
