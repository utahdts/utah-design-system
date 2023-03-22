/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
import {
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
  TabPanels
} from '@utahdts/utah-design-system';
import SandboxExample from '../../../../sandbox/SandboxExample';
import StaticExample from '../../../../staticExamples/StaticExample';
import BadgesExampleCodeReact from './TooltipsExampleCodeReact';
import BadgesExampleProps from './TooltipsExampleProps';
import BadgesExampleRender from './TooltipsExampleRender';

/* eslint-disable react/jsx-one-expression-per-line */
const propTypes = {};
const defaultProps = {};

function BadgesDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Badges</h1>
      <p className="lead-in">Tooltips are floating labels to describe or add additional information when users hover over or focus on an interactive element.  Use sparingly.</p>
      <hr />
      <h2 id="section-example">Example</h2>
      <SandboxExample
        CODE_EXAMPLE={BadgesExampleCodeReact}
        PROPS_EXAMPLE={BadgesExampleProps}
        RENDER_EXAMPLE={BadgesExampleRender}
      />
      <StaticExample
        title="Emphasized Badges (Solid)"
        renderedExample={(
          <div>I am not a badge</div>
        )}
        quickTips={(
          <ul>
            <li>All your badges are belong to us.</li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul>
        <li><strong>Enhance Confidence</strong>: Use tooltips to increase certainty about an interaction.</li>
        <li><strong>Interactive Elements</strong>: Use for icon-only buttons, text links (e.g. Opens in a new tab) or for a button with an associated keyboard shortcut.</li>
        <li><strong>Brief Descriptions</strong>: Tooltips should be short and descriptive.</li>
        <li><strong>Insufficient Space</strong>: Use when the description content would be too much information to include inline or create too much clutter.</li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Redundant Text</strong>: Don’t use tooltips to restate visible UI text.</li>
        <li><strong>Critical Information</strong>: To communicate critical information, including errors in forms or other interaction feedback. Consider using Modals or Notifications</li>
        <li><strong>Avoid Links and Buttons</strong>: As tooltips only surface from a hover, never include links or buttons in the copy. If your tooltip requires either of these, consider putting your content in a Popup.</li>
        <li><strong>Keep it Brief</strong>: Good tooltips contain concise and helpful information. Keep it short (we recommend no more than 5 words max). If you need more space, consider using a Popup.</li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Convey dynamic information with navigation</strong>:  Use badges with navigation items to convey dynamic information associated with that destination.</li>
        <li><strong>Recommended Sizing</strong>:
          <ul>
            <li>Small badges should be smaller than large badges since they contain no information</li>
            <li>Large badge should be large enough for the information to be readable.</li>
            <li>Use a “+” to indicate a count greater than the available character count.
              <ul>
                <li>e.g. 9+, 99+, 999+</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Tooltips are used to provide additional information when space is tight.</li>
        <li>Tooltips must be concise with one line of text.</li>
        <li>Tooltips must be accessed via hover and focus only.</li>
        <li>Use tooltips on Interactive elements (Buttons, Links, Icon buttons) or Non-interactive elements (Icons, Abbreviations, Truncated text)—be mindful of keyboard accessibility.</li>
        <li>Use sparingly. Tooltips innately hide information. Consider exposing it immediately without a tooltip or removing it completely. If you’re building something that requires a lot of tooltips, work on clarifying the design and the language in the experience.</li>
        <li>Never include any kind of error messages in a tooltip.</li>
        <li>Tooltips have slightly different guidelines to Popups and Modals. For more information, see Popup and Modal guidelines.</li>
        <li>If the information is crucial for a user to proceed, consider using a modal or inline notification instead.</li>
        <li>The anatomy of a tooltip is made up of a container, description and arrow.
          <ul>
            <li>They do not include a title or heading. If you need to include a title, use a Popup.</li>
          </ul>
        </li>
        <li>A tooltip is connected to a trigger element, such as a button or icon, that shows the tooltip when the interactive trigger element is hovered or focused. (More details below.)</li>
        <li>Tooltip arrows are positioned to any side of the container, depending on available space within the browser viewport.
          <ul>
            <li>The arrow always points to the trigger element</li>
          </ul>
        </li>
        <li>Needs to be discoverable:
          <ul>
            <li>E.g. an icon.</li>
            <li>Avoid triggering tooltips from text that excludes a visual indicator (e.g. underline, dashed-underline or icon)</li>
          </ul>
        </li>
        <li>Only trigger tooltips from:
          <ul>
            <li>Interactive Elements
              <ul>
                <li>Buttons</li>
                <li>Links</li>
                <li>Icon Buttons</li>
              </ul>
            </li>Non-interactive elements (be mindful of keyboard accessibility):
              <ul>
                <li>Icons</li>
                <li>Abbreviations (e.g. dashed underlined text for HRIS that shows a tooltip that says Human Resource Information System)</li>
                <li>Truncated text</li>
              </ul>
          </ul>
        </li>
        <li>Only show one tooltip at a time.</li>
      </ul>

      <h3 id="section-behavior-and-animation" className="mb-spacing">Behavior and Animation</h3>
      <ul className="mb-spacing">
        <li>By default, the tooltip’s arrow centers to the trigger. The arrow may shift left, right, up, down depending on available space between trigger and viewport.</li>
        <li>By default, a Tooltip drops down from the trigger point, by “slide fading” towards the bottom of the screen away from the trigger point.</li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessability</h3>
      <p>Preferred Method</p>
      <ul className="mb-spacing">
        <li>Information contained in the tooltip should always be visible to the screen reader via visually hidden text, an aria-label, aria-labelledby, or aria-describedby.</li>
        <li>It’s unnecessary to hide information from the screen reader in this instance unless it creates confusion for the user.</li>
      </ul>

      <p>If you must use a tooltip for a screen reader do the following:</p>
      <ul className="mb-spacing">
        <li>Tooltips contain limited content so we can use an ‘announcer’ to announce tooltip content to people using screen readers e.g. using an ARIA live region.</li>
        <li>A tooltip’s trigger should be focusable, the tooltip should show on focus and hide on blur.</li>
        <li>Use <code>aria-hidden=&quot;true&quot;</code> to prevent screen readers from reading hidden tooltips. Change value to <code>false</code> when tooltip is visible.</li>
        <li>Tooltip trigger element should have an aria-describedby attribute which references to the <code>id</code> of the associated tooltip.</li>
        <li>By default, tooltips use <code>role=&quot;tooltip&quot;</code></li>
      </ul>

      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>The accessibility label for a badge item will be read after its navigation destination or button label. (e.g. Alerts, 1 unread alert; News, 5 new news items)</li>
        <li>Large badges will have their text read. Additional contextual information visible only to the screen reader may be required to provide context.
          <ul>
            <li>Good: 12 Unread Messages; 5 Unread Alerts</li>
            <li>Bad: 12; 5</li>
          </ul>
        </li>
        <li>Small badges will simply announce &quot;new notification” or “notifications available”.</li>
      </ul>

      <h2 id="section-settings-props">Settings and Props</h2>
      <div className="documentation-content--small-text">
        <TabGroup defaultValue="badge-props-css">
          <TabList>
            <Tab id="badge-props-css">CSS</Tab>
            <Tab id="badge-props-react">React</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId="badge-props-css">
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
                      <TableCell><code>.badge</code></TableCell>
                      <TableCell>The base css class for a badge.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableWrapper>
            </TabPanel>

            <TabPanel tabId="badge-props-react">
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

BadgesDocumentation.propTypes = propTypes;
BadgesDocumentation.defaultProps = defaultProps;

export default BadgesDocumentation;
