/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { childrenMenuTypes, Popup, popupPlacement, VerticalMenu } from '@utahdts/utah-design-system';
import { useImmer } from 'use-immer';
import { useRef } from 'react';
import verticalMenuLeftSidebarScreenshot from '../../../../../../../static/images/screenshots/components/vertical-menu/verticalMenuLeftSidebar.jpg';
import verticalMenuRightSidebarScreenshot from '../../../../../../../static/images/screenshots/components/vertical-menu/verticalMenuRightSidebar.jpg';
import { LightBox } from '../../../../../lightbox/LightBox';
import { PreCodeForCodeString } from '../../../../../preCode/PreCodeForCodeString';
import { pageUrls } from '../../../../../routing/pageUrls';
import { StaticExample } from '../../../../../staticExamples/StaticExample';
import { SandboxExample } from '../../../../../sandbox/SandboxExample';
import { VerticalMenuExampleRender } from './VerticalMenuExampleRender';
import { VerticalMenuExampleProps } from './VerticalMenuExampleProps';
import { VerticalMenuExampleCodeReact } from './VerticalMenuExampleCodeReact';

export function VerticalMenuDocumentation() {
  const buttonRef = useRef(null);
  const [showPopup, setShowPopup] = useImmer(false);
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Vertical Menu</h1>
      <p className="lead-in">
        A vertical menu is a collection of links that aid in the navigation of a website or a list of interactive items that are arranged vertically.
        Typically, the vertical menu is located on the left or right side of the webpage, but can also be displayed in a popup.<br /><br />
        View more information about <Link to={pageUrls.sidePanelNavigation}>Side Panel</Link> or <Link to={pageUrls.popups}>Popups</Link>.
      </p>
      <hr />
      <h2 id="section-example">Example</h2>
      <SandboxExample
        defaultProps={{
          // @ts-ignore
          childrenMenuType: childrenMenuTypes.INLINE,
        }}
        RENDER_EXAMPLE={VerticalMenuExampleRender}
        PROPS_EXAMPLE={VerticalMenuExampleProps}
        CODE_EXAMPLE={VerticalMenuExampleCodeReact}
        componentClassName="sandbox-example__component--outline"
      />
      <StaticExample
        title="Vertical Menu Located Within the Side Panel"
        renderedExample={<LightBox image={verticalMenuLeftSidebarScreenshot} alt="Vertical Menu Sidebar" className="flex-3up-gap" />}
        quickTips={(
          <ul>
            <li>Displayed on the left hand side of the page.</li>
            <li>
              Menu&apos;s in <Link to={pageUrls.sidePanelNavigation}>side panels</Link> are generally considered Landmark menus and should be labelled as such.
              View more information under <Link to={pageUrls.accessibility}>Accessibility</Link>.
            </li>
            <li>List items may have sub-menus that are indicated by a chevron located to the right of the text.</li>
            <li>
              When an item is selected (e.g. for the active page), a light gray background with a colored chiclet visually indicates the item is
              selected or has focus.
            </li>
            <li>
              Generally, items listed will link to pages within the website. If an item links to outside content, an external link icon should be
              displayed to the right of the text. View more information about <Link to={pageUrls.links}>Links</Link>.
            </li>
          </ul>
        )}
      />
      <StaticExample
        title="Vertical Menu Located Within the On-Page Navigation"
        renderedExample={<LightBox image={verticalMenuRightSidebarScreenshot} alt="Vertical Menu - On this page" className="flex-3up-gap" />}
        quickTips={(
          <ul>
            <li>Items in this list link directly to content on the page.</li>
            <li>It is displayed on the right hand side of the page.</li>
            <li>
              Menu&apos;s in On-Page navigation are generally considered Landmark menus and should be labelled as such. View more information under <Link to={pageUrls.accessibility}>Accessibility</Link>.
            </li>
            <li>List items may have sub-menu items that are indicated by indentation levels.</li>
            <li>When an item is selected or has focus, it is visually indicated by bold, colored text.</li>
            <li>The page will scroll to the linked content. A scrolling animation will help the user orient themselves on the page.</li>
          </ul>
        )}
      />
      <StaticExample
        title="Vertical Menu Located Within a Popup"
        renderedExample={(
          <div>
            <button
              aria-controls="id-for-example1"
              aria-expanded={showPopup}
              aria-haspopup="dialog"
              id="button-for-example1"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setShowPopup(!showPopup);
              }}
              ref={buttonRef}
              type="button"
            >
              Toggle Menu
            </button>
            <Popup
              ariaLabelledBy="button-for-example1"
              id="id-for-example-menu-popup"
              isVisible={showPopup}
              onVisibleChange={(_e, isVisible) => setShowPopup(isVisible)}
              placement={popupPlacement.BOTTOM}
              referenceElement={buttonRef}
              role="dialog"
            >
              <VerticalMenu menus={[
                {
                  header: '',
                  id: 'static-vertical-menu',
                  menuItems: [
                    {
                      id: 'menu-in-popup-A',
                      title: 'Popup Menu Item',
                      children: [
                        { title: 'Sub-menu Item A', id: 'AA' },
                        { title: 'Sub-menu Item B', id: 'BB' },
                        { title: 'Sub-menu Item C', id: 'CC' },
                      ],
                      childrenMenuType: childrenMenuTypes.FLYOUT,
                    },
                    {
                      id: 'menu-in-popup-B',
                      title: 'Another Menu Item',
                      childrenMenuType: childrenMenuTypes.FLYOUT,
                    },
                    {
                      id: 'menu-in-popup-C',
                      title: 'Last Menu Item',
                      childrenMenuType: childrenMenuTypes.FLYOUT,
                    },
                  ],
                },
              ]}
              />
            </Popup>
          </div>
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
          <strong>Navigating or highlighting action items.</strong> Use a vertical menu to perform an action link (add, duplicate, refresh, etc.)
          to content located within the page, or navigate the user to another page or outside link.
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
          <strong>If the website has few pages or is focused on a single task.</strong> Most sites do not need menus located in a <Link to={pageUrls.sidePanelNavigation}>side panel</Link>. A website that provides a single service may not require a full menu, but would do well with a button group,
          or a horizontal navigation bar (main menu). View more information on <Link to={pageUrls.buttonGroup}>Button Groups</Link> or <Link to={pageUrls.sidePanelNavigation}>Navigation</Link>.
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
          to scan by the user. (e.g. Alphabetically, chronologically, or numerically if possible)
        </li>
        <li>
          <strong>Icon size should complement the neighboring text.</strong> Avoid overpowering the text with large icons. Icons may be present
          in the list but strive to keep the icon size consistent with the size of the text.
        </li>
        <li>
          <strong>Automatically expanded menu.</strong> When navigating to a page in the menu, the menu item should automatically expand and
          reflect the user&apos;s location.
        </li>
        <li>
          <strong>Use popup menus sparingly.</strong> Too many popup menus can create noise in screen readers and make the site difficult to
          understand the layout of the page.
        </li>
      </ul>
      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li>Text in a vertical menu should pass a <code>4.5:1</code> ratio. Including when the text has focus</li>
        <li>
          Links with focus should have visual indicators:
          <ul>
            <li>Light color background behind the text</li>
            <li>Text that is colored and bold</li>
            <li>Chiclet identifying the user&apos;s location within the list</li>
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
            <li>The role should be assigned to the controlling element.</li>
            <li>
              The <code>role=&quot;navigation&quot;</code> identifies and conveys the structural information of the element on the page. And should be reserved for&nbsp;
              landmark navigation (e.g. The main menu or side menu). You would generally not use <code>role=&quot;navigation&quot;</code> for popup menus.
            </li>
            <li>The <code>role=&quot;menu&quot;</code> is added to a group of items that is presented as a menu. The list is not pertinent to the structure of the site.</li>
          </ul>
        </li>
        <li>
          Aria-label attribute:
          <ul>
            <li>This is needed to identify the purpose of the menu&apos;s contents.</li>
            <li>The label is used to distinguish the menu from other menus on the site.</li>
            <li>
              Screen readers will announce the element by label and then by role. Avoid adding the word <code>navigation</code> or {' '}
              <code>menu</code> to your label otherwise navigation or menu will be repeated and possibly confuse the user.
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
            <li><code>Aria-controls</code> should be added to identify the controlling element</li>
          </ul>
        </li>
        <li>Use an Unordered or Ordered list to organize the menu.</li>
      </ul>
      <h4>ARIA Examples</h4>
      <h5>Landmark Menus</h5>
      <PreCodeForCodeString
        className="gray-block"
        codeRaw={`<div role="navigation">
  <ul>
    <li>
      <a>Menu item 1</a>
    </li>
  </ul>
</div`}
      />
      <h5>Popup or Child Menus</h5>
      <PreCodeForCodeString
        className="gray-block"
        codeRaw={`<button
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
</div>`}
      />
    </div>
  );
}
