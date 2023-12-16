/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
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
