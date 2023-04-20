import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};
const defaultProps = {};

function ExternalLink({ children, href, ...rest }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" {...rest}>
      {children}
      <span className="utds-new-tab-link-a11y">
        <span className="visually-hidden">opens in a new tab</span>
        <span className="utds-icon-after-external-link" aria-hidden="true" />
      </span>
    </a>
  );
}

ExternalLink.propTypes = propTypes;
ExternalLink.defaultProps = defaultProps;

export default ExternalLink;
