/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @returns {import('react').JSX.Element}
 */
export function TabPanels({ children }) {
  return (
    <div className="tab-group__panels" role="presentation">
      {children}
    </div>
  );
}
