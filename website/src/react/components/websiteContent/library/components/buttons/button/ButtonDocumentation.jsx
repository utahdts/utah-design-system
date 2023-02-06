import {
  Button,
  formElementSizesEnum,
  Icons, Tab,
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
  useBanner,
} from '@utahdts/utah-design-system';
import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import pageUrls from '../../../../../routing/pageUrls';
import SandboxExample from '../../../../../sandbox/SandboxExample';
import StaticExample from '../../../../../staticExamples/StaticExample';
import ButtonExampleCodeReact from './ButtonExampleCodeReact';
import ButtonExampleProps from './ButtonExampleProps';
import ButtonExampleRender from './ButtonExampleRender';

/* eslint-disable react/jsx-one-expression-per-line */
const propTypes = {};
const defaultProps = {};

function ButtonDocumentation() {
  const showBanner = useBanner();
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Button</h1>
      <p className="lead-in">A <code>&lt;button&gt;</code> element is a clickable component that triggers an action.</p>
      <hr />
      <h2 id="section-example">Example</h2>
      <SandboxExample
        CODE_EXAMPLE={ButtonExampleCodeReact}
        PROPS_EXAMPLE={ButtonExampleProps}
        RENDER_EXAMPLE={ButtonExampleRender}
      />
      <StaticExample
        title="Emphasized Button (Solid)"
        renderedExample={(
          <>
            <Button
              appearance="solid"
              color="primary"
              onClick={useCallback(() => showBanner({ message: 'primary emphasized button clicked' }))}
            >
              Primary Color
            </Button>
            <Button
              appearance="solid"
              color="secondary"
              onClick={useCallback(() => showBanner({ message: 'secondary emphasized button clicked' }))}
            >
              Secondary Color
            </Button>
            <Button
              appearance="solid"
              color="accent"
              onClick={useCallback(() => showBanner({ message: 'accent emphasized button clicked' }))}
            >
              Accent Color
            </Button>
            <Button
              appearance="solid"
              onClick={useCallback(() => showBanner({ message: 'default emphasized button clicked' }))}
            >
              No Color
            </Button>
          </>
        )}
        quickTips={(
          <ul>
            <li>Used to emphasize a button when multiple buttons appear on a page or in close proximity.</li>
            <li>Limit the number of emphasized buttons in a view to ensure your button emphasis isn’t diluted</li>
            <li>When used in proximity to other buttons:
              <ul>
                <li>Should appear on the right.</li>
              </ul>
            </li>
            <li>Solid color.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Unemphasized Button (Outlined)"
        renderedExample={(
          <>
            <Button
              appearance="outlined"
              color="primary"
              onClick={useCallback(() => showBanner({ message: 'primary unemphasized  button clicked' }))}
            >
              Primary Color
            </Button>
            <Button
              appearance="outlined"
              color="secondary"
              onClick={useCallback(() => showBanner({ message: 'secondary unemphasized  button clicked' }))}
            >
              Secondary Color
            </Button>
            <Button
              appearance="outlined"
              color="accent"
              onClick={useCallback(() => showBanner({ message: 'accent unemphasized  button clicked' }))}
            >
              Accent Color
            </Button>
            <Button
              appearance="outlined"
              onClick={useCallback(() => showBanner({ message: 'unemphasized button clicked' }))}
            >
              No Color
            </Button>
          </>
        )}
        quickTips={(
          <ul>
            <li>Used to deemphasize a button. This is the default look of a button.</li>
            <li>When used in proximity to other buttons:
              <ul>
                <li>Should appear on the left of an emphasized button.</li>
              </ul>
            </li>
            <li>Solid outline. Text matches the button color.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Button Emphasis"
        renderedExample={(
          <>
            <Button
              appearance="outlined"
              color="primary"
              onClick={useCallback(() => showBanner({ message: 'cancel button clicked' }))}
            >
              Cancel
            </Button>
            <Button
              appearance="solid"
              color="primary"
              onClick={useCallback(() => showBanner({ message: 'ok button clicked' }))}
            >
              Okay
            </Button>
          </>
        )}
        quickTips={(
          <ul>
            <li>When two or more buttons are in close proximity, and you wish to have an emphasized button:
              <ul>
                <li>The emphasized button will appear on the right.</li>
                <li>One or more unemphasized buttons will appear on the left.</li>
                <li>If you wish to use more than 3 buttons in proximity consider
                  using a <NavLink to={pageUrls.buttonGroup} className="utds-icon-after-ext-link">Button Group</NavLink>.
                </li>
              </ul>
            </li>
          </ul>
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
              onClick={useCallback(() => showBanner({ message: '`left icon` button clicked' }))}
            >
              Button
            </Button>
            <Button
              appearance="solid"
              color="primary"
              iconRight={Icons.IconArrowRight()}
              onClick={useCallback(() => showBanner({ message: '`see more` button clicked' }))}
            >
              See More
            </Button>
          </>
        )}
        quickTips={(
          <ul>
            <li>An icon can be use on the left or the right.</li>
            <li>It is is preferred that you only use a single icon per button.</li>
            <li>An icon should be simple and change color with the button text.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Sizes"
        renderedExample={(
          <>
            <Button
              appearance="solid"
              color="primary"
              onClick={useCallback(() => showBanner({ message: 'small button clicked' }))}
              size={formElementSizesEnum.SMALL1X}
            >
              Small 1X
            </Button>
            <Button
              appearance="solid"
              color="primary"
              onClick={useCallback(() => showBanner({ message: 'small button clicked' }))}
              size={formElementSizesEnum.SMALL}
            >
              Small
            </Button>
            <Button
              appearance="solid"
              color="primary"
              onClick={useCallback(() => showBanner({ message: 'medium button clicked' }))}
              size={formElementSizesEnum.MEDIUM}
            >
              Medium
            </Button>
            <Button
              appearance="solid"
              color="primary"
              onClick={useCallback(() => showBanner({ message: 'large button clicked' }))}
              size={formElementSizesEnum.LARGE}
            >
              Large
            </Button>
            <Button
              appearance="solid"
              color="primary"
              onClick={useCallback(() => showBanner({ message: 'large1x button clicked' }))}
              size={formElementSizesEnum.LARGE1X}
            >
              Large 1X
            </Button>
          </>
        )}
        quickTips={(
          <ul>
            <li>The preferred button size is the default (medium).</li>
            <li>Do not mix button of different sizes in close proximity.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Busy"
        renderedExample={(
          <Button
            appearance="solid"
            color="primary"
            onClick={useCallback(() => showBanner({ message: 'medium button clicked' }))}
            size={formElementSizesEnum.MEDIUM}
            isBusy
          >
            Submit Now
          </Button>
        )}
        quickTips={(
          <ul>
            <li>Use a busy button state to indicate to the user that some asynchronous process is taking place.</li>
            <li>Do not use more than one busy button per view.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Enabled/Disabled"
        renderedExample={(
          <>
            <Button
              color="primary"
              onClick={useCallback(() => showBanner({ message: 'medium button clicked' }))}
              size={formElementSizesEnum.MEDIUM}
            >
              Cancel
            </Button>
            <Button
              appearance="solid"
              color="primary"
              onClick={useCallback(() => showBanner({ message: 'medium button clicked' }))}
              size={formElementSizesEnum.MEDIUM}
              disabled
            >
              Submit
            </Button>
          </>
        )}
        quickTips={(
          <ul>
            <li>Disabled buttons do not allow user interaction.</li>
            <li>Disabled buttons are visually &quot;grayed out&quot;.</li>
            <li>Use the built-in attribute <code>disabled</code> to disable a button.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Hover"
        renderedExample={(
          <>
            <Button
              color="secondary"
              onClick={useCallback(() => showBanner({ message: 'medium button clicked' }))}
              size={formElementSizesEnum.MEDIUM}
            >
              Hover Me
            </Button>
            <Button
              appearance="solid"
              color="secondary"
              onClick={useCallback(() => showBanner({ message: 'medium button clicked' }))}
              size={formElementSizesEnum.MEDIUM}
            >
              Hover Me
            </Button>
          </>
        )}
        quickTips={(
          <ul>
            <li>Hover is the state when a pointing cursor enters the button boundary.</li>
            <li>The hover state changes from the normal state to provide the user with a visual cue.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Pressed"
        renderedExample={(
          <>
            <Button
              color="primary"
              className="active"
              onClick={useCallback(() => showBanner({ message: 'medium button clicked' }))}
              size={formElementSizesEnum.MEDIUM}
            >
              Pressed
            </Button>
            <Button
              appearance="solid"
              color="primary"
              className="active"
              onClick={useCallback(() => showBanner({ message: 'medium button clicked' }))}
              size={formElementSizesEnum.MEDIUM}
            >
              Pressed
            </Button>
          </>
        )}
        quickTips={(
          <ul>
            <li>The button produces a visual cue that it is being pressed.</li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Buttons are for actions.</strong> Use a button to indicate an action.</li>
        <li>
          <strong>Emphasize buttons.</strong> Choose a button style that will give the desired emphasis to the action:
          <ul>
            <li>Important actions should be emphasized (solid button) to stand out from other actions on the view or in the immediate area.</li>
            <li>You can further emphasize buttons with size and color.</li>
          </ul>
        </li>
        <li>
          <strong>Navigation buttons.</strong> If a <code>&lt;button&gt;</code> must be used for navigation you are required to implement the
          following ARIA properties:<br />
          <em>
            (Note: Where possible, it is recommended that you use a native <code>&lt;a&gt;</code> element rather than the link role,
            as native elements are more widely supported by user agents and assistive technology.)
          </em>
          <ul>
            <li>Use <code>role=&quot;link&quot;</code>.</li>
            <li>Use the <code>tabindex</code>attribute with a value of 0 to ensure the link is in the correct tab focus order.</li>
            <li>You will need to style to button to appear as a link where needed.</li>
            <li>Example: <code>&lt;button type=&quot;button&quot; role=&quot;link&quot; tabindex=&quot;0&quot;&gt;My Button&lt;/button&gt;</code></li>
          </ul>
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Navigation.</strong> Generally, use a link for navigation, especially when there are other action buttons in the view.</li>
        <li><strong>Paragraph navigation.</strong> Always, use a link for navigation within a paragraph of text.</li>
        <li>
          <strong>Style a link as a button:</strong>
          <ul>
            <li>
              Use the button style if it also includes a visual indicator such as an arrow icon.
              For example <code>Read More {Icons.IconArrowRight()}</code>.
            </li>
            <li>Use the button style for a call to action. For example, <code>Register Now {Icons.IconArrowRight()}</code>.</li>
          </ul>
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Keep button text short.</strong> Use action words to describe what the button will do.</li>
        <li><strong>Use Title Case capitalization.</strong>
          Such as, <code>Download</code>, <code>View More</code>, <code>Sign In</code>, or <code>Sign Out</code>.
        </li>
        <li>
          <strong>Lead with a verb.</strong> Make the first word of the button’s text a verb.
          For example, instead of <code>Information Request</code>, label the button <code>Request Information</code>.
        </li>
        <li><strong>Icons help provide clarity.</strong> Use icons in a button to help describe the action.</li>
        <li><strong>Avoid using too many buttons in a view.</strong> Too many button will cause confusion and distraction.</li>
        <li><strong>Icon Buttons.</strong> Consider using an <NavLink to={pageUrls.iconButton}>icon button</NavLink> in compact layouts.</li>
        <li><strong>Always set the type attribute to define the purpose of the button.</strong> The type attribute
          can accept three values: <code>submit</code>, <code>button</code>, and <code>reset</code>.
          If no type attribute is defined, the button will behave as a <code>submit</code> button.
        </li>
        <li><strong>Avoid stacking.</strong> Generally avoid stacking one button on top of another. Place them side-by-side if there is room.</li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessability</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>The button boundary (the outside edge of the button) must maintain a <code>3:1</code> contrast ratio or better.</li>
        <li>The button text must maintain a <code>4.5:1</code> contrast ratio or better.</li>
        <li>The button’s focus state should be <code>3:1</code> contrast ratio.</li>
      </ul>
      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>The button should display a visible focus state when users tab to them.</li>
        <li>
          Avoid using non-standard html markup for a button such as a <code>div</code> tag.
          <ul>
            <li>The first rule of ARIA: Before you use ARIA, use native HTML elements or attributes first!</li>
          </ul>
        </li>
      </ul>
      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>A Button that contains an icon that adds additional information, the icon should have non-empty alt text (or aria-label for SVG).</li>
      </ul>

      <h2 id="section-settings-props">Settings and Props</h2>
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
                        <TableCell><code className="primary-color">appearance</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>&apos;solid&apos;</code>
                            <span> | </span>
                            <code>&apos;outlined&apos;</code>
                          </div>
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
                          <div className="props-code-wrapper">
                            <code>&apos;primary&apos;</code>
                            <span> | </span>
                            <code>&apos;secondary&apos;</code>
                            <span> | </span>
                            <code>&apos;accent&apos;</code>
                            <span> | </span>
                            <code>&apos;none&apos;</code>
                          </div>
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
                          <div className="props-code-wrapper">
                            <code>string</code>
                            <span> | </span>
                            <code>number</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>
                          An id to put on the &lt;button&gt; element.
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell><code className="primary-color">isBusy</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>true</code>
                            <span> | </span>
                            <code>false</code>
                          </div>
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
                          <div className="props-code-wrapper">
                            <code>true</code>
                            <span> | </span>
                            <code>false</code>
                          </div>
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
                          <div className="props-code-wrapper">
                            <code>formElementSizesEnum</code>
                            <span> | </span>
                            <code>&apos;small&apos;</code>
                            <span> | </span>
                            <code>&apos;medium&apos;</code>
                            <span> | </span>
                            <code>&apos;large&apos;</code>
                            <span> | </span>
                            <code>&apos;large1x&apos;</code>
                          </div>
                        </TableCell>
                        <TableCell>&apos;medium&apos;</TableCell>
                        <TableCell>
                          Determines how much space the button will consume on the page.
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell><code className="primary-color">type</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>&apos;button&apos;</code>
                            <span> | </span>
                            <code>&apos;reset&apos;</code>
                            <span> | </span>
                            <code>&apos;submit&apos;</code>
                          </div>
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
