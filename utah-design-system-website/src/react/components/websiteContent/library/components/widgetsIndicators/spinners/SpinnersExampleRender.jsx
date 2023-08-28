// @ts-nocheck
import { RefShape, Spinner } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React from 'react';
import SpinnersExamplePropsShape from '../../../../../../propTypesShapes/SpinnersExamplePropsShape';

const propTypes = {
  innerRef: RefShape,
  state: PropTypes.shape({
    props: SpinnersExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {
  innerRef: null,
};

/**
 * @param {string} str
 * @returns {number | undefined}
 */
function stringToNumber(str) {
  return str ? Number(str) || 0 : undefined;
}

function SpinnersExampleRender({
  state: {
    props: {
      className,
      id,
      label,
      // eslint-disable-next-line no-unused-vars
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

SpinnersExampleRender.propTypes = propTypes;
SpinnersExampleRender.defaultProps = defaultProps;

export default SpinnersExampleRender;
