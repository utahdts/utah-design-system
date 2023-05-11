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
function FooterAgencyInformation({ children }) {
  return (
    <div className="footer-agency-information utah-design-system">
      {children}
    </div>
  );
}

FooterAgencyInformation.propTypes = propTypes;
FooterAgencyInformation.defaultProps = defaultProps;

export default FooterAgencyInformation;
