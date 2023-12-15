import { Pagination } from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('utah-design-system-website').PaginationExamplePropsShape} PaginationExamplePropsShape */

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: PaginationExamplePropsShape}>} props.setState
 * @param {{props: PaginationExamplePropsShape}} props.state
 * @param {React.RefObject} props.innerRef
 * @returns {JSX.Element | null}
 */
export default function PaginationExampleRender({
  setState,
  state: {
    props: {
      className,
      id,
      pageSize,
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
            pageSize={Number(pageSize)}
            totalNumberItems={Number(totalNumberItems)}
            value={Number(value)}
            wrapInElement={wrapInElement}
          />
        </div>
      )
      : null
  );
}
