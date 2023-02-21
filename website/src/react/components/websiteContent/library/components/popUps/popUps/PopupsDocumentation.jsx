import {
  Popup,
  Tab,
  TabGroup,
  Table, TableBody, TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow, TableRow,
  TableWrapper,
  TabList,
  TabPanel,
  TabPanels
} from '@utahdts/utah-design-system';
import { useRef, useState } from 'react';
import SandboxExample from '../../../../../sandbox/SandboxExample';
import StaticExample from '../../../../../staticExamples/StaticExample';
import PopUpsExampleCodeReact from './PopupsExampleCodeReact';
import PopUpsExampleProps from './PopupsExampleProps';
import PopUpsExampleRender from './PopupsExampleRender';

/* eslint-disable react/jsx-one-expression-per-line */
const propTypes = {};
const defaultProps = {};

function PopUpsDocumentation() {
  const buttonRef = useRef();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div className="documentation-content">
      <h1 id="h1-top">Pop Ups</h1>
      <div className="lead-in">
        <p>
          Popups are *non-modal boxes that are triggered by some input from the end user (e.g. clicking a target, or key presses).
          When the popup is triggered, new content is displayed near the triggering element. The popup is elevated above the main content of the page.
        </p>
        <p>
          <em>
            *Differentiation: Modals are boxes containing content that disables the page content and focuses the user’s attention on a single task
            or message. View more information on <a href="www.someLink.com" target="_blank">modals</a>
          </em>
        </p>
      </div>
      <hr />
      <h2 id="section-example">Example</h2>
      <SandboxExample
        RENDER_EXAMPLE={PopUpsExampleRender}
        PROPS_EXAMPLE={PopUpsExampleProps}
        CODE_EXAMPLE={PopUpsExampleCodeReact}
      />
      <StaticExample
        title="Basic Popup"
        renderedExample={(
          <>
            <button
              onClick={() => setIsPopupVisible((oldIsVisible) => !oldIsVisible)}
              onMouseEnter={() => setIsPopupVisible(true)}
              onMouseLeave={() => setIsPopupVisible(false)}
              ref={buttonRef}
              type="button"
            >
              Toggle Popup
            </button>
            <Popup
              isVisible={isPopupVisible}
              onVisibleChange={(_e, isVisible) => setIsPopupVisible(isVisible)}
              referenceElement={buttonRef}
            >
              <div>I am content in a Popup</div>
            </Popup>
          </>
        )}
        quickTips={(
          <ul>
            <li>A basic popup should have only a single brief sentence or description.</li>
            <li>
              An icon button is used to close the popup and can be used in combination with
              clicking outside of the popup, or mashing the escape key.
            </li>
            <li>Typically these should not interfere with the users ability to continue their work</li>
          </ul>
        )}
      />
      <StaticExample
        title="Popup Menu"
        renderedExample={(
          <p>Here is an example</p>
        )}
        quickTips={(
          <ul>
            <li>A menu popup has a list of items, and possibly icon buttons, that the user can select.</li>
            <li>
              Avoid  selection lists that have more than 15 options to choose from.
              Lists may not be visible on mobile screens if there are too many options.
            </li>
            <li>
              An icon button is used to close the popup and can be used in combination with
              clicking outside of the popup, or mashing the escape key.
            </li>
          </ul>
        )}
      />
      <StaticExample
        title="Popup Menu with Flyout Popups"
        renderedExample={(
          <p>Here is an example</p>
        )}
        quickTips={(
          <ul>
            <li>
              After a user hovers over a list item in the primary popup menu,
              a secondary fly-out popup appears next to the primary popup with another item list.
            </li>
            <li>A chevron icon should be used to identify a list item that has a sub list of items for the user to choose from.</li>
            <li>Avoid using fly-out menus as they are difficult for users with reduced dexterity and are difficult to use on mobile devices</li>
          </ul>
        )}
      />
      <StaticExample
        title="Popup Editor"
        renderedExample={(
          <p>Here is an example</p>
        )}
        quickTips={(
          <ul>
            <li>The popup editor should only contain one input element</li>
            <li>Typically use two buttons, one to cancel the action and one to continue the action</li>
            <li>
              An icon button should be used to close the popup and can be used in combination with
              clicking outside of the popup, or mashing the escape key.
            </li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Additional, non-critical, information.</strong> Use a popup to convey additional,
          non-critical, information to assist the user in completing an action.
        </li>
        <li>
          <strong>Limited space.</strong> Popups can be used to present the user with some interactivity when there is not enough space on the
          screen for an inline action.
        </li>
        <li>
          <strong>Minimal disruption to content flow.</strong> Use popups to create minimal disruption to the content flow, thereby not creating
          an annoying or frustrating user experience.
        </li>
      </ul>
      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Detailed content.</strong> If the content has detailed information that consists of more than a few sentences or more than
          one input consider using a Dialog or Modal.
        </li>
        <li>
          <strong>Users full attention required.</strong> Always use a Modal if the user&apos;s full attention needs to be on a particular form
          or content section.
        </li>
        <li>
          <strong>Use a tooltip for one or two words.</strong> Consider using a tooltip if the information does not need a click to be dismissed
          and the content is limited to one or two words. View more information on <a href="www.somelink.com" target="_blank">tooltips</a>.
        </li>
      </ul>
      <h3 id="section-usability">Usability Guidance</h3>
      <h4>Style</h4>
      <ul className="mb-spacing">
        <li><strong>Hover above the content.</strong> A popup should overlap in front of other UI elements. View more information about <a href="www.somelink.com" target="_blank">elevation</a>.</li>
        <li>
          <strong>Popup positioning.</strong> Popups should always be positioned within the viewable areas of the screen and be <code>8px</code>
          away from the element that launched them. The popup should appear next to (left, right, top, bottom) the element that launched it.
        </li>
      </ul>
      <h4>User Experience</h4>
      <ul className="mb-spacing">
        <li><strong>Trigger event onClick.</strong> The user should be able to click on the element to trigger the interaction.</li>
        <li>
          <strong>Mobile experience.</strong> Avoid using fly-out menus as they are difficult for users with reduced dexterity and are difficult to
          use on mobile devices.
        </li>
        <li>
          <strong>Easy to dismiss.</strong>Popups should be easily dismissable using a combination of an icon button,  clicking outside of the popup,
          or mashing the escape key.
        </li>
      </ul>
      <h3 id="section-accessibility">Accessability</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>Popup box should display over the main page content using a drop-shadow on the box.</li>
        <li>The popup boundary (the outside edge of the popup) must maintain a <code>3:1</code> contrast ratio or better.</li>
      </ul>
      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>Default focus should go to the first interative element.</li>
        <li>User should be able to open, close and navigate within the popup using only the keyboard.</li>
        <li>
          Be sure the content in the popup does not disappear prematurely and is visible until the user chooses to dismiss it or move away from it.
        </li>
        <li>
          Be sure the popup can be dismissed with the Escape key. Once dismissed, the user’s focus should return to the element that spawned the
          popup.
        </li>
        <li>Keyboard shortcuts include:</li>
        <ul>
          <li>&quot;Enter&quot; key should open the popup</li>
          <li>&quot;Esc&quot; key should dismiss the popup</li>
        </ul>
      </ul>
      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>
          When encountering an element that opens a popup, the user should be alerted to the purpose or intent of the popup and that their action will
          trigger the popup to open.
        </li>
        <li>Screen readers typically announce the name and role of the element first followed by the state of the element.</li>
        <li>Remeber that the focus is set on the first interactive element within the popup after it opens.</li>
        <li>Ensure that the user can easily close the popup and return to the main content of the website.</li>
        <li>Use popup menus sparingly. Too many popup menus can create &apos;noise&apos; in screen readers.</li>
      </ul>
      <h4>Aria Examples</h4>
      <h5>Menu</h5>
      <code>
        &lt;<strong>button</strong>&nbsp;aria-haspopup=&quot;menu&quot;&nbsp;aria-controls=&quot;<em>some-unique-id</em>&quot;
        &nbsp;aria-expanded=&quot;false&quot;&gt;
        <br />&nbsp;Show Menu<br />&lt;/<strong>button</strong>&gt;
      </code> <br />
      <code>
        &lt;<strong>div</strong> id=&quot;<em>some-unique-id</em>&quot;&gt;<br />
        &nbsp; &lt;<strong>ul</strong>  role=&quot;navigation&quot;  aria-label=&quot;popup-name&quot;&gt;&nbsp;...
        &lt;/<strong>ul</strong>&gt;<br />
        &lt;/<strong>div</strong>&gt;
      </code>
      <h5>Popup</h5>
      <code>
        &lt;<strong>button</strong>&nbsp;id=&quot;<em>some-unique-id</em>&quot;&nbsp;aria-haspopup=&quot;true&quot;
        &nbsp;aria-controls=&quot;menu&quot;&gt;<br />
        &nbsp;View Popup<br />&lt;/<strong>button</strong>&gt;<br />
        &lt;<strong>ul</strong>&nbsp;aria-labelledby=&quot;<em>some-unique-id</em>&quot;
        &nbsp;id=&quot;<em>some-unique-menu-id</em>&quot;&nbsp;role=&quot;menu&quot;&gt;&nbsp;<br />&nbsp;
        &lt;<strong>li</strong>&nbsp;role=&quot;presentation&quot;&gt;<br />
        &nbsp;&nbsp;&nbsp;&lt;<strong>a</strong>&nbsp;role=&quot;menuitem&quot;&gt;...&lt;/<strong>a</strong>&gt;<br />
        &nbsp;&nbsp;&lt;/<strong>li</strong>&gt;<br />
        &lt;/<strong>ul</strong>&gt;
      </code>
      <h2 id="section-settings-props">Settings and Props</h2>
      <div className="documentation-content--small-text">
        <TabGroup defaultValue="segmented-button-props-css">
          <TabList>
            <Tab id="segmented-button-props-css">CSS</Tab>
            <Tab id="segmented-button-props-react">React</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId="segmented-button-props-css">
              <TableWrapper>
                <Table className="table--lines-x">
                  <TableHead>
                    <TableHeadRow>
                      <TableHeadCell className="text-left css-classes">Css Classes</TableHeadCell>
                      <TableHeadCell className="text-left">Description</TableHeadCell>
                    </TableHeadRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell><code>.class</code></TableCell>
                      <TableCell>Class description.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableWrapper>
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
                      <TableCell><code className="primary-color">props</code></TableCell>
                      <TableCell>
                        <div className="props-code-wrapper">
                          <code>string</code>
                        </div>
                      </TableCell>
                      <TableCell>null</TableCell>
                      <TableCell>
                        What does this do?
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

PopUpsDocumentation.propTypes = propTypes;
PopUpsDocumentation.defaultProps = defaultProps;

export default PopUpsDocumentation;
