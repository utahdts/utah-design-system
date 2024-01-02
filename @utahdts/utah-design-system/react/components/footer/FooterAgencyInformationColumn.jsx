import React from 'react';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @returns {React.JSX.Element}
 */
export function FooterAgencyInformationColumn({ children }) {
  return (
    <div className="footer-agency-information__column">
      {children}
    </div>
  );
}
