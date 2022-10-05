import { Button } from 'utah-design-system-react-library';
import SandboxExample from '../../../../sandbox/SandboxExample';
import ButtonExampleCodeReact from './ButtonExampleCodeReact';
import ButtonExampleRender from './ButtonExampleRender';
import ButtonPrimaryExampleProps from './ButtonPrimaryExampleProps';
import StaticExample from '../../../../staticExamples/StaticExample';
import Icons from '../../../../icons/Icons';

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
        CODE_EXAMPLE={ButtonExampleCodeReact}
        PROPS_EXAMPLE={ButtonPrimaryExampleProps}
        RENDER_EXAMPLE={ButtonExampleRender}
      />
      <StaticExample
        quickTips={(
          <ul>
            <li>Comes before secondary in the tab order.</li>
            <li>Solid color.</li>
            <li>Reversed fill color on solid background.</li>
          </ul>
        )}
        renderedExample={(
          <Button
            appearance="solid"
            color="primary"
            onClick={() => console.log('Primary button clicked')}
          >
            Primary
          </Button>
        )}
        title="Primary"
      />

      <StaticExample
        quickTips={(
          <ul>
            <li>Should be less emphasized than primary buttons.</li>
            <li>Options:
              <ul>
                <li>Preferred: no fill color, has border.</li>
                <li>Optional: neutral fill color.</li>
              </ul>
            </li>
            <li>Reversed color on solid background, but still no fill color.</li>
          </ul>
        )}
        renderedExample={(
          <>
            <Button
              appearance="solid"
              color="secondary"
              onClick={() => console.log('Secondary solid button clicked')}
            >
              Secondary
            </Button>
            <Button
              appearance="outlined"
              color="secondary"
              onClick={() => console.log('Secondary outlined button clicked')}
            >
              Secondary
            </Button>
          </>
        )}
        title="Secondary"
      />

      <StaticExample
        renderedExample={(
          <>
            <Button
              appearance="solid"
              color="primary"
              iconLeft={Icons.IconCheck()}
              onClick={() => console.log('Left Icon button clicked')}
            >
              Button
            </Button>
            <Button
              appearance="solid"
              color="primary"
              iconRight={Icons.IconArrowRight()}
              onClick={() => console.log('See More button clicked')}
            >
              See More
            </Button>
          </>
        )}
        title="With Icon"
      />
    </div>
  );
}

ButtonDocumentation.propTypes = propTypes;
ButtonDocumentation.defaultProps = defaultProps;

export default ButtonDocumentation;
