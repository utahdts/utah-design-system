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
      isPopupVisible,
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
        isPopupVisible={isPopupVisible || undefined}
        offset={{
          mainAxis: Number(offsetSkidding) || 0,
          crossAxis: Number(offsetDistance) || 0,
          alignmentAxis: 0
        }}
        placement={placement}
        referenceElement={referenceElement.current}
      >
        {popupText || ''}
      </Tooltip>
    </div>
  );
}
