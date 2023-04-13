import {
  Icons,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel, TableWrapper, Table, TableHead, TableHeadRow, TableHeadCell, TableBody, TableRow, TableCell, Switch, formElementSizesEnum,
} from '@utahdts/utah-design-system';
import SandboxExample from '../../../../../sandbox/SandboxExample';
import SwitchExampleCodeReact from './SwitchExampleCodeReact';
import SwitchExampleRender from './SwitchExampleRender';
import SwitchPrimaryExampleProps from './SwitchExampleProps';
import StaticExample from '../../../../../staticExamples/StaticExample';

/* eslint-disable react/jsx-one-expression-per-line */
const propTypes = {};
const defaultProps = {};

function SwitchDocumentation() {
  return (
    <div className="documentation-content">
      <h1>Switch</h1>
      <p className="lead-in">A <code>&lt;switch&gt;</code> element is a switchable component that switches on a switch action.</p>
      <hr />
      <h2 id="example">Example</h2>
      <SandboxExample
        CODE_EXAMPLE={SwitchExampleCodeReact}
        PROPS_EXAMPLE={SwitchPrimaryExampleProps}
        RENDER_EXAMPLE={SwitchExampleRender}
      />
      <StaticExample
        title="Label"
        renderedExample={(
          <div className="flex-col">
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
          <div className="flex-col">
            <Switch
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
          <Switch
            label="With Icon"
            id="switch-icon"
            sliderChildren={Icons.IconCheck()}
          />
        )}
        quickTips={(
          <ul>
            <li>An icon can be use within the indicator.</li>
          </ul>
        )}
      />
      <StaticExample
        title="Disabled"
        renderedExample={(
          <div className="flex-col">
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
      <h3>When to use</h3>
      <ul className="mb-spacing">
        <li>Use when a user is only allowed to select between two short options.</li>
        <li>Preferred for short questions: <code>Yes/No</code> - <code>True/False</code>.</li>
      </ul>
      <h3>When not to use</h3>
      <ul className="mb-spacing">
        <li>Don&apos;t use for longer choice names.</li>
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
                <Table className="table--lines-x">
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
                          This ref will be attached to the rendered &lt;div&gt; element allowing the parent component to interact
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
