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
      throw new Error(`Invalid prop '${propName}' passed to ${componentName}. Must be a number.`);
    }
    if (number !== undefined && (number < 0 || number > 1)) {
      throw new Error(`Invalid prop '${propName}' passed to ${componentName}. Must be a number between 0 and 1 (inclusive).`);
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
  ...rest
}) {
  const strokeWidthUse = Number.isNaN(strokeWidth) ? 10 : strokeWidth;
  const strokeWidthPlus1Use = Number.isNaN(strokeWidth) ? 10 : (strokeWidth + 1);
  const widthUse = Number.isNaN(size) ? undefined : size;
  return (
    <div
      aria-valuemax="100"
      aria-valuemin="0"
      aria-valuenow={(Number.isNaN(value) ? 0.25 : value) * 100}
      className={joinClassNames(
        className,
        'spinner',
        Number.isNaN(value) ? 'spinner--indeterminate' : 'spinner--determinate'
      )}
      id={id}
      ref={innerRef}
      role="progressbar"
      aria-label={Number.isNaN(value) ? 'Loading...' : `Loading ${(value * 100)}% complete`}
      {...rest}
    >
      <div className="spinner__animation">
        <svg
          height={widthUse}
          role="presentation"
          viewBox="-10.00 -10.00 120.00 120.00"
          width={widthUse}
        >
          <path
            strokeWidth={strokeWidthUse}
            className="spinner__track"
            d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
          />
          <path
            className="spinner__value"
            d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
            pathLength="360"
            strokeDasharray="360 360"
            strokeDashoffset={360 * (1 - (Number.isNaN(value) ? 0.25 : value))}
            // add just a little stroke width to prevent the background gray path from bleeding along the edges
            // which was causing a "jagged" look to the blue path
            strokeWidth={strokeWidthPlus1Use}
          />
        </svg>
      </div>
      <div className="spinner__children">
        {children}
      </div>
    </div>
  );
}

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
