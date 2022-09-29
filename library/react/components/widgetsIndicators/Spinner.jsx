import PropTypes from 'prop-types';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  innerRef: RefShape,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  value: (props, propName, componentName) => {
    const number = Number(props[propName]);
    if (!Number.isNaN(props[propName]) && Number.isNaN(number)) {
      return new Error(`Invalid prop '${propName}' passed to ${componentName}. Must be a number.`);
    }
    if (number !== undefined && (number < 0 || number > 1)) {
      return new Error(`Invalid prop '${propName}' passed to ${componentName}. Must be a number between 0 and 1 (inclusive).`);
    }
    return false;
  },
};
const defaultProps = {
  children: null,
  className: null,
  id: null,
  innerRef: null,
  size: 60,
  strokeWidth: 10,
  value: NaN,
};

function Spinner({
  children,
  className,
  id,
  innerRef,
  size,
  strokeWidth,
  value,
}) {
  return (
    <div
      aria-valuemax="100"
      aria-valuemin="0"
      aria-valuenow="20.000000000000004"
      className={joinClassNames(
        className,
        'spinner'
      )}
      id={id}
      ref={innerRef}
      role="progressbar"
      aria-label={Number.isNaN(value) ? 'Loading...' : `Loading ${(value * 100).toFixed(2)}% complete`}
      size="50"
    >
      <div className="spinner__animation">
        <svg width={size} height={size} strokeWidth={strokeWidth} viewBox="-10.00 -10.00 120.00 120.00" role="presentation">
          <path className="spinner__track" d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90" />
          <path className="spinner__value" d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90" pathLength="280" strokeDasharray="280 280" strokeDashoffset={Number.isNaN(value) ? 0 : (280 * (1 - value))} />
        </svg>
      </div>
      {children}
    </div>
  );
}

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
