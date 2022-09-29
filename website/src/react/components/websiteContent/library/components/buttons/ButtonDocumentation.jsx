import { useRef, useEffect, useState } from 'react';
import Spinner from 'utah-design-system-react-library/react/components/widgetsIndicators/Spinner';
import SandboxExample from '../../../../sandbox/SandboxExample';
import ButtonExampleCodeReact from './ButtonExampleCodeReact';
import ButtonExampleRender from './ButtonExampleRender';
import ButtonPrimaryExampleProps from './ButtonPrimaryExampleProps';

/* eslint-disable react/jsx-one-expression-per-line */
const propTypes = {};
const defaultProps = {};

function ButtonDocumentation() {
  // --- DELETE THIS CODE --- //
  // this just demonstrates the spinner's value changing
  const intervalRef = useRef(NaN);
  const [spinnerValue, setSpinnerValue] = useState(Math.random());
  useEffect(
    () => {
      intervalRef.current = setInterval(
        () => setSpinnerValue(
          (oldValue) => (
            Math.min(1, Math.max(0, (oldValue + Math.random() / (5 * (Math.random() > 0.5 ? -1 : 1)))))
          )
        ),
        250
      );
      return () => clearInterval(intervalRef.current);
    },
    []
  );
  // --- END: DELETE THIS CODE --- //

  return (
    <div className="documentation-content">
      <h1>Button</h1>
      <p className="lead-in">A <code>&lt;button&gt;</code> element is a clickable component that triggers an action.</p>
      <hr />
      <h2>Example</h2>
      <SandboxExample
        CODE_EXAMPLE={ButtonExampleCodeReact}
        PROPS_EXAMPLE={ButtonPrimaryExampleProps}
        RENDER_EXAMPLE={ButtonExampleRender}
      />
      <Spinner value={spinnerValue} />
    </div>
  );
}

ButtonDocumentation.propTypes = propTypes;
ButtonDocumentation.defaultProps = defaultProps;

export default ButtonDocumentation;
