import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
const defaultProps = {
  title: 'Follow us online',
};

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {String|null} props.title
 * @returns {JSX.Element}
 */
function FooterSocialMediaBar({ children, title }) {
  return (
    <div className="utah-design-system">
      <div className="footer-social-media-bar">
        <div className="footer-social-media-bar__follow-us">{title}</div>
        <div className="footer-social-media-bar__icon-bar">
          {children}
        </div>
      </div>
    </div>
  );
}

FooterSocialMediaBar.propTypes = propTypes;
FooterSocialMediaBar.defaultProps = defaultProps;

export default FooterSocialMediaBar;
