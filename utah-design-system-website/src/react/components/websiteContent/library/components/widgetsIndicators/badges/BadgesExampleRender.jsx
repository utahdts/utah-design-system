import { Badge } from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').BadgesExamplePropsShape} BadgesExamplePropsShape */
/**
 * @param {object} props
 * @param {import('react').RefObject<HTMLButtonElement>} props.innerRef
 * @param {object} props.state
 * @param {BadgesExamplePropsShape} props.state.props
 * @returns {import('react').JSX.Element}
 */
export function BadgesExampleRender({
  state: {
    props: {
      children,
      className,
      title,
    },
  },
  innerRef,
}) {
  return (
    <div className="full-width flex justify-center">
      <button className="button button--solid" type="button" ref={innerRef}>
        Button
        <Badge
          className={className}
          title={title}
        >
          {children}
        </Badge>
      </button>
    </div>
  );
}
