/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import {
  componentColors,
  formElementSizesEnum,
  IconButton,
  ICON_BUTTON_APPEARANCE,
  Tab,
  TabGroup,
  Table, TableBody, TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow, TableRow,
  TableWrapper,
  TabList,
  TabPanel,
  TabPanels,
} from '@utahdts/utah-design-system';
import SandboxExample from '../../../../../sandbox/SandboxExample';
import IconButtonExampleCodeReact from './IconButtonExampleCodeReact';
import IconButtonExampleProps from './IconButtonExampleProps';
import IconButtonExampleRender from './IconButtonExampleRender';
import StaticExample from '../../../../../staticExamples/StaticExample';
import ButtonCssClassesDocumentation from '../button/ButtonCssClassesDocumentation';

const propTypes = {};
const defaultProps = {};

function IconButtonDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Icon Button</h1>
      <p className="lead-in">
        Icon <code>&lt;buttons&gt;</code> are primarily buttons that include a single icon, without visible text labels by default.
      </p>
      <hr />
      <h2 id="section-example">Example</h2>
      <SandboxExample
        RENDER_EXAMPLE={IconButtonExampleRender}
        PROPS_EXAMPLE={IconButtonExampleProps}
        CODE_EXAMPLE={IconButtonExampleCodeReact}
      />
      <StaticExample
        title="Emphasized Icon Buttons (solid background boundary)"
        renderedExample={(
          <>
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              color={componentColors.PRIMARY}
              icon={(<span className="utds-icon-before-gear" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the gear icon button')}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              color={componentColors.SECONDARY}
              icon={(<span className="utds-icon-before-alert" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the alert icon button')}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              color={componentColors.ACCENT}
              icon={(<span className="utds-icon-before-arrow-right" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the right arrow icon button')}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              icon={(<span className="utds-icon-before-x-icon" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the x icon button')}
              title="Settings"
            />
          </>
        )}
        quickTips={(
          <ul>
            <li>Emphasized <code>icon buttons</code> have a solid background.</li>
            <li>Used to emphasize a <code>button</code> when multiple buttons appear on a page or in close proximity.</li>
            <li>Limit the number of <code>emphasized buttons</code> in a view to ensure your <code>button</code> emphasis isn&apos;t diluted</li>
            <li>
              When used in proximity to other buttons:
              <ul>
                <li>Should appear on the right.</li>
              </ul>
            </li>
          </ul>
        )}
      />
      <StaticExample
        title="Unemphasized Icon Buttons (outlined boundary)*"
        renderedExample={(
          <>
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.OUTLINED}
              color={componentColors.PRIMARY}
              icon={(<span className="utds-icon-before-search" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the search icon button')}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.OUTLINED}
              color={componentColors.SECONDARY}
              icon={(<span className="utds-icon-before-bookmark" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the bookmark icon button')}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.OUTLINED}
              color={componentColors.ACCENT}
              icon={(<span className="utds-icon-before-check" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the check icon button')}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.OUTLINED}
              icon={(<span className="utds-icon-before-star" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the star icon button')}
              title="Settings"
            />
          </>
        )}
        quickTips={(
          <ul>
            <li>Used to deemphasize a <code>button</code>. This is the default look of a <code>button</code>.</li>
            <li>
              When used in proximity to other <code>buttons</code>:
              <ul>
                <li>Should appear on the left of an <code>emphasized button</code>.</li>
              </ul>
            </li>
            <li>Solid outline. <code>Icon</code> matches the <code>button color</code></li>
            <li>* - This is the default appearance of an <code>icon button</code>.</li>
          </ul>
        )}
      />
      <StaticExample
        title="Borderless Icon Buttons (no visible button boundary)"
        renderedExample={(
          <>
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              color={componentColors.PRIMARY}
              icon={(<span className="utds-icon-before-bookmark" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the bookmark icon button')}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              color={componentColors.SECONDARY}
              icon={(<span className="utds-icon-before-info" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the info icon button')}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              color={componentColors.ACCENT}
              icon={(<span className="utds-icon-before-help" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the help icon button')}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              icon={(<span className="utds-icon-before-copy" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the copy icon button')}
              title="Settings"
            />
          </>
        )}
        quickTips={(
          <ul>
            <li>While there may be cases where <code>borderless buttons</code> may sit next to <code>Emphasized</code> or <code>Unemphasized buttons</code>, using consistent <code>button styles</code> should be used when possible to lessen confusion.</li>
            <li>Does not have a border or background, except when hovered, pressed, or selected.</li>
            <li>Used in more compact spaces like <code>icon groupings</code> and <code>displays</code> where text won&apos;t comfortably fit alongside <code>icons</code>.</li>
            <li><code>Icon buttons</code> should have a minimum touch zone of <code>36-48px</code> to make it easier to activate on a touch device.</li>
          </ul>
        )}
      />
      <StaticExample
        title="Sizes"
        renderedExample={(
          <>
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              color={componentColors.PRIMARY}
              icon={(<span className="utds-icon-before-gear" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the Small1X icon button')}
              size={formElementSizesEnum.SMALL1X}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              color={componentColors.PRIMARY}
              icon={(<span className="utds-icon-before-gear" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the small icon button')}
              size={formElementSizesEnum.SMALL}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              icon={(<span className="utds-icon-before-gear" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the medium icon button')}
              size={formElementSizesEnum.MEDIUM}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              color={componentColors.PRIMARY}
              icon={(<span className="utds-icon-before-gear" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the large icon button')}
              size={formElementSizesEnum.LARGE}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              color={componentColors.PRIMARY}
              icon={(<span className="utds-icon-before-gear" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the Large1X icon button')}
              size={formElementSizesEnum.LARGE1X}
              title="Settings"
            />
          </>
        )}
        quickTips={(
          <ul>
            <li>The preferred <code>button size</code> is the default (<code>medium</code>).</li>
            <li>Do not mix <code>buttons</code> of different sizes in close proximity.</li>
          </ul>
        )}
      />
      <StaticExample
        title="Enabled / Disabled"
        renderedExample={(
          <>
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              color={componentColors.PRIMARY}
              icon={(<span className="utds-icon-before-gear" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the enabled gear icon button')}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              color={componentColors.PRIMARY}
              icon={(<span className="utds-icon-before-gear" aria-hidden="true" />)}
              isDisabled
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the disabled gear icon button')}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.OUTLINED}
              icon={(<span className="utds-icon-before-copy" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the enabled copy icon button')}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.OUTLINED}
              icon={(<span className="utds-icon-before-copy" aria-hidden="true" />)}
              isDisabled
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the disabled copy icon button')}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              color={componentColors.SECONDARY}
              icon={(<span className="utds-icon-before-arrow-right" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the enabled right arrow icon button')}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              color={componentColors.SECONDARY}
              icon={(<span className="utds-icon-before-arrow-right" aria-hidden="true" />)}
              isDisabled
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the disabled right arrow icon button')}
              title="Settings"
            />
          </>
        )}
        quickTips={(
          <ul>
            <li><code>Disabled buttons</code> do not allow user interaction.</li>
            <li><code>Disabled buttons</code> are visually <code>grayed out</code>.</li>
            <li>Use the built-in attribute <code>disabled</code> to disable a <code>button</code>.</li>
          </ul>
        )}
      />
      <StaticExample
        title="Hovered"
        renderedExample={(
          <div>Hover over the examples above.</div>
        )}
        quickTips={(
          <ul>
            <li><code>Hover</code> is the state when a pointing cursor enters the <code>button boundary</code>.</li>
            <li>The <code>hover state</code> changes from the <code>normal state</code> to provide the user with a visual cue.</li>
          </ul>
        )}
      />
      <StaticExample
        title="Pressed"
        renderedExample={(
          <>
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              className="button--active"
              color={componentColors.PRIMARY}
              icon={(<span className="utds-icon-before-gear" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the pressed gear icon button')}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.OUTLINED}
              className="button--active"
              icon={(<span className="utds-icon-before-copy" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the pressed copy icon button')}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              className="button--active"
              color={componentColors.SECONDARY}
              icon={(<span className="utds-icon-before-arrow-right" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the pressed right arrow icon button')}
              title="Settings"
            />
          </>
        )}
        quickTips={(
          <ul>
            <li>The <code>button</code> produces a visual cue that it is being pressed.</li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Compact buttons</strong>. <code>Icon buttons</code> should be used when a <code>compact button</code> is required, such as in a <code>toolbar</code>, <code>header</code>, or <code>action bar</code>.</li>
        <li><strong>Adjacent icon buttons</strong>. They are often used when there are 2 or 3 adjacent <code>icon buttons</code> that perform actions on a single item.</li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>No associated button action</strong>. Use a <code>plain icon</code> when there is no associated <code>button action</code>.</li>
        <li><strong>Multiple icon buttons in a table row</strong>. Avoid using more than 1 <code>icon button</code> in a <code>table row</code> to avoid confusion and to simplify the table information.</li>
        <li><strong>When space is available, use a button with text</strong>. Generally, use a <code>button with text</code> when there is enough space.</li>
        <li><strong>Use text link for navigation within a paragraph of text</strong>.</li>
        <li><strong>Icon button style as a link</strong>. Avoid using the <code>icon button style</code> as a <code>link</code>. Generally <code>icon buttons</code> are used for actions.</li>
      </ul>

      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Clearly communicates purpose</strong>. The <code>icon</code> in the <code>button</code> should clearly communicate the purpose of the <code>button</code> and be unambiguous to the user.</li>
        <li><strong>Compact layout</strong>. Use <code>icon buttons</code> to display actions in a compact layout.</li>
        <li><strong>Triggers action</strong>. <code>Icon buttons</code> can represent opening actions such as opening an overflow menu, a modal or search, or represent binary actions that can be toggled on and off, such as a favorite or bookmark.</li>
        <li><strong>Grouped together or stand alone</strong>. <code>Icon buttons</code> can be grouped together or they can stand alone.</li>
        <li><strong>Presented in a row</strong>. <code>Icon buttons</code> are typically presented in a row when they are grouped together.</li>
        <li><strong>When hovered, include a tool tip</strong>. When the <code>button</code> is hovered, include a <code>tooltip</code> that describes the button&apos;s action, rather than the name of the <code>icon</code> itself.</li>
        <li><strong>Minimum touch zone for touch devices</strong>. <code>Icon buttons</code> should have a minimum touch zone of <code>36-48px</code> to make it easier to activate on a touch device.</li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li><code>Icon buttons</code> must maintain a <code>3:1</code> contrast ratio or better: The <code>button boundary</code> (the outside edge of the button) must maintain a <code>3:1</code> contrast ratio or better.</li>
        <li><code>Icon button</code> text must maintain a <code>4.5:1</code> contrast ratio or better.</li>
        <li>The icon button&apos;s <code>focus state</code> should have a <code>3:1</code> contrast ratio.</li>
      </ul>
      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>When the <code>icon button</code> receives focus, the <code>tooltip</code> should be visible (except when the <code>icon button</code> displays a <code>popup</code>).</li>
        <li><code>Buttons</code> natively receive keyboard focus so there&apos;s no need to add a <code>tabindex</code> attribute.</li>
        <li>The <code>icon button</code> should display a visible <code>focus state</code> when users tab to it.</li>
        <li>
          Avoid using non-standard html markup for an <code>icon button</code> such as a <code>div</code> tag.
          <ul>
            <li>The first rule of ARIA: <code>Before you use ARIA, use native HTML elements or attributes first!</code></li>
          </ul>
        </li>
      </ul>
      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>
          <code>Icon buttons</code> should have an <code>aria-label</code> or <code>visually hidden</code> text to describe the action for people using assistive technologies, such as screen readers:
          <ul>
            <li>Generally don&apos;t use more than 2 to 3 words.</li>
            <li>Use verbs first; use only verbs where possible e.g. <code>Save</code>.</li>
            <li>Avoid unnecessary words and articles, such as <code>the</code> or <code>a</code>.</li>
            <li>Use sentence case.</li>
          </ul>
        </li>
        <li>Avoid using the words <code>image</code> or <code>icon</code> in the description label. For example, if the <code>icon</code> is a magnifying lens used to promote a search, use the word <code>Search</code> instead of <code>magnifying lens</code>.</li>
      </ul>

      <h2 id="section-settings-props">Settings and Props</h2>
      <div className="documentation-content--small-text">
        <TabGroup defaultValue="segmented-button-props-css">
          <TabList>
            <Tab id="segmented-button-props-css">CSS</Tab>
            <Tab id="segmented-button-props-react">React</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId="segmented-button-props-css">
              <h3>Icon Button Specific CSS Classes</h3>
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
                      <TableCell><code>.icon-button</code></TableCell>
                      <TableCell>The base css class for an icon button. You must include both <code>button</code> and <code>icon-button</code> classes for it to render properly.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code>.icon-button--borderless</code></TableCell>
                      <TableCell>Render an icon button without a visible button boundary.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableWrapper>

              <h3 className="mt-spacing-l">CSS Classes shared with Button</h3>
              <ButtonCssClassesDocumentation />
            </TabPanel>
            <TabPanel tabId="segmented-button-props-react">
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
                          <span> | </span>
                          <code>&apos;borderless&apos;</code>
                        </div>
                      </TableCell>
                      <TableCell><code>&apos;outlined&apos;</code></TableCell>
                      <TableCell>
                        Determines how the button will be formatted. Solid buttons have a solid fill color and denote emphasis
                        to the user. Outlined buttons have an outline but no fill causing them to be less emphasized. Borderless have no button boundary.
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
                      <TableCell><code>&apos;none&apos;</code></TableCell>
                      <TableCell>
                        Determines the color from the theme that will be used while rendering the button. Depending on the
                        <span className="font-semi-bold"> appearance</span> of the button, this can effect the border and/or fill color of the button.
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell><code className="primary-color">icon</code></TableCell>
                      <TableCell><code>react node</code></TableCell>
                      <TableCell><em>required</em></TableCell>
                      <TableCell>
                        This is the icon that will be displayed. There are a myriad of css-class icons available. See the example sandbox at the top of the&nbsp;
                        page to see options and an example of usage.
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
                      <TableCell><code className="primary-color">innerRef</code></TableCell>
                      <TableCell><code>MutableRefObject</code></TableCell>
                      <TableCell>null</TableCell>
                      <TableCell>
                        This ref will be attached to the rendered &lt;button&gt; element allowing the parent component to interact
                        directly with the actual <span className="font-semi-bold">button</span> DOM element.
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
                      <TableCell><code>false</code></TableCell>
                      <TableCell>
                        When <span className="font-semi-bold">isDisabled</span> is true, the button will become unclickable
                        and its appearance will change to be more subdued
                        so that the user can tell the button is unusable.
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell><code className="primary-color">onClick</code></TableCell>
                      <TableCell><code>function</code></TableCell>
                      <TableCell>null</TableCell>
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
                          <code>&apos;small1x&apos;</code>
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
                      <TableCell><code>&apos;medium&apos;</code></TableCell>
                      <TableCell>
                        Determines how much space the button will consume on the page.
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell><code className="primary-color">title</code></TableCell>
                      <TableCell>
                        <div className="props-code-wrapper">
                          <code>string</code>
                        </div>
                      </TableCell>
                      <TableCell><em>required</em></TableCell>
                      <TableCell>
                        A title is required for accessibility and is used for the pop over tooltip.
                      </TableCell>
                    </TableRow>

                  </TableBody>
                </Table>
              </TableWrapper>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}

IconButtonDocumentation.propTypes = propTypes;
IconButtonDocumentation.defaultProps = defaultProps;

export default IconButtonDocumentation;
