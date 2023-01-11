const propTypes = {};
const defaultProps = {};

function UtahHeaderDocumentation() {
  return (
    <div>
      <p>TODO:</p>
      <ul>
        <li>Add a segmented button: Interactive Header | Original Header</li>
        <li>
          This will allow the user to mess around with interactive settings but still get back to the original header in case something got borked.
          Only show one header, not both.
        </li>
        <li>Have a `reset` button to go back to the original header</li>
        <li>Remove console logs from header code</li>
        <li>Remove unused files in header codebase</li>
      </ul>
    </div>
  );
}

UtahHeaderDocumentation.propTypes = propTypes;
UtahHeaderDocumentation.defaultProps = defaultProps;

export default UtahHeaderDocumentation;
