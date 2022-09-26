import SandboxExample from '../../../../sandbox/SandboxExample';
import ButtonExampleCodeReact from './ButtonExampleCodeReact';
import ButtonExampleRender from './ButtonExampleRender';
import ButtonPrimaryExampleProps from './ButtonPrimaryExampleProps';

/* eslint-disable react/jsx-one-expression-per-line */
const propTypes = {};
const defaultProps = {};

function ButtonDocumentation() {
  return (
    <div className="documentation-content">
      <h1>Button</h1>
      <p className="lead-in">A <code>&lt;button&gt;</code> element is a clickable component that triggers an action.</p>
      <hr />
      <h2>Example</h2>
      <SandboxExample
        CodeExample={ButtonExampleCodeReact}
        PropsExample={ButtonPrimaryExampleProps}
        RenderExample={ButtonExampleRender}
      />
    </div>
  );
}

ButtonDocumentation.propTypes = propTypes;
ButtonDocumentation.defaultProps = defaultProps;

export default ButtonDocumentation;
