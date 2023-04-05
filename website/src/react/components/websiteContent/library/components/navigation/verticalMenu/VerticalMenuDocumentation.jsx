/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
import {
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
import { Link } from 'react-router-dom';
import pageUrls from '../../../../../routing/pageUrls';
import SandboxExample from '../../../../../sandbox/SandboxExample';
import StaticExample from '../../../../../staticExamples/StaticExample';
import VerticalMenuExampleCodeReact from './VerticalMenuExampleCodeReact';
import VerticalMenuExampleProps from './VerticalMenuExampleProps';
import VerticalMenuExampleRender from './VerticalMenuExampleRender';
import PreCode from '../../../../../preCode/PreCode';

/* eslint-disable react/jsx-one-expression-per-line */
const propTypes = {};
const defaultProps = {};
function VerticalMenuDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Vertical Menu</h1>
      <p className="lead-in">
        A vertical menu is a collection of links that aid in the navigation of a website or a list of interactive items that are arranged vertically.
        Typically, the vertical menu is located on the left or right side of the webpage, but can also be displayed in a popup.<br /><br />
        View more information about <Link to={pageUrls.sidePanelNavigation}>Side Panel Navigation</Link> or <Link to={pageUrls.popups}>Popups</Link>.

      </p>
      <hr />
      <h2 id="section-example">Example</h2>
      <SandboxExample
        RENDER_EXAMPLE={VerticalMenuExampleRender}
        PROPS_EXAMPLE={VerticalMenuExampleProps}
        CODE_EXAMPLE={VerticalMenuExampleCodeReact}
      />
      <StaticExample
        title="Vertical Menu Located Within the Side Panel Navigation"
        renderedExample={(
          <p>Here is an example</p>
        )}
        quickTips={(
          <ul>
            <li>Displayed on the left hand side of the page.</li>
            <li>
              <code>Menu&apos;s</code> in <code>side panel navigation</code> are generally considered <code>Landmark menus</code> and should be labelled as such. View more information under
              <Link to={pageUrls.accessibility}>Accessibility</Link>.
            </li>
            <li><code>List items</code> may have <code>sub-menus</code> that are indicated by a <code>chevron</code> located to the right of the text.</li>
            <li>
              When an item is selected (e.g. for the active page), a light gray background with a colored <code>chiclet</code> visually indicates the item is
              <code>selected</code> or has <code>focus</code>.
            </li>
            <li>
              Generally, items listed will link to pages within the website. If an item links to outside content, an <code>external link icon</code> should be
              displayed to the right of the text. View more information about <Link to={pageUrls.links}>Links</Link>.
            </li>
          </ul>
        )}
      />
      <StaticExample
        title="Vertical Menu Located Within the On-Page Navigation"
        renderedExample={(
          <p>Here is an example</p>
        )}
        quickTips={(
          <ul>
            <li>Items in this list link directly to content on the page.</li>
            <li>It is displayed on the right hand side of the page.</li>
            <li>
              <code>Menu&apos;s</code> in <code>On-Page navigation</code> are generally considered <code>Landmark menus</code> and should be labelled as such. View more information under <Link to={pageUrls.accessibility}>Accessibility</Link>.
            </li>
            <li><code>List items</code> may have <code>sub-menu items</code> that are indicated by <code>indentation levels</code>.</li>
            <li>When an item is selected or has <code>focus</code>, it is visually indicated by <code>bold</code>, <code>colored</code> text.</li>
            <li>The page will scroll to the linked content. A <code>scrolling animation</code> will help the user orient themselves on the page.</li>
          </ul>
        )}
      />
      <StaticExample
        title="Vertical Menu Located Within the Popup"
        renderedExample={(
          <p>Here is an example</p>
        )}
        quickTips={(
          <ul>
            <li>The <code>vertical menu</code> is displayed as content in a <code>popup</code>.</li>
            <li><code>List items</code> may have <code>sub-menus</code> that are indicated by a <code>chevron</code> located to the right of the text.</li>
            <li>
              When an item is <code>selected</code> or has <code>focus</code>, it is visually indicated with a light gray background and the text is <code>bold</code> and changes
              <code>color</code>.
            </li>
            <li>
              A <code>flyout menu</code> is a <code>sub-menu</code> that sits to the left or right of the the <code>popup menu</code>. A secondary <code>vertical menu</code> is contained
              within this <code>flyout menu</code>, and it is the child component to the selected <code>popup item</code>.
            </li>
            <li>If an item links to outside content, an <code>external link icon</code> should be displayed to the right of the text.</li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Navigating or highlighting action items.</strong> Use a <code>vertical menu</code> to perform an action link (<code>add</code>, <code>duplicate</code>, <code>refresh</code>, etc.)
          to content located within the page, or navigate the user to another page or outside link.
        </li>
        <li>
          <strong>Selecting from multiple options.</strong> Utilize a <code>vertical menu</code> when the user needs to make a selection from multiple
          options.
        </li>
      </ul>
      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>On mobile devices where menus have a long list of items.</strong> Avoid <code>vertical menus</code> when there is a long list of items.
          On mobile devices, this could potentially make it difficult for users to access the content.
        </li>
        <li>
          <strong>If the website has few pages or is focused on a single task.</strong> Most sites do not need menus located in a <code>side panel navigation</code>. A website that provides a single service may not require a full menu, but would do well with a <code>button group</code>,
          or a <code>horizontal navigation bar</code> (<code>main menu</code>). View more information on <Link to={pageUrls.buttonGroup}>Button Groups</Link> or <Link to={pageUrls.sidePanelNavigation}>Navigation</Link>.
        </li>
      </ul>
      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Use short descriptive text.</strong> Structure items in the list in short, concise topics or action words that give enough
          context to what the menu item is.
        </li>
        <li>
          <strong>Place important or frequently used items at the top of a short menu list.</strong> Typically, if the list of items is short,
          place the most important or frequently used items at the top.
        </li>
        <li>
          <strong>Make long menus easy to quickly scan/read.</strong> Organize longer lists in a way that is logical and makes the content easy
          to scan by the user. (e.g. <code>Alphabetically</code>, <code>chronologically</code>, or <code>numerically</code> if possible)
        </li>
        <li>
          <strong>Icon size should complement the neighboring text.</strong> Avoid overpowering the text with large icons. <code>Icons</code> may be present
          in the list but strive to keep the icon size consistent with the size of the text.
        </li>
        <li>
          <strong>Automatically expanded menu.</strong> When navigating to a page in the menu, the menu item should automatically expand and
          reflect the user&apos;s location.
        </li>
        <li>
          <strong>Use popup menus sparingly.</strong> Too many popup menus can create <code>noise</code> in screen readers and make the site difficult to
          understand the layout of the page.
        </li>
      </ul>
      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li>Text in a <code>vertical menu</code> should pass a <code>4.5:1</code> ratio. Including when the text has <code>focus</code></li>
        <li>
          <code>Links</code> with <code>focus</code> should have visual indicators:
          <ul>
            <li>Light color background behind the text</li>
            <li>Text that is <code>colored</code> and <code>bold</code></li>
            <li><code>Chiclet</code> identifying the user&apos;s location within the list</li>
          </ul>
        </li>
      </ul>
      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>The user should be able to easily navigate the entire menu with a <code>tab</code> key.</li>
      </ul>
      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>
          Aria Role:
          <ul>
            <li>The <code>role</code> should be assigned to the controlling element.</li>
            <li>
              The <code>role=&quot;navigation&quot;</code> identifies and conveys the structural information of the element on the page. And should be reserved for&nbsp;
              <code>landmark navigation</code> (e.g. The <code>main menu</code> or <code>side menu</code>). You would generally not use <code>role=&quot;navigation&quot;</code> for <code>popup menus</code>.
            </li>
            <li>The <code>role=&quot;menu&quot;</code> is added to a group of items that is presented as a <code>menu</code>. The list is not pertinent to the structure of the site.</li>
          </ul>
        </li>
        <li>
          Aria-label attribute:
          <ul>
            <li>This is needed to identify the purpose of the menu&apos;s contents.</li>
            <li>The label is used to distinguish the menu from other menus on the site.</li>
            <li>
              Screen readers will announce the element by <code>label</code> and then by <code>role</code>. Avoid adding the word <code>navigation</code> or
              <code>menu</code> to your label otherwise <code>navigation</code> or <code>menu</code> will be repeated and possibly confuse the
              user.
            </li>
          </ul>
        </li>
        <li>
          Aria-controls attribute:
          <ul>
            <li>This is applied when there is a <code>popup menu</code> or <code>child menu</code> involved.</li>
            <li>Can be used to programmatically associate the corresponding element or elements to the controlling element.</li>
          </ul>
        </li>
        <li>
          Aria-expanded attribute:
          <ul>
            <li>This needs to be on the <code>button</code> (controlling element), to indicate if the <code>child menu</code> (corresponding element) is <code>visible</code> or <code>hidden</code>.</li>
          </ul>
        </li>
        <li>
          Child Menus:
          <ul>
            <li>The controlling element is a list item that is a <code>button</code> which triggers the <code>flyout menu</code> to open.</li>
            <li><code>Aria-controls</code> should be added to identify the controlling element</li>
          </ul>
        </li>
        <li>Use an <code>Unordered</code> or <code>Ordered list</code> to organize the menu.</li>
      </ul>
      <h4>ARIA Examples</h4>
      <h5>Landmark Menus</h5>
      <PreCode
        codeRaw={`
<div role="navigation">
  <ul>
    <li>
      <a>Menu item 1</a>
    </li>
  </ul>
</div
        `}
      />
      <h5>Popup or Child Menus</h5>
      <PreCode
        codeRaw={`
<button 
  aria-haspopup="menu" 
  aria-controls="some-unique-id" 
  aria-expanded="false"
>
  Show Popup
</button>

<div id="some-unique-id">
  <ul role="menu" aria-label="popup-name">
    <li>Item One</li>
    <li>Item Two</li>
  </ul
</div>
        `}
      />
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

VerticalMenuDocumentation.propTypes = propTypes;
VerticalMenuDocumentation.defaultProps = defaultProps;

export default VerticalMenuDocumentation;
