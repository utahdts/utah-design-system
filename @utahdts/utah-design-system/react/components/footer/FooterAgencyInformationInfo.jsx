/* eslint-disable react/jsx-one-expression-per-line */
// @ts-check
import PropTypes from 'prop-types';
import React from 'react';

/** @typedef {import ('../../jsDocTypes').Address} Address */

const AddressShape = PropTypes.shape({
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  streetAddress1: PropTypes.string.isRequired,
  streetAddress2: PropTypes.string,
  zipCode: PropTypes.string.isRequired,
});

const propTypes = {
  agencyTitleFirstLine: PropTypes.string.isRequired,
  agencyTitle: PropTypes.string.isRequired,
  address: AddressShape.isRequired,
  email: PropTypes.string.isRequired,
  logo: PropTypes.node.isRequired,
  phone: PropTypes.string.isRequired,
};
const defaultProps = {};

/**
 * @param {Object} props
 * @param {string} props.agencyTitleFirstLine ie Utah Department of (smaller font above main title)
 * @param {string} props.agencyTitle ie Government Operations (larger font below firstLine)
 * @param {Address} props.address
 * @param {string} props.email
 * @param {React.ReactNode} props.logo
 * @param {string} props.phone
 * @returns {JSX.Element}
 */
function FooterAgencyInformationInfo({
  agencyTitleFirstLine,
  agencyTitle,
  address,
  email,
  logo,
  phone,
}) {
  return (
    <div className="footer-agency-information utah-design-system">
      <div className="footer-agency-information__title">
        <div className="footer-agency-information-title__image">
          {logo}
        </div>
        <div className="footer-agency-information-title">
          <div className="footer-agency-information-title__fist-line">
            {agencyTitleFirstLine}
          </div>
          <div className="footer-agency-information-title__title">
            {agencyTitle}
          </div>
        </div>
      </div>

      <div className="footer-agency-information__full-title">
        {agencyTitleFirstLine} {agencyTitle}
      </div>

      <div className="footer-agency-information__address">
        <span className="footer-agency-information-address__street-address-1">{address.streetAddress1}</span><br />
        {
          address.streetAddress2
            ? (
              <>
                <span className="footer-agency-information-address__street-address-2">{address.streetAddress2}</span>
                <br />
              </>
            )
            : undefined
        }
        <span className="footer-agency-information-address__city-state-zip">
          {address.city}, {address.state} {address.zipCode}
        </span>
        {agencyTitle}
      </div>

      <div className="footer-agency-information__email">
        <a href={`mailto:${email}`}>{email}</a>
      </div>

      <div className="footer-agency-information__phone">
        <a href={`tel:${phone}`}>{phone}</a>
      </div>
    </div>
  );
}

FooterAgencyInformationInfo.propTypes = propTypes;
FooterAgencyInformationInfo.defaultProps = defaultProps;

export default FooterAgencyInformationInfo;
