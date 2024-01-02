/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} props.href
 * @returns {import('react').JSX.Element}
 */
export function ExternalLink({ children, href, ...rest }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" {...rest}>
      {children}&#8239;
      <span className="utds-new-tab-link-a11y">
        <span className="visually-hidden">opens in a new tab</span>
        <span className="utds-icon-after-external-link" aria-hidden="true" />
      </span>
    </a>
  );
}
