import { Spinner } from '@utahdts/utah-design-system';
import React from 'react';

/**
 * @param {string | undefined} str
 * @returns {number | undefined}
 */
function stringToNumber(str) {
  return str ? Number(str) || 0 : undefined;
}

/** @typedef {import('utah-design-system-website').SpinnersExamplePropsShape} SpinnersExamplePropsShape */

/**
 * @param {object} props
 * @param {React.RefObject<HTMLDivElement>} props.innerRef
 * @param {object} props.state
 * @param {SpinnersExamplePropsShape} props.state.props
 * @returns {React.JSX.Element}
 */
export function SpinnersExampleRender({
  state: {
    props: {
      className,
      id,
      label,
      size,
      strokeWidth,
      value,
    },
  },
  innerRef,
}) {
  return (
    <div style={{ width: '80%' }}>
      <Spinner
        className={className}
        id={id}
        innerRef={innerRef}
        size={stringToNumber(size)}
        strokeWidth={stringToNumber(strokeWidth)}
        value={stringToNumber(value)}
      >
        {label}
      </Spinner>
    </div>
  );
}
