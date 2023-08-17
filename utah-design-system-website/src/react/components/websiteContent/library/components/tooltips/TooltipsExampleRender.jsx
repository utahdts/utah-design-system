// @ts-check
/* eslint-disable react/jsx-props-no-spreading */
import { RefShape, Tooltip } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import TooltipsExamplePropsShape from '../../../../../propTypesShapes/TooltipsExamplePropsShape';

/** @typedef {import('../../../../../../typedefs.d').TooltipsExamplePropsShape} TooltipsExamplePropsShape */

const propTypes = {
  state: PropTypes.shape({
    props: TooltipsExamplePropsShape.isRequired,
  }).isRequired,
  innerRef: RefShape,
};
const defaultProps = {
  innerRef: null,
};

/**
 * @param {Object} props
 * @param {Object} props.state
 * @param {TooltipsExamplePropsShape} props.state.props
 * @param {React.RefObject} props.innerRef
 * @returns {JSX.Element}
 */
function TooltipsExampleRender({
  state: {
    props: {
      isPopperVisible,
      offsetDistance,
      offsetSkidding,
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
        <span className="visually-hidden">Gear Icon with Tooltip</span>
      </button>
      <Tooltip
        isPopperVisible={isPopperVisible || undefined}
        offset={[Number(offsetDistance) || 0, Number(offsetSkidding) || 0]}
        referenceElement={referenceElement.current}
      >
        {popupText || ''}
      </Tooltip>
    </div>
  );
}

TooltipsExampleRender.propTypes = propTypes;
TooltipsExampleRender.defaultProps = defaultProps;

export default TooltipsExampleRender;
