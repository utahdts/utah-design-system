import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo } from 'react';
import { ICON_BUTTON_APPEARANCE } from '../../../enums/buttonEnums';
import useComponentState from '../../../hooks/forms/useComponentState';
import joinClassNames from '../../../util/joinClassNames';
import IconButton from '../../buttons/IconButton';
import PaginationLink from './PaginationLink';
import determinePaginationLinks from './util/determinePaginationLinks';
import RefShape from '../../../propTypesShapes/RefShape';

const propTypes = {
  // ariaLabel is used by accessibility to describe the purpose of the pagination
  ariaLabel: PropTypes.string,
  // can add your own className to the pagination
  className: PropTypes.string,
  // starting page number (for uncontrolled - what good is an uncontrolled Pagination element?)
  defaultValue: PropTypes.number,
  // id to put on the pagination element
  id: PropTypes.string,
  innerRef: RefShape,
  // (newPageIndex) => { ... do something ... }; controlled component: page # changed
  onChange: PropTypes.func,
  // how many items on each "page"
  pageSize: PropTypes.number.isRequired,
  // how many total items there are in the full data set
  totalNumberItems: PropTypes.number.isRequired,
  // controlled component: value is the current page number (0 based-index)
  value: PropTypes.number,
  // if wrapping in `nav`, make sure to provide the ariaLabel
  wrapInElement: PropTypes.oneOf(['div', 'nav']),
};
const defaultProps = {
  ariaLabel: null,
  className: null,
  defaultValue: 0,
  id: null,
  innerRef: null,
  onChange: null,
  value: 0,
  wrapInElement: 'div',
};

/**
 * @param {Object} props
 * @param {string} [props.ariaLabel]
 * @param {string} [props.className]
 * @param {number} [props.defaultValue]
 * @param {string} props.id
 * @param {React.RefObject} props.innerRef
 * @param {(newValue: number) => void} [props.onChange]
 * @param {number} props.pageSize
 * @param {number} props.totalNumberItems
 * @param {number} [props.value]
 * @param {Object} [props.wrapInElement]
 * @returns {JSX.Element}
 */
function Pagination({
  ariaLabel,
  className,
  defaultValue,
  id,
  innerRef,
  onChange,
  pageSize,
  totalNumberItems,
  value,
  wrapInElement,
  ...rest
}) {
  const { onChange: currentOnChange, value: currentPageIndex, valueRef: currentPageIndexRef } = useComponentState({ defaultValue, onChange, value });
  const numberOfPages = Math.ceil(totalNumberItems / pageSize);

  // check if current page is out of range...
  useEffect(
    () => {
      // if 0 records then 0 pages and 0 value is OK (0-based page index)
      if ((numberOfPages || currentPageIndex) && currentPageIndex >= numberOfPages) {
        currentOnChange(numberOfPages - 1);
      }
    },
    [currentOnChange, currentPageIndex, numberOfPages]
  );

  const paginationLinks = useMemo(
    () => determinePaginationLinks({ currentPageIndex, numberOfPages }),
    [currentPageIndex, numberOfPages]
  );
  const WrapInElement = wrapInElement || 'div';
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <WrapInElement ref={innerRef} className={joinClassNames('pagination', className)} id={id} aria-label={ariaLabel} {...rest}>
      <ul>
        <IconButton
          appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
          className="pagination__prev"
          icon={<span className="utds-icon-before-arrow-left" aria-hidden="true" />}
          isDisabled={currentPageIndex === 0}
          onClick={useCallback(() => currentOnChange(currentPageIndexRef.current - 1), [currentOnChange, currentPageIndexRef])}
          title="Previous page"
        />

        {
          paginationLinks.map((paginationLink, paginationLinkIndex) => (
            paginationLink.isEllipsis
              ? (
                <span
                  className="pagination__ellipsis"
                  // eslint-disable-next-line react/no-array-index-key
                  key={`pagination-link__ellipsis__${paginationLinkIndex}`}
                >
                  <span className="utds-icon-before-more-horizontal" aria-hidden="true" />
                </span>
              )
              : (
                <PaginationLink
                  key={`pagination-link__${paginationLink.pageIndex}__${paginationLink.title}`}
                  currentPageIndex={currentPageIndex}
                  label={paginationLink.label}
                  onChange={currentOnChange}
                  pageIndex={paginationLink.pageIndex}
                />
              )
          ))
        }

        <IconButton
          appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
          className="pagination__next"
          icon={<span className="utds-icon-before-arrow-right" aria-hidden="true" />}
          isDisabled={currentPageIndex === numberOfPages - 1}
          onClick={useCallback(() => currentOnChange(currentPageIndexRef.current + 1), [currentOnChange, currentPageIndexRef])}
          title="Next page"
        />
      </ul>
    </WrapInElement>
  );
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
