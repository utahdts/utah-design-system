// @ts-check
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.node.isRequired,
};
const defaultProps = {};

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
function FooterSocialMediaBar({ children }) {
  return (
    <div className="footer-social-media-bar utah-design-system">
      <div className="footer-social-media-bar__follow-us">Follow us online</div>
      <div className="footer-social-media-bar__icon-bar">
        {children}
      </div>
    </div>
  );
}

FooterSocialMediaBar.propTypes = propTypes;
FooterSocialMediaBar.defaultProps = defaultProps;

export default FooterSocialMediaBar;
