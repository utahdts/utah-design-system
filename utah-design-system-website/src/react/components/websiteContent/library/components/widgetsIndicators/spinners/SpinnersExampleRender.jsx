import { Spinner } from '@utahdts/utah-design-system';

/**
 * @param {string | undefined} str
 * @returns {number | undefined}
 */
function stringToNumber(str) {
  return str ? Number(str) || 0 : undefined;
}

/** @typedef {import('utah-design-system-website').SpinnersExamplePropsShape} SpinnersExamplePropsShape */

/**
 * @param {Object} props
 * @param {React.RefObject<HTMLDivElement>} props.innerRef
 * @param {import('use-immer').Updater<{props: SpinnersExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {SpinnersExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
export default function SpinnersExampleRender({
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
