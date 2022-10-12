import {
  Button,
  formElementSizesEnum,
  useBanner,
  Tab,
  TabGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
  TableWrapper,
  TabList,
  TabPanel,
  TabPanels,
} from 'utah-design-system-react-library';
import SandboxExample from '../../../../sandbox/SandboxExample';
import ButtonExampleCodeReact from './ButtonExampleCodeReact';
import ButtonExampleRender from './ButtonExampleRender';
import ButtonExampleProps from './ButtonExampleProps';
import StaticExample from '../../../../staticExamples/StaticExample';
import Icons from '../../../../icons/Icons';

/* eslint-disable react/jsx-one-expression-per-line */
const propTypes = {};
const defaultProps = {};

function ButtonDocumentation() {
  const showBanner = useBanner();
  return (
    <div className="documentation-content">
      <h1>Button</h1>
      <p className="lead-in">A <code>&lt;button&gt;</code> element is a clickable component that triggers an action.</p>
      <hr />
      <h2>Example</h2>
      <SandboxExample
        CODE_EXAMPLE={ButtonExampleCodeReact}
        PROPS_EXAMPLE={ButtonExampleProps}
        RENDER_EXAMPLE={ButtonExampleRender}
      />
      <StaticExample
        title="Emphasized Button (Solid)"
        quickTips={(
          <ul>
            <li>Comes before unemphasized buttons in the tab order.</li>
            <li>Solid color.</li>
            <li>Reversed fill color on solid background.</li>
          </ul>
        )}
        renderedExample={(
          <>
            <Button
              appearance="solid"
              color="primary"
              onClick={() => showBanner({ message: 'primary emphasized button clicked' })}
            >
              Primary Color
            </Button>
            <Button
              appearance="solid"
              color="secondary"
              onClick={() => showBanner({ message: 'secondary emphasized button clicked' })}
            >
              Secondary Color
            </Button>
            <Button
              appearance="solid"
              color="accent"
              onClick={() => showBanner({ message: 'accent emphasized button clicked' })}
            >
              Accent Color
            </Button>
            <Button
              appearance="solid"
              onClick={() => showBanner({ message: 'default emphasized button clicked' })}
            >
              No Color
            </Button>
          </>
        )}
      />

      <StaticExample
        title="Unemphasized Button (Outlined)"
        quickTips={(
          <ul>
            <li>Should be less emphasized than emphasized buttons.</li>
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
              appearance="outlined"
              color="primary"
              onClick={() => showBanner({ message: 'primary unemphasized  button clicked' })}
            >
              Primary Color
            </Button>
            <Button
              appearance="outlined"
              color="secondary"
              onClick={() => showBanner({ message: 'secondary unemphasized  button clicked' })}
            >
              Secondary Color
            </Button>
            <Button
              appearance="outlined"
              color="accent"
              onClick={() => showBanner({ message: 'accent unemphasized  button clicked' })}
            >
              Accent Color
            </Button>
            <Button
              appearance="outlined"
              onClick={() => showBanner({ message: 'unemphasized button clicked' })}
            >
              No Color
            </Button>
          </>
        )}
      />

      <StaticExample
        title="Button Emphasis"
        renderedExample={(
          <>
            <Button
              appearance="outlined"
              color="primary"
              onClick={() => showBanner({ message: 'cancel button clicked' })}
            >
              Cancel
            </Button>
            <Button
              appearance="solid"
              color="primary"
              onClick={() => showBanner({ message: 'ok button clicked' })}
            >
              Okay
            </Button>
          </>
        )}
      />
      <StaticExample
        title="With Icon"
        renderedExample={(
          <>
            <Button
              appearance="outlined"
              color="primary"
              iconLeft={Icons.IconCheck()}
              onClick={() => showBanner({ message: '`left icon` button clicked' })}
            >
              Button
            </Button>
            <Button
              appearance="solid"
              color="primary"
              iconRight={Icons.IconArrowRight()}
              onClick={() => showBanner({ message: '`see more` button clicked' })}
            >
              See More
            </Button>
          </>
        )}
      />
      <StaticExample
        title="Sizes"
        renderedExample={(
          <>
            <Button
              appearance="solid"
              color="primary"
              onClick={() => showBanner({ message: 'small button clicked' })}
              size={formElementSizesEnum.SMALL}
            >
              Small
            </Button>
            <Button
              appearance="solid"
              color="primary"
              onClick={() => showBanner({ message: 'medium button clicked' })}
              size={formElementSizesEnum.MEDIUM}
            >
              Medium
            </Button>
            <Button
              appearance="solid"
              color="primary"
              onClick={() => showBanner({ message: 'large button clicked' })}
              size={formElementSizesEnum.LARGE}
            >
              Large
            </Button>
            <Button
              appearance="solid"
              color="primary"
              onClick={() => showBanner({ message: 'large1x button clicked' })}
              size={formElementSizesEnum.LARGE1X}
            >
              Large 1X
            </Button>
          </>
        )}
      />
      <h2>Guidance</h2>
      <h3>When to use</h3>
      <h3>When to use something else</h3>
      <h3>Usability guidance</h3>
      <h3>Accessability</h3>
      <h4>Contrast</h4>
      <h4>Keyboard interactivity</h4>
      <h4>Screen readers</h4>
      <h3>Do / Don&apos;t</h3>

      <h2>Settings and Props</h2>
      <div className="documentation-content--small-text">
        <TabGroup defaultValue="button-props-css">
          <TabList>
            <Tab id="button-props-css">CSS</Tab>
            <Tab id="button-props-react">React</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId="button-props-css">
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
                      <TableCell><code>.button</code></TableCell>
                      <TableCell>The base css class for a button.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code>.button--small</code></TableCell>
                      <TableCell>CSS class modifier for a small button.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code>.button--large</code></TableCell>
                      <TableCell>CSS class modifier for a large button.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code>.button--large1x</code></TableCell>
                      <TableCell>CSS class modifier for a extra large button.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code>.button--primary-color</code></TableCell>
                      <TableCell>CSS class modifier for a button in the primary color.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code>.button--secondary-color</code></TableCell>
                      <TableCell>CSS class modifier for a button in the secondary color.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code>.button--accent-color</code></TableCell>
                      <TableCell>CSS class modifier for a button in the accent color.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code>.button--solid</code></TableCell>
                      <TableCell>CSS class modifier for a button that has a solid color (instead of being outlined).</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code>.button.contrast-border-light</code></TableCell>
                      <TableCell>
                        CSS class modifier to provide a light border around a dark button (used to help the button meet 3:1 contrast ratio on a dark
                        background).
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code>.button.contrast-border-dark</code></TableCell>
                      <TableCell>
                        CSS class modifier to provide a dark border around a light button (used to help the button meet 3:1 contrast ratio on a light
                        background).
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableWrapper>
            </TabPanel>

            <TabPanel tabId="button-props-react">
              <h3>React Button Properties</h3>
              <div className="documentation-content--small-text">
                <TableWrapper>
                  <Table>
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
                        <TableCell><code className="primary-color">appearance</code></TableCell>
                        <TableCell>
                          <code>&apos;solid&apos;</code>
                          <span> | </span>
                          <code>&apos;outlined&apos;</code>
                        </TableCell>
                        <TableCell>&apos;outlined&apos;</TableCell>
                        <TableCell>
                          Determines how the button will be formatted. Solid buttons have a solid fill color and denote emphasis
                          to the user. Outlined buttons have an outline but no fill causing them to be less emphasized.
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell><code className="primary-color">children</code></TableCell>
                        <TableCell><code>node</code></TableCell>
                        <TableCell>(required)</TableCell>
                        <TableCell>
                          Most often, children is the title of button. But, you can have it be any element to be rendered inside the button.
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell><code className="primary-color">className</code></TableCell>
                        <TableCell><code>string</code></TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>
                          This css class will be added to the button.
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell><code className="primary-color">color</code></TableCell>
                        <TableCell>
                          <code>&apos;primary&apos;</code>
                          <span> | </span>
                          <code>&apos;secondary&apos;</code>
                          <span> | </span>
                          <code>&apos;accent&apos;</code>
                          <span> | </span>
                          <code>&apos;none&apos;</code>
                        </TableCell>
                        <TableCell>&apos;none&apos;</TableCell>
                        <TableCell>
                          Determines the color from the theme that will be used while rendering the button. Depending on the
                          <span className="font-semi-bold"> appearance</span> of the button, this can effect the border and/or fill color of the button.
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell><code className="primary-color">innerRef</code></TableCell>
                        <TableCell><code>MutableRefObject</code></TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>
                          This ref will be attached to the rendered &lt;button&gt; element allowing the parent component to interact
                          directly with the actual <span className="font-semi-bold">button</span> DOM element.
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell><code className="primary-color">iconLeft</code></TableCell>
                        <TableCell><code>node</code></TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>
                          Intended to be an &lt;svg&gt; image to be placed to the left of the button title, but any <span className="font-semi-bold">node</span> is allowed.
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell><code className="primary-color">iconRight</code></TableCell>
                        <TableCell><code>node</code></TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>
                          Intended to be an &lt;svg&gt; image to be placed to the right of the button title, but any <span className="font-semi-bold">node</span> is allowed.
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell><code className="primary-color">id</code></TableCell>
                        <TableCell>
                          <code>string</code>
                          <span> | </span>
                          <code>number</code>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>
                          An id to put on the &lt;button&gt; element.
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell><code className="primary-color">isBusy</code></TableCell>
                        <TableCell>
                          <code>true</code>
                          <span> | </span>
                          <code>false</code>
                        </TableCell>
                        <TableCell>false</TableCell>
                        <TableCell>
                          When <span className="font-semi-bold">isBusy</span> is true, a spinner will be shown in the button.
                          This is useful for showing the user that an action
                          that triggered when the button was pressed is still running.
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell><code className="primary-color">isDisabled</code></TableCell>
                        <TableCell>
                          <code>true</code>
                          <span> | </span>
                          <code>false</code>
                        </TableCell>
                        <TableCell>false</TableCell>
                        <TableCell>
                          When <span className="font-semi-bold">isDisabled</span> is true, the button will become unclickable
                          and its appearance will change to be more subdued
                          so that the user can tell the button is unusable.
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell><code className="primary-color">onClick</code></TableCell>
                        <TableCell><code>function</code></TableCell>
                        <TableCell>required</TableCell>
                        <TableCell>
                          The function to call when the button is pressed.
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell><code className="primary-color">size</code></TableCell>
                        <TableCell>
                          <code>formElementSizesEnum</code>
                          <span> | </span>
                          <code>&apos;small&apos;</code>
                          <span> | </span>
                          <code>&apos;medium&apos;</code>
                          <span> | </span>
                          <code>&apos;large&apos;</code>
                          <span> | </span>
                          <code>&apos;large1x&apos;</code>
                        </TableCell>
                        <TableCell>&apos;medium&apos;</TableCell>
                        <TableCell>
                          Determines how much space the button will consume on the page.
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell><code className="primary-color">type</code></TableCell>
                        <TableCell>
                          <code>&apos;button&apos;</code>
                          <span> | </span>
                          <code>&apos;reset&apos;</code>
                          <span> | </span>
                          <code>&apos;submit&apos;</code>
                        </TableCell>
                        <TableCell>&apos;button&apos;</TableCell>
                        <TableCell>
                          The HTML <span className="font-semi-bold">type</span> attribute value to put on the &lt;button&gt; element.
                        </TableCell>
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

ButtonDocumentation.propTypes = propTypes;
ButtonDocumentation.defaultProps = defaultProps;

export default ButtonDocumentation;
