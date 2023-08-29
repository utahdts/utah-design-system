/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import {
  Icons,
  Switch,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
  TableWrapper,
  formElementSizesEnum,
} from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import pageUrls from '../../../../../routing/pageUrls';
import SandboxExample from '../../../../../sandbox/SandboxExample';
import StaticExample from '../../../../../staticExamples/StaticExample';
import SwitchExampleCodeReact from './SwitchExampleCodeReact';
import SwitchExampleProps from './SwitchExampleProps';
import SwitchExampleRender from './SwitchExampleRender';

/* eslint-disable react/jsx-one-expression-per-line */
const propTypes = {};
const defaultProps = {};

function SwitchDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Switch</h1>
      <p className="lead-in">
        Switches toggle the state of a single setting on or off. A switch must always be accompanied by a label, and
        follows the same keyboard workflow as a <Link to={pageUrls.checkbox}>checkbox</Link>.
      </p>
      <hr />
      <h2 id="example">Example</h2>
      <SandboxExample
        CODE_EXAMPLE={SwitchExampleCodeReact}
        PROPS_EXAMPLE={SwitchExampleProps}
        RENDER_EXAMPLE={SwitchExampleRender}
      />
      <StaticExample
        title="Label"
        renderedExample={(
          <div className="flex-col pt-spacing">
            <Switch
              label="Label"
              id="switch-label"
              width={20}
            />
            <Switch
              label="Inside Label"
              id="switch-inside-label"
              labelOn="on"
              labelOff="off"
              width={35}
            />
          </div>
        )}
        quickTips={(
          <ul>
            <li>A switch can contain a label within itself.</li>
            <li>The inside label can be different based on whether the switch position is <code>on</code> or <code>off</code>.</li>
          </ul>
        )}
      />
      <StaticExample
        title="Sizes"
        renderedExample={(
          <div className="flex-col pt-spacing">
            <Switch
              errorMessage="You must comply!"
              label="Small"
              id="switch-small"
              size={formElementSizesEnum.SMALL}
              width={20}
            />
            <Switch
              label="Medium"
              id="switch-medium"
              size={formElementSizesEnum.MEDIUM}
            />
            <Switch
              label="Large"
              id="switch-large"
              size={formElementSizesEnum.LARGE}
              width={30}
              defaultValue
            />
          </div>
        )}
        quickTips={(
          <ul>
            <li>The preferred switch size is the default (medium).</li>
            <li>Do not mix switches of different sizes in close proximity.</li>
          </ul>
        )}
      />
      <StaticExample
        title="With Icon"
        renderedExample={(
          <div className="flex-col pt-spacing">
            <Switch
              label="With Icon"
              id="switch-icon"
              sliderChildren={Icons.IconCheck()}
            />
          </div>
        )}
        quickTips={(
          <ul>
            <li>An <Link to={pageUrls.icons}>icon</Link> can be use within the indicator.</li>
          </ul>
        )}
      />
      <StaticExample
        title="Disabled"
        renderedExample={(
          <div className="flex-col pt-spacing">
            <Switch
              label="On"
              id="switch-disabled-on"
              value
              labelOn="on"
              isDisabled
              width={35}
            />
            <Switch
              label="Off"
              id="switch-disabled-off"
              value={false}
              labelOff="off"
              isDisabled
              width={35}
            />
          </div>
        )}
        quickTips={(
          <ul>
            <li>A disabled switch cannot be interacted with or triggered.</li>
            <li>A disabled switch will keep its current value.</li>
          </ul>
        )}
      />
      <h2 className="mb-spacing" id="guidance">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Turning something on or off.</strong> Use to turn an option on/off, enable/disable something, or set a yes/no condition.</li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Selecting one item from a list.</strong> Consider using <Link to={pageUrls.radioButton}>radio buttons</Link> if users
          need to select one item from a list of options.
        </li>
        <li>
          <strong>Confirming an agreement.</strong> Consider using a <Link to={pageUrls.checkbox}>checkbox</Link> if users need to
          confirm a statement such as an agreement.
        </li>
        <li>
          <strong>Selecting multiple options.</strong> Consider using <Link to={pageUrls.checkbox}>checkboxes</Link> or
          a <Link to={pageUrls.multiSelect}>multi-select</Link> if users can select multiple items from a list of options.
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Enable or Disable:</strong> A switch is used to enable or disable a mode, feature, or function.
        </li>
        <li>
          <strong>Label the behavior of the switch (state-label):</strong> Consider using a state-label inside the
          switch such as &quot;on&quot; and &quot;off&quot; or &quot;enable&quot; and &quot;disable&quot; to communicate
          the state of the switch.
        </li>
        <li>
          <strong>Switches have an immediate effect on the system.</strong>
        </li>
        <li>
          <strong>A switch has two states:</strong> Switches only have 2 states: on/true or off/false.
        </li>
        <li>
          <strong>Form-label position:</strong> In a web form, the form-label is generally positioned to the right of the
          switch, like the <Link to={pageUrls.checkbox}>checkbox</Link>.
        </li>
        <li>
          <strong>Switch sizing:</strong> When pairing switches and <Link to={pageUrls.forms}>forms</Link>, use the same size.
        </li>
        <li>
          <strong>Dynamic form-labels:</strong> When possible, avoid the use of dynamic form-labels. Instead, use the state-label
          and switch color to convey its state (on or off).
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>Text within a switch must maintain a <code>4.5:1</code> contrast ratio.</li>
        <li>The switch&apos;s boundaries must maintain a <code>3:1</code> contrast ratio against the background.</li>
        <li>The switch focus state should be a <code>3:1</code> contrast ratio.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>Use the <code>tab</code> key to move between form elements. The switch should display a visible focus state when users tab to it.</li>
        <li>A switch component can be triggered by pressing the <code>spacebar</code>.</li>
      </ul>

      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>
          The state of the switch (on/off, enabled/disabled) must be conveyed audibly to a screen reader user.
        </li>
        <li>
          The switch provided by the Utah Design System is a restyled <Link to={pageUrls.checkbox}>checkbox</Link>. Where possible,
          it is recommended that you use native elements rather than using aria and role attributes, as native elements are more
          widely supported by user agents and assistive technology. Remember: The first rule of ARIA: Before you use ARIA, use
          native HTML elements or attributes first!
        </li>
        <li>
          All form controls should have labels, including <Link to={pageUrls.radioButton}>radio buttons</Link>, <Link to={pageUrls.checkbox}>checkboxes</Link>, and
          switches. In most cases, this is done by using the <code>&lt;label&gt;</code> element.
        </li>
        <li>
          When a label can&apos;t be used, it&apos;s necessary to add an attribute directly to the input component. In this case,
          you can apply the additional attribute (e.g. <code>aria-label</code>, <code>aria-labelledby</code>, or <code>visually-hidden</code>).
        </li>
        <li>
          By default, switches include a <code>role=&quot;switch&quot;</code> ARIA attribute to ensure they are accurately announced
          via assistive technologies.
        </li>
        <li>
          By default, switch groups include a <code>role=&quot;group&quot;</code> on the <code>&lt;fieldset&gt;</code> wrapping grouped switches.
        </li>
        <li>
          If you customize this component, ensure that it continues to meet the accessibility requirements.
        </li>
      </ul>

      <h2 id="settings">Settings and Props</h2>
      <div className="documentation-content--small-text">
        <TabGroup defaultValue="switch-props-css">
          <TabList>
            <Tab id="switch-props-css">CSS</Tab>
            <Tab id="switch-props-react">React</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId="switch-props-css">
              <TableWrapper>
                <Table className="table--lines-x table--full-width">
                  <TableHead>
                    <TableHeadRow>
                      <TableHeadCell className="text-left css-classes">CSS Classes</TableHeadCell>
                      <TableHeadCell className="text-left ">Description</TableHeadCell>
                    </TableHeadRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell><code>.switch--small</code></TableCell>
                      <TableCell>CSS class modifier for a small switch.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code>.switch--large</code></TableCell>
                      <TableCell>CSS class modifier for a large switch.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableWrapper>
            </TabPanel>

            <TabPanel tabId="switch-props-react">
              <h3>React Switch Properties</h3>
              <div className="documentation-content--small-text">
                <TableWrapper>
                  <Table className="table--lines-x">
                    <TableHead>
                      <TableHeadRow>
                        <TableHeadCell className="text-left">Property</TableHeadCell>
                        <TableHeadCell className="text-left">Type</TableHeadCell>
                        <TableHeadCell className="text-left">Default</TableHeadCell>
                        <TableHeadCell className="text-left">Description</TableHeadCell>
                      </TableHeadRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell><code className="primary-color">className</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>string</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>This css class will be added to the switch.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">defaultValue</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>boolean</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>Use the <span className="font-semi-bold">defaultValue</span> for an uncontrolled component.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">errorMessage</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>string</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>Message to be displayed when an error occurs.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">id</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>string</code>
                            <span> | </span>
                            <code>number</code>
                          </div>
                        </TableCell>
                        <TableCell>(required)</TableCell>
                        <TableCell>An id to put on the input element.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">innerRef</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>MutableRefObject</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>
                          This ref will be attached to the rendered <code>&lt;div&gt;</code> element allowing the parent component to interact
                          directly with the actual <span className="font-semi-bold">switch</span> DOM element.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">isDisabled</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>true</code>
                            <span> | </span>
                            <code>false</code>
                          </div>
                        </TableCell>
                        <TableCell>false</TableCell>
                        <TableCell>
                          When isDisabled is true, the switch will become unclickable and its appearance will change
                          to be more subdued so that the user can tell the switch is unusable.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">label</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>string</code>
                          </div>
                        </TableCell>
                        <TableCell>(required)</TableCell>
                        <TableCell>Label to be displayed next to the switch.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">labelClassName</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>string</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>The css class to add to the <code>label</code> element.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">labelOff</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>node</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>A label can be displayed within the switch itself when its value is set to <code>false</code>.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">labelOn</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>node</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>A label can be displayed within the switch itself when its value is set to <code>true</code>.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">onChange</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>function</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>The function to call when the switch is triggered.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">onSubmit</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>function</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>The function to call when the enter key is pressed.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">size</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>formElementSizesEnum</code>
                            <span> | </span>
                            <code>&apos;small&apos;</code>
                            <span> | </span>
                            <code>&apos;medium&apos;</code>
                            <span> | </span>
                            <code>&apos;large&apos;</code>
                          </div>
                        </TableCell>
                        <TableCell>&apos;medium&apos;</TableCell>
                        <TableCell>Determines how much space the switch will consume on the page.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">sliderChildren</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>node</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>Element to be displayed within the indicator.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">value</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>true</code>
                            <span> | </span>
                            <code>false</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>Whether the input is switched.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">width</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>number</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>Width of the switch in <code>px</code>.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">...rest</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>...any</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>Additional props you wish to pass to the <code>input</code>.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableWrapper>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}

SwitchDocumentation.propTypes = propTypes;
SwitchDocumentation.defaultProps = defaultProps;

export default SwitchDocumentation;
