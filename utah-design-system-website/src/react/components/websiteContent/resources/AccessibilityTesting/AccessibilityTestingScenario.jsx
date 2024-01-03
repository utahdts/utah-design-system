/**
 * @param {object} param
 * @param {React.ReactNode} param.children
 * @param {React.ReactNode} param.title
 * @returns {React.JSX.Element}
 */
export function AccessibilityTestingScenario({
  children,
  title,
}) {
  return (
    <div className="accessibility-scenario mt-spacing">
      <h3>{title}</h3>
      <div className="accessibility-scenario">
        {children}
      </div>
      <div>End of testing {title}</div>
    </div>
  );
}
