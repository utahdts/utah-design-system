import { Pagination } from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('utah-design-system-website').PaginationExamplePropsShape} PaginationExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: PaginationExamplePropsShape}>} props.setState
 * @param {{props: PaginationExamplePropsShape}} props.state
 * @param {import('react').RefObject<HTMLElement | null>} props.innerRef
 * @returns {import('react').JSX.Element | null}
 */
export function PaginationExampleRender({
  setState,
  state: {
    props: {
      className,
      id,
      itemsPerPage,
      totalNumberItems,
      value,
      wrapInElement,
    },
  },
  innerRef,
}) {
  const valueNumber = Number(value);
  return (
    (valueNumber || valueNumber === 0)
      ? (
        <div style={{ width: '80%' }}>
          <Pagination
            className={className}
            id={id}
            innerRef={innerRef}
            onChange={(newPageIndex) => setState((draftState) => { draftState.props.value = `${newPageIndex}`; })}
            itemsPerPage={Number(itemsPerPage)}
            totalNumberItems={Number(totalNumberItems)}
            value={Number(value)}
            wrapInElement={wrapInElement}
          />
        </div>
      )
      : null
  );
}
