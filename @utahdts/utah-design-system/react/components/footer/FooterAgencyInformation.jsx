import React from 'react';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @returns {import('react').JSX.Element}
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
