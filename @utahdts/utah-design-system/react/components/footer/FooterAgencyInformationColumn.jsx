/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @returns {import('react').JSX.Element}
 */
export function FooterAgencyInformationColumn({ children }) {
  return (
    <div className="footer-agency-information__column">
      {children}
    </div>
  );
}
