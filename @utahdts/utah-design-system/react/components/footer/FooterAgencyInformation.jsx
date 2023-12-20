import React from 'react';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @returns {React.JSX.Element}
 */
export function FooterAgencyInformation({ children }) {
  return (
    <div className="utah-design-system">
      <div className="footer-agency-information">
        {children}
      </div>
    </div>
  );
}
