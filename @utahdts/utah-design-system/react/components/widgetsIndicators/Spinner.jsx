import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {object} props
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} [props.id]
 * @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
 * @param {number} [props.size]
 * @param {number} [props.strokeWidth]
 * @param {number} [props.value]
 * @returns {import('react').JSX.Element}
 */
export function Spinner({
  children,
  className,
  id,
  innerRef,
  size = 60,
  strokeWidth = 10,
  value = NaN,
  ...rest

}) {
  const strokeWidthUse = Number.isNaN(strokeWidth) ? 10 : strokeWidth;
  const strokeWidthPlus1Use = Number.isNaN(strokeWidth) ? 10 : ((strokeWidth ?? 0) + 1);
  const widthUse = Number.isNaN(size) ? undefined : size;

  return (
    <div
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={(Number.isNaN(value) ? undefined : (value ?? 0) * 100)}
      className={joinClassNames(
        className,
        'spinner',
        Number.isNaN(value) ? 'spinner--indeterminate' : 'spinner--determinate'
      )}
      id={id ?? undefined}
      ref={innerRef}
      role="progressbar"
      aria-label={Number.isNaN(value) ? 'Loading...' : `Loading ${((value ?? 0) * 100)}% complete`}
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
            strokeDashoffset={360 * (1 - (Number.isNaN(value) ? 0.25 : (value ?? 0)))}
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
