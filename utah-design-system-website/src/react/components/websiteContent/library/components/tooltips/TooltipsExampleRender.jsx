// @ts-check
import { Tooltip } from '@utahdts/utah-design-system';
import React, { useRef } from 'react';

/** @typedef {import('../../../../../../typedefs.d').TooltipsExamplePropsShape} TooltipsExamplePropsShape */

/**
 * @param {Object} props
 * @param {Object} props.state
 * @param {TooltipsExamplePropsShape} props.state.props
 * @param {React.RefObject} props.innerRef
 * @returns {JSX.Element}
 */
export default function TooltipsExampleRender({
  state: {
    props: {
      isPopperVisible,
      offsetDistance,
      offsetSkidding,
      placement,
      popupText,
    },
  },
  innerRef,
}) {
  const referenceElement = /** @type {typeof useRef<HTMLButtonElement | null>} */ (useRef)(null);
  return (
    <div ref={innerRef}>
      <button
        className="button icon-button button--outlined"
        onClick={() => { }}
        ref={referenceElement}
        type="button"
      >
        <span className="utds-icon-before-gear" aria-hidden="true" />
        <span className="visually-hidden">{popupText}</span>
      </button>
      <Tooltip
        isPopperVisible={isPopperVisible || undefined}
        offset={[Number(offsetDistance) || 0, Number(offsetSkidding) || 0]}
        placement={placement}
        referenceElement={referenceElement.current}
      >
        {popupText || ''}
      </Tooltip>
    </div>
  );
}
