/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {String|null} props.title
 * @returns {React.JSX.Element}
 */
export function FooterSocialMediaBar({ children, title = 'Follow us online' }) {
  return (
    <div className="utah-design-system">
      <div className="footer-social-media-bar">
        <div className="footer-social-media-bar__follow-us">{title}</div>
        <div className="footer-social-media-bar__icon-bar">
          {children}
        </div>
      </div>
    </div>
  );
}
