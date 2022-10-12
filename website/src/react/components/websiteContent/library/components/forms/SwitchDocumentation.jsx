import SandboxExample from '../../../../sandbox/SandboxExample';
import SwitchExampleCodeReact from './SwitchExampleCodeReact';
import SwitchExampleRender from './SwitchExampleRender';
import SwitchPrimaryExampleProps from './SwitchExampleProps';

/* eslint-disable react/jsx-one-expression-per-line */
const propTypes = {};
const defaultProps = {};

function SwitchDocumentation() {
  return (
    <div className="documentation-content">
      <h1>Switch</h1>
      <p className="lead-in">A <code>&lt;switch&gt;</code> element is a switchable component that switches on a switch action.</p>
      <hr />
      <h2>Example</h2>
      <SandboxExample
        CODE_EXAMPLE={SwitchExampleCodeReact}
        PROPS_EXAMPLE={SwitchPrimaryExampleProps}
        RENDER_EXAMPLE={SwitchExampleRender}
      />
    </div>
  );
}

SwitchDocumentation.propTypes = propTypes;
SwitchDocumentation.defaultProps = defaultProps;

export default SwitchDocumentation;
