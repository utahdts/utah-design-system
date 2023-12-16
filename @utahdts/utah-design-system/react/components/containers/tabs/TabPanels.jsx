/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
export function TabPanels({ children }) {
  return (
    <div className="tab-group__panels">
      {children}
    </div>
  );
}
