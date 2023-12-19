import React, {
  useCallback, useEffect, useMemo, useRef
} from 'react';
import { useImmer } from 'use-immer';
import { useAriaMessaging } from '../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import { ICON_BUTTON_APPEARANCE } from '../../../enums/buttonEnums';
import { useRefAlways } from '../../../hooks/useRefAlways';
import { joinClassNames } from '../../../util/joinClassNames';
import { IconButton } from '../../buttons/IconButton';
import { PaginationLink } from './PaginationLink';
import { determinePaginationLinks } from './util/determinePaginationLinks';

/**
 * @param {object} props
 * @param {string} [props.ariaLabel] ariaLabel is used by accessibility to describe the purpose of the pagination
 * @param {string} [props.className] can add your own className to the pagination
 * @param {number} [props.defaultValue] starting page number (for uncontrolled - what good is an uncontrolled Pagination element?)
 * @param {string} [props.id] id to put on the pagination element
 * @param {React.RefObject<HTMLElement | null>} [props.innerRef]
 * @param {(newValue: number) => void} [props.onChange] controlled component: page # changed
 * @param {number} props.pageSize how many items on each "page"
 * @param {number} props.totalNumberItems how many total items there are in the full data set
 * @param {number} [props.value] controlled component: value is the current page number (0 based-index)
 * @param {'div' | 'nav'} [props.wrapInElement] if wrapping in `nav`, make sure to provide the ariaLabel
 * @returns {React.JSX.Element}
 */
export function Pagination({
  ariaLabel,
  className,
  defaultValue = 0,
  id,
  innerRef,
  onChange,
  pageSize,
  totalNumberItems,
  value = 0,
  wrapInElement = 'div',
  ...rest
}) {
  const [currentValue, setCurrentValue] = useImmer(value === undefined ? defaultValue : value);
  const valueUse = value === undefined ? currentValue : value;

  const valueRef = useRefAlways(valueUse ?? 0);
  const {
    onChange: currentOnChange,
    value: currentPageIndex,
    valueRef: currentPageIndexRef,
  } = useMemo(
    () => ({
      onChange: onChange || setCurrentValue,
      value: valueUse ?? 0,
      valueRef,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onChange, valueUse]
  );

  const { addPoliteMessage } = useAriaMessaging();
  const numberOfPages = Math.ceil(totalNumberItems / pageSize);
  const oldIndex = useRef(currentPageIndex);

  // check if current page is out of range...
  useEffect(
    () => {
      // if 0 records then 0 pages and 0 value is OK (0-based page index)
      if ((numberOfPages || currentPageIndex) && (currentPageIndex ?? NaN) >= numberOfPages) {
        currentOnChange(numberOfPages - 1);
      }
      if (currentPageIndex !== oldIndex.current) {
        oldIndex.current = currentPageIndex;
        addPoliteMessage(`You are now on page ${(currentPageIndex || 0) + 1}`);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentOnChange, currentPageIndex, numberOfPages]
  );

  const paginationLinks = useMemo(
    () => determinePaginationLinks({ currentPageIndex, numberOfPages }),
    [currentPageIndex, numberOfPages]
  );
  const WrapInElement = wrapInElement || 'div';
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    // @ts-ignore
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
                  label={paginationLink.label ?? ''}
                  onChange={currentOnChange}
                  pageIndex={paginationLink.pageIndex}
                  numberOfPages={numberOfPages}
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
