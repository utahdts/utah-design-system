import { Button, Tooltip } from '@utahdts/utah-design-system';
import { useRef } from 'react';

/** @typedef {import('utah-design-system-website').TooltipsExamplePropsShape} TooltipsExamplePropsShape */

/**
 * @param {object} props
 * @param {object} props.state
 * @param {TooltipsExamplePropsShape} props.state.props
 * @param {import('react').RefObject<HTMLDivElement>} props.innerRef
 * @returns {import('react').JSX.Element}
 */
export function TooltipsExampleRender({
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
      <Button
        className="button icon-button button--outlined"
        onClick={() => { }}
        innerRef={referenceElement}
        type="button"
      >
        <span className="utds-icon-before-gear" aria-hidden="true" />
        <span className="visually-hidden">{popupText}</span>
      </Button>
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
