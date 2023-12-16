/** @typedef {import('@utahdts/utah-design-system').Address} Address */

/**
 * @param {Object} props
 * @param {string} props.agencyTitleFirstLine ie Utah Department of (smaller font above main title)
 * @param {string} props.agencyTitleSecondLine ie Government Operations (larger font below firstLine)
 * @param {Address} props.address
 * @param {string} props.email
 * @param {React.ReactNode} props.logo
 * @param {string} [props.phone]
 * @returns {JSX.Element}
 */
export function FooterAgencyInformationInfo({
  agencyTitleFirstLine,
  agencyTitleSecondLine,
  address,
  email,
  logo,
  phone,
}) {
  return (
    <>
      <div className="footer-agency-information__title-wrapper">
        <div className="footer-agency-information__title-image">
          {logo}
        </div>
        <div className="footer-agency-information__title">
          <div className="footer-agency-information__first-line">
            {agencyTitleFirstLine}
          </div>
          <div className="footer-agency-information__second-line">
            {agencyTitleSecondLine}
          </div>
        </div>
      </div>

      <div className="footer-agency-information__address">
        <span className="footer-agency-information__address-street-address-1">{address.streetAddress1}</span><br />
        {
          address.streetAddress2
            ? (
              <>
                <span className="footer-agency-information__address-street-address-2">{address.streetAddress2}</span>
                <br />
              </>
            )
            : undefined
        }
        <span className="footer-agency-information__address-city-state-zip">
          {address.city}, {address.state} {address.zipCode}
        </span>
      </div>

      <div className="footer-agency-information__email">
        <a href={`mailto:${email}`}>{email}</a>
      </div>

      {phone && (
        <div className="footer-agency-information__phone">
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
      )}
    </>
  );
}
