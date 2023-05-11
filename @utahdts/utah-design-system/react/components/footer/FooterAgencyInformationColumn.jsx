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
function FooterAgencyInformationColumn({ children }) {
  return (
    <div className="footer-agency-information__column">
      {children}
    </div>
  );
}

FooterAgencyInformationColumn.propTypes = propTypes;
FooterAgencyInformationColumn.defaultProps = defaultProps;

export default FooterAgencyInformationColumn;
