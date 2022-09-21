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

      {/*
        const SandboxExampleStateShape = PropTypes.exact({
          outputIsOpen: PropTypes.bool.isRequired,
          outputType: PropTypes.oneOf(Object.values(outputTypeEnum)),
          exampleProps: PropTypes.object.isRequired, // every example component will have its own props set, so can't define here...
                or maybe use PropTypes.oneOfType but it will be a lot of them
                !!! the actual component itself will have propTypes and can check propType here
        });

        const propTypes = PropTypes.shape({
        })
        function ButtonExampleProps({}) {
          return (

          );
        }

        function SandboxExample({
          OutputExampleComponent,
          PropsExampleComponent,
          RenderExampleComponent,
        }) {
          const [state, setState] = useState({
            outputIsOpen: false,
            outputType: outputTypeEnum.HTML, // or .REACT
            props: {},
          });
          return (
            <div>
              <div>
                <RenderExampleComponent state={state} setState={setState} />
                <PropsExampleComponent state={state} setState={setState} />
              </div>
              <div>
                <Accordion>
                  <SegmentedButton onChange={() => setState({ outputType: newOutputType })} />
                  <ToggleIcon onChange={() => setState({ outputIsOpen: !previousState.outputIsOpen })}
                </Accordion>
                <OutputExampleComponent state={state} setState={setState} />
              </div>
            </div>
          );
        }

      */}
    </div>
  );
}

ButtonDocumentation.propTypes = propTypes;
ButtonDocumentation.defaultProps = defaultProps;

export default ButtonDocumentation;
