import { Popup } from '@utahdts/utah-design-system';
import React, { useCallback, useRef } from 'react';

/** @typedef {import('utah-design-system-website').PopupsExamplePropsShape} PopupsExamplePropsShape */

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: PopupsExamplePropsShape}>} props.setState
 * @param {{props: PopupsExamplePropsShape}} props.state
 * @param {React.RefObject} props.innerRef
 * @returns {JSX.Element}
 */
export default function PopupsExampleRender({
  setState,
  state: {
    props: {
      hasCloseButton,
      isVisible,
      placement,
      popupType,
    },
  },
  innerRef,
}) {
  const buttonRef = /** @type {typeof useRef<HTMLButtonElement>} */ (useRef)(null);

  const onClickEvent = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      // eslint-disable-next-line no-param-reassign
      setState((draftState) => { draftState.props.isVisible = !draftState.props.isVisible; });
    },
    [setState]
  );
  const onMouseEnter = useCallback(
    () => setState((draftState) => { draftState.props.isVisible = true; }),
    [setState]
  );
  const onMouseLeave = useCallback(
    () => setState((draftState) => { draftState.props.isVisible = false; }),
    [setState]
  );

  return (
    <div ref={innerRef}>
      <button
        aria-controls="popups-example-render-popup"
        aria-expanded={!!isVisible}
        aria-haspopup="dialog"
        id="popups-example-render-button"
        onClick={popupType === 'onClick' ? onClickEvent : undefined}
        onMouseEnter={popupType === 'onHover' ? onMouseEnter : undefined}
        onMouseLeave={popupType === 'onHover' ? onMouseLeave : undefined}
        ref={buttonRef}
        type="button"
      >
        Toggle Popup
      </button>
      {/* @ts-ignore */}
      <Popup
        ariaLabelledBy="popups-example-render-button"
        id="popups-example-render-popup"
        hasCloseButton={!!hasCloseButton}
        isVisible={!!isVisible}
        // eslint-disable-next-line no-param-reassign
        onVisibleChange={useCallback(
          (_e, newIsVisible) => setState((draftState) => { draftState.props.isVisible = newIsVisible; }),
          [setState]
        )}
        placement={placement}
        referenceElement={buttonRef}
        role="dialog"
      >
        <div>
          <div className="font-size-l mb-spacing-xs"><strong>Example Popup</strong></div>
          <div>This is an example of a popup with content.</div>
        </div>
      </Popup>
    </div>
  );
}
