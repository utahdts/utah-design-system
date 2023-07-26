import PropTypes from 'prop-types';

const propTypes = {
  // a description to show to screen readers about what the callback will be performing
  actionDescription: PropTypes.string.isRequired,
  // a function to call when the link is clicked
  callback: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  // the href to show in the link, but not for actual navigation
  href: PropTypes.string.isRequired,
};
const defaultProps = {};

function LinkCallback({
  actionDescription,
  callback,
  children,
  href,
  ...rest
}) {
  return (
    <a href={href} onClick={(e) => { e.preventDefault(); e.stopPropagation(); callback(e); }} {...rest}>
      {children}
      <span className="utds-new-tab-link-a11y">
        <span className="visually-hidden">{actionDescription}</span>
      </span>
    </a>
  );
}

LinkCallback.propTypes = propTypes;
LinkCallback.defaultProps = defaultProps;

export default LinkCallback;
