/* eslint-disable react/jsx-one-expression-per-line */
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
import { Link } from 'react-router-dom';
import tooltipsScreenshot from '../../../../../../static/images/mockups/Tooltips.jpg';
import LightBox from '../../../../lightbox/LightBox';
import PreCode from '../../../../preCode/PreCode';
import pageUrls from '../../../../routing/pageUrls';
import SandboxExample from '../../../../sandbox/SandboxExample';
import StaticExample from '../../../../staticExamples/StaticExample';
import TooltipsExampleCodeReact from './TooltipsExampleCodeReact';
import TooltipsExampleProps from './TooltipsExampleProps';
import TooltipsExampleRender from './TooltipsExampleRender';

const propTypes = {};
const defaultProps = {};

function TooltipsDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Tooltips</h1>
      <p className="lead-in">Tooltips are floating labels to describe or add additional information when users hover over or focus on an interactive element.  Use sparingly.</p>
      <hr />
      <h2 id="section-example">Example</h2>
      <SandboxExample
        CODE_EXAMPLE={TooltipsExampleCodeReact}
        PROPS_EXAMPLE={TooltipsExampleProps}
        RENDER_EXAMPLE={TooltipsExampleRender}
      />
      <StaticExample
        title="Tooltip Examples"
        renderedExample={<LightBox image={tooltipsScreenshot} alt="Tooltips" className="flex-3up-gap" />}
        quickTips={(
          <ul>
            <li>Tooltips typically appear below their parent, unless there isn&apos;t space.</li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul>
        <li><strong>Enhance Confidence</strong>: Use <code>tooltips</code> to increase certainty about an interaction.</li>
        <li><strong>Interactive Elements</strong>: Use for <code>icon-only buttons</code>, <code>text links</code> (e.g. Opens in a new tab) or for a <code>button</code> with an associated keyboard shortcut.</li>
        <li><strong>Brief Descriptions</strong>: <code>Tooltips</code> should be short and descriptive.</li>
        <li><strong>Insufficient Space</strong>: Use when the description content would be too much information to include inline or create too much clutter.</li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Redundant Text</strong>: Don&apos;t use <code>tooltips</code> to restate visible UI text.</li>
        <li><strong>Critical Information</strong>: To communicate critical information, including errors in <code>forms</code> or other interaction feedback. Consider using <Link to={pageUrls.modals}>Modals</Link> or <Link to={pageUrls.notifications}>Notifications</Link>.</li>
        <li><strong>Avoid Links and Buttons</strong>: As <code>tooltips</code> only surface from a <code>hover</code>, never include <code>links</code> or <code>buttons</code> in the copy. If your <code>tooltip</code> requires either of these, consider putting your content in a <Link to={pageUrls.popups}>Popup</Link>.</li>
        <li><strong>Keep it Brief</strong>: Good <code>tooltips</code> contain concise and helpful information. Keep it short (we recommend no more than 5 words max). If you need more space, consider using a <Link to={pageUrls.popups}>Popup</Link>.</li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li><code>Tooltips</code> are used to provide additional information when space is tight.</li>
        <li><code>Tooltips</code> must be concise with one line of text.</li>
        <li><code>Tooltips</code> must be accessed via <code>hover</code> and <code>focus</code> only.</li>
        <li>Use <code>tooltips</code> on Interactive elements (<code>Buttons</code>, <code>Links</code>, <code>Icon buttons</code>) or Non-interactive elements (<code>Icons</code>, <code>Abbreviations</code>, Truncated <code>text</code>) — be mindful of keyboard accessibility.</li>
        <li>Use sparingly. <code>Tooltips</code> innately hide information. Consider exposing it immediately without a <code>tooltip</code> or removing it completely. If you&apos;re building something that requires a lot of <code>tooltips</code>, work on clarifying the design and the language in the experience.</li>
        <li>Never include any kind of error messages in a <code>tooltip</code>.</li>
        <li><code>Tooltips</code> have slightly different guidelines to <code>Popups</code> and <code>Modals</code>. For more information, see <Link to={pageUrls.popups}>Popup</Link> and <Link to={pageUrls.modals}>Modals</Link> guidelines.</li>
        <li>If the information is crucial for a user to proceed, consider using a <code>modal</code> or <code>inline notification</code> instead.</li>
        <li>The anatomy of a <code>tooltip</code> is made up of a <code>container</code>, <code>description</code> and <code>arrow</code>.
          <ul>
            <li>They do not include a <code>title</code> or <code>heading</code>. If you need to include a <code>title</code>, use a <code>Popup</code>.</li>
          </ul>
        </li>
        <li>A <code>tooltip</code> is connected to a trigger element, such as a <code>button</code> or <code>icon</code>, that shows the <code>tooltip</code> when the interactive trigger element is <code>hovered</code> or <code>focused</code>. (More details below.)</li>
        <li><code>Tooltip arrows</code> are positioned to any side of the container, depending on available space within the browser viewport.
          <ul>
            <li>The arrow always points to the trigger element</li>
          </ul>
        </li>
        <li>Needs to be discoverable:
          <ul>
            <li>E.g. an <code>icon</code>.</li>
            <li>Avoid triggering <code>tooltips</code> from text that excludes a visual indicator (e.g. <code>underline</code>, <code>dashed-underline</code>, or <code>icon</code>)</li>
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
        <li>Only show one <code>tooltip</code> at a time.</li>
      </ul>

      <h3 id="section-behavior-and-animation" className="mb-spacing">Behavior and Animation</h3>
      <ul className="mb-spacing">
        <li>By default, the tooltip&apos;s arrow centers to the trigger. The arrow may shift <code>left</code>, <code>right</code>, <code>up</code>, <code>down</code> depending on available space between trigger and viewport.</li>
        <li>By default, a <code>Tooltip</code> drops down from the trigger point, by <code>slide fading</code> towards the bottom of the screen away from the trigger point.</li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessability</h3>
      <p>Preferred Method</p>
      <ul className="mb-spacing">
        <li>Information contained in the <code>tooltip</code> should always be visible to the screen reader via <code>visually hidden text</code>, an <code>aria-label</code>, <code>aria-labelledby</code>, or <code>aria-describedby</code>.</li>
        <li>It is unnecessary to hide information from the screen reader in this instance unless it creates confusion for the user.</li>
      </ul>

      <p>If you must use a <code>tooltip</code> for a screen reader do the following:</p>
      <ul className="mb-spacing">
        <li><code>Tooltips</code> contain limited content so we can use an <code>announcer</code> to announce tooltip content to people using screen readers e.g. using an <code>ARIA live</code> region.</li>
        <li>A tooltip&apos;s trigger should be focusable, the <code>tooltip</code> should show on <code>focus</code> and hide on <code>blur</code>.</li>
        <li>Use <code>aria-hidden=&quot;true&quot;</code> to prevent screen readers from reading hidden <code>tooltips</code>. Change value to <code>false</code> when tooltip is visible.</li>
        <li>Tooltip trigger element should have an <code>aria-describedby</code> attribute which references to the <code>id</code> of the associated <code>tooltip</code>.</li>
        <li>By default, tooltips use <code>role=&quot;tooltip&quot;</code></li>
      </ul>

      <p>Tooltip is used for the <code>aria-labelledby</code>:</p>
      <PreCode
        className="gray-block"
        codeRaw={`<Button aria-labelledby="myTooltip">Blergh</Button>
<Tooltip id="myTooltip">My text</Tooltip>`}
      />

      <p>Hidden Tooltip because the accessible text is already there:</p>
      <PreCode
        className="gray-block"
        codeRaw={`<Button class="icon-button" data-tooltip="Something"><span className="visually-hidden">Description</span></Button>
<Tooltip id="myTooltip" aria-hidden>Description</Tooltip>`}
      />

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

TooltipsDocumentation.propTypes = propTypes;
TooltipsDocumentation.defaultProps = defaultProps;

export default TooltipsDocumentation;
