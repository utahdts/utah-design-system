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
import SandboxExample from '../../../../../sandbox/SandboxExample';
import StaticExample from '../../../../../staticExamples/StaticExample';
import VerticalMenuExampleCodeReact from './VerticalMenuExampleCodeReact';
import VerticalMenuExampleProps from './VerticalMenuExampleProps';
import VerticalMenuExampleRender from './VerticalMenuExampleRender';

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
        View more information about <a href="www.somelink.com" target="_blank">Side Panel Navigation</a> or <a href="www.somelink.com" target="_blank">Popups</a>

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
              Menu’s in side panel navigation are generally considered Landmark menus and should be labelled as such. View more information under
              <a href="www.somelink.com" target="_blank">Accessibility</a>.
            </li>
            <li>List items may have sub-menus that are indicated by a chevron located to the right of the text.</li>
            <li>
              When an item is selected (e.g. for the active page), a light gray background with a colored chiclet visually indicates the item is
              selected or has focus.
            </li>
            <li>
              Generally, items listed will link to pages within the website. If an item links to outside content, an external link icon should be
              displayed to the right of the text. View more information about <a href="www.someLink.com">Links</a>.
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
              Menu’s in On-Page navigation are generally considered Landmark menus and should be labelled as such. View more information under
              <a href="www.someLink.com" target="_blank">Accessibility</a>
            </li>
            <li>List items may have sub-menu items that are indicated by indentation levels.</li>
            <li>When an item is selected or has focus, it is visually indicated by bold, colored text.</li>
            <li>The page will scroll to the linked content. A scrolling animation will help the  user orient themselves on the page.</li>
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
            <li>The vertical menu is displayed as content in a popup.</li>
            <li>List items may have sub-menus that are indicated by a chevron located to the right of the text.</li>
            <li>
              When an item is selected or has focus, it is visually indicated with a light gray background and the text is bold and changes
              color.
            </li>
            <li>
              A flyout menu is a sub-menu that sits to the left or right of the the popup menu. A secondary vertical menu is contained
              within this flyout menu, and it is the child component to the selected popup item.
            </li>
            <li>If an item links to outside content, an external link icon should be displayed to the right of the text.</li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Navigating or highlighting action items.</strong> Use a vertical menu to perform an action (add, duplicate, refresh, etc.),
          link to content located within the page, or navigate the user to another page or outside link.
        </li>
        <li>
          <strong>Selecting from multiple options.</strong> Utilize a vertical menu when the user needs to make a selection from multiple
          options.
        </li>
      </ul>
      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>On mobile devices where menus have a long list of items.</strong> Avoid vertical menus when there is a long list of items.
          On mobile devices, this could potentially make it difficult for users to access the content.
        </li>
        <li>
          <strong>If the website has few pages or is focused on a single task.</strong> Most sites do not need menus located in a side
          panel navigation.  A website that provides a single service may not require a full menu, but would do well with a button group,
          or a horizontal navigation bar (main menu). View more information on <a href="www.someLink.com" target="_blank">Button Groups</a>
          or <a href="www.someLink.com" target="_blank">Navigation</a>
        </li>
      </ul>
      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Use short descriptive text.</strong> Structure items in the list in short, concise topics or action words that give enough
          context to what the menu item is.
        </li>
        <li>
          <strong>Place important or frequently used items at the top of a short menu list.</strong> Typically if the list of items is short,
          place the most important or frequently used items at the top.
        </li>
        <li>
          <strong>Make long menus easy to quickly scan/read.</strong> Organize longer lists in a way that is logical and makes the content easy
          to scan by the user. (e.g. Alphabetically, chronologically, or numerically if possible)
        </li>
        <li>
          <strong>Icon size should complement the neighboring text.</strong> Avoid overpowering the text with large icons. Icons may be present
          in the list but strive to keep the icon size consistent with the size of the text.
        </li>
        <li>
          <strong>Automatically expanded menu.</strong> When navigating to a page in the menu, the menu item should automatically expand and
          reflect the user’s location.
        </li>
        <li>
          <strong>Use popup menus sparingly.</strong> Too many popup menus can create ‘noise’ in screen readers and make the site difficult to
          understand the layout of the page.
        </li>
      </ul>
      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li>Text in a vertical menu should pass a 4.5:1 ratio. Including when the text has focus</li>
        <li>
          Links with focus should have visual indicators:
          <ul>
            <li>Light color background behind the text</li>
            <li>Text that is colored and bold</li>
            <li>Chiclet identifying users location within the list</li>
          </ul>
        </li>
      </ul>
      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>The user should be able to easily navigate the entire menu with a tab key.</li>
      </ul>
      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>
          Aria Role:
          <ul>
            <li>The role should be assigned to the controlling element.</li>
            <li>
              The role=”navigation” identifies and conveys the structural information of the element on the page. And should be reserved for landmark
              navigation (e.g. The main menu or side menu). You would generally not use role=”navigation” for popup menus.
            </li>
            <li>The role=”menu” is added to a group of items that is presented as a menu. The list is not pertinent to the structure of the site.</li>
          </ul>
        </li>
        <li>
          Aria-label attribute:
          <ul>
            <li>This is needed to identify the purpose of the menu’s contents.</li>
            <li>The label is used to distinguish the menu from other menus on the site.</li>
            <li>
              Screen readers will announce the element by <u>label</u> and then by <u>role</u>. Avoid adding the word &lsquo;navigation&rsquo; or
              &lsquo;menu&rsquo; to your label otherwise &lsquo;navigation&rsquo; or &lsquo;menu&rsquo; will be repeated and possibly confuse the
              user.
            </li>
          </ul>
        </li>
        <li>
          Aria-controls attribute:
          <ul>
            <li>This is applied when there is a popup menu or child menu involved.</li>
            <li>Can be used to programmatically associate the corresponding element or elements to the controlling element.</li>
          </ul>
        </li>
        <li>
          Aria-expanded attribute:
          <ul>
            <li>This needs to be on the button (controlling element), to indicate if the child menu (corresponding element) is visible or hidden.</li>
          </ul>
        </li>
        <li>
          Child Menus:
          <ul>
            <li>The controlling element is a list item that is a button which triggers the flyout menu to open.</li>
            <li>Aria-controls should be added to identify the controlling element</li>
          </ul>
        </li>
        <li>Use an Unordered or Ordered list to organize the menu.</li>
      </ul>
      <h4>ARIA Examples</h4>
      <h5>Landmark Menus</h5>
      <code>
        &lt;<strong>div</strong> role=&quot;navigation&quot;&gt;<br />
        &nbsp;&nbsp;&lt;<strong>ul</strong>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<strong>li</strong>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<strong>a</strong>&gt;Menu item 1&lt;/<strong>a</strong>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<strong>li</strong>&gt;<br />
        &nbsp;&nbsp;&lt;/<strong>ul</strong>&gt;<br />
        &lt;/<strong>div</strong>&gt;
      </code>
      <h5>Popup or Child Menus</h5>
      <code>
        &lt;<strong>button</strong> aria-haspopup=&quot;menu&quot;&gt; aria-controls=&quot;<em>some-unique-id</em>&quot;<br />
        &nbsp;&nbsp;aria-expanded=&quot;false&quot;<br />
        &gt;Show Popup<br />
        &lt;/<strong>button</strong>&gt;<br />

        &lt;<strong>div</strong> id=&quot;<em>some-unique-id</em>&quot;&gt;<br />
        &nbsp;&nbsp;&lt;<strong>ul</strong><br />
        &nbsp;&nbsp;&nbsp;&nbsp;role=&quot;menu&quot;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;aria-label=&quot;<em>popup-name</em>&quot;<br />
        &nbsp;&nbsp;&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<strong>li</strong>&gt;Item One&lt;/<strong>li</strong>&gt;<br />
        &nbsp;&nbsp;&lt;/<strong>ul</strong><br />
        &lt;/<strong>div</strong>&gt;
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

VerticalMenuDocumentation.propTypes = propTypes;
VerticalMenuDocumentation.defaultProps = defaultProps;

export default VerticalMenuDocumentation;
