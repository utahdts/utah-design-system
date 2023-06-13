/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
  TableWrapper,
} from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import menusDropdownScreenshot from '../../../../../../../static/images/mockups/MenusDropdown.jpg';
import LightBox from '../../../../../lightbox/LightBox';
import PreCodeForCodeString from '../../../../../preCode/PreCodeForCodeString';
import pageUrls from '../../../../../routing/pageUrls';
import StaticExample from '../../../../../staticExamples/StaticExample';

const propTypes = {};
const defaultProps = {};

function MainMenuDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Main Menu</h1>
      <p className="lead-in">
        The Main Menu and Search Component is the primary navigation tool for the entire site. It
        is comprised of two sections, the Main Menu and Search tools. To add increased trust, the
        Main Menu and Search tools will have a distinct look and feel that is similar across all
        agency sites.
      </p>

      <hr />

      <h2 id="section-example">Example</h2>
      <StaticExample
        title="Main Menu"
        renderedExample={<LightBox image={menusDropdownScreenshot} alt="Main Menu Examples" className="flex-3up-gap" />}
        quickTips={(
          <ul>
            <li>Horizontal menu that serves as the main navigation for the site.</li>
            <li>Typically list items in the menu should have no more than 2 words.</li>
            <li>There are 3 types of menu items: Links, Custom Function, or a List of Menu Items (vertical menu). See below guidance for when to use each type and when not to use.</li>
            <li>Sub-menus are Vertical menus displayed within a Popup (e.g. <code>Popup menu</code>, <code>Flyout</code> or a <code>Mega menu</code>). They are indicated by a down arrow to the right of the topic.</li>
            <li>Has a &quot;chiclet&quot;, a thin line at the top of the active menu item.</li>
            <li>Active list items will be bold, and the text color should match the primary color.</li>
          </ul>
        )}
      />
      <p>View more information on <Link to={pageUrls.popups}>Popups</Link>, or <Link to={pageUrls.verticalMenu}>Vertical menus</Link>.</p>

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Main Menu</strong>
          <ul>
            <li><strong>Always use</strong>. The Main Menu and Search bar is used in conjunction with the Utah Header to instill a sense of trust that this is a State of Utah site.</li>
            <li><strong>Main menu items can be links</strong>. Use this when you need to send the user to a specific url.</li>
            <li><strong>Open up a list of menu items</strong>. Main menu items can display a list of sub menus in either a Popup menu or a Mega Menu.</li>
            <li><strong>Menu items can be a custom function</strong>. If you would like the menu item to trigger a function.</li>
            <li><strong>Sub menu options</strong>. Sub menu is a Vertical menu that can be displayed in Popups (e.g. <code>Popup menu</code>, <code>Flyout</code> or a <code>Mega menu</code>).</li>
          </ul>
        </li>
      </ul>
      <p>View more information on <Link to={pageUrls.popups}>Popups</Link>, <Link to={pageUrls.verticalMenu}>Vertical Menus</Link> or <Link to={pageUrls.links}>Links</Link> regarding internal versus external links.</p>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Avoid menus that are more than 3 levels deep.</strong> Menus that are more than 3 levels deep are a challenge to navigate for those with motor skill challenges. It can even be frustrating to those without motor skill challenges.</li>
        <li><strong>Menu items that have a double role</strong>. Some WordPress menus have a mega menu where their menu items can be both a link and have a list of children menu items. This way the menu item can be triggered for navigation or can expand to its children items. Unfortunately, these combo menu items, when viewing in a smaller mobile view, no longer are triggerable so the user loses the ability to navigate to that menu item because triggering that menu item will expand the children menu items.
          <br />Because of this limitation of mobile, it was decided to only ever allow one menu type for a menu item. It is suggested, in the case where you do want a combo menu item, that the link be placed, instead of on the menu item, in the sub menu items as the first &quot;summary/overview&quot; link.
        </li>
      </ul>

      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Always use the Main Menu in conjunction with the Utah Header</strong>. The Utah Header and the Main Menu and Search bar will be used together across all state websites and applications.</li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast" className="mt-spacing">Contrast</h4>
      <ul>
        <li>Maintain a minimum <code>4.5:1 </code>contrast ratio for all interactions (e.g. hover, focus).</li>
      </ul>
      <h4 id="section-keyboard-interactivity" className="mt-spacing">Keyboard Interactivity</h4>
      <ul>
        <li>Users must be able to to navigate using the <code>tab</code> key.</li>
        <li>Users must be able to select the navigation item using the <code>Enter/Return</code> keys.</li>
      </ul>
      <h4 id="section-screen-readers" className="mt-spacing">Screen Readers</h4>
      <ul>
        <li>The main menu is a landmark role used for accessibility. It is recommended that you wrap the main menu in a <code>&lt;nav&gt;</code> tag, or as a fallback use <code>role=&quot;navigation&quot;</code>.</li>
        <li>To ensure a good user experience when navigating the site, follow the accessibility guidance for <Link to={pageUrls.popups}>Popup menus and Flyout Menus</Link>.</li>
      </ul>

      <h2 id="section-mainmenu-settings" className="mb-spacing mt-spacing">Settings</h2>
      <h3 id="section-mainmenu-props">Config Props</h3>
      <TableWrapper>
        <Table className="table--lines-x">
          <TableHead>
            <TableHeadRow>
              <TableHeadCell className="text-left">Name / Type / Default</TableHeadCell>
              <TableHeadCell className="text-left">Description</TableHeadCell>
            </TableHeadRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <span className="prop__name"><a href="#section-mainMenu">mainMenu</a></span><br />
                <span className="prop__types">MainMenu</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  The Utah Header&apos;s Main Menu allows common site navigation across all State of Utah content.
                  Use the Utah Header Main Menu configuration to create your site&apos;s navigation.
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span className="prop__name"><a href="#section-mainMenu">mainMenu.menuItems</a></span><br />
                <span className="prop__types">MainMenuItem[]</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  The menu items to show in the Main Menu.
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-mainMenu">mainMenu.menuItems[].actionUrl</a></span><br />
                <span className="prop__types">MenuItemUrlAction</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  A URL to which the menu item will navigate.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-mainMenu">mainMenu.menuItems[].actionFunction</a></span><br />
                <span className="prop__types">function</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  A callback function that will be called when the menu item is triggered.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-mainMenu">mainMenu.menuItems[].actionFunctionUrl</a></span><br />
                <span className="prop__types">MenuItemFunctionUrlAction</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  For Single Page Apps, navigation does not reload the page. The link should still show a url, but the functionality
                  should not be of a link. The actionFunctionUrl option allows specifying the link but also provide a custom
                  callback so as to trigger things like React Router.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-mainMenu">mainMenu.menuItems[].actionMenu</a></span><br />
                <span className="prop__types">MenuItem[]</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  This menu item may have nested children menu items.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-mainMenu">mainMenu.menuItems[].childrenMenuType</a></span><br />
                <span className="prop__types">flyout | inline | mega-menu</span>
                <br />
                Default: <code>flyout</code>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  Children menu items can open in different styles:
                  <ul>
                    <li>flyout: opens its own popup</li>
                    <li>inline: has toggles for open close</li>
                    <li>mega-menu: all the menu items are expanded into a single view</li>
                  </ul>
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-mainMenu">mainMenu.menuItems[].className</a></span><br />
                <span className="prop__types">string</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  Can provide a css class to put on the menu item. Helpful for marking a menu item as selected or other statuses.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-mainMenu">mainMenu.menuItems[].icon</a></span><br />
                <span className="prop__types">Element</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  An HTML Element to show as the icon next the menu item title.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-mainMenu">mainMenu.menuItems[].isDivider</a></span><br />
                <span className="prop__types">boolean</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  Marks the menu item as a divider by adding aria attributes and a role to the menu item.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-mainMenu">mainMenu.menuItems[].isSelected</a></span><br />
                <span className="prop__types">boolean</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  If true the a class of <code>menu-item--selected</code> is added to the menu item.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-mainMenu">mainMenu.menuItems[].title</a></span><br />
                <span className="prop__types">boolean</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  The title to show on the menu item.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__name"><a href="#section-mainMenu">mainMenu.title</a></span><br />
                <span className="prop__types">string</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  The title of the main menu. Used for accessability. Should be something descriptive, like
                  &quot;Utah Design System Main Menu&quot;
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>

      <h3 id="section-mainMenu" className="mt-spacing">Code</h3>
      <div>
        The <code>mainMenu</code> is the main navigation for your application. A user should be able to easily get to the major
        areas of your application through the main menu.
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                mainMenu: {
                  menuItems: [
                    {
                      actionUrl: {
                        url: '/'
                      },
                      icon: document.getElementById('home-menu-item-icon-id'),
                      title: 'Home'
                    },
                    {
                      title: 'Function',
                      actionFunction: () => window.location = '/Function',
                    },
                    {
                      actionFunctionUrl: {
                        url: 'https://visible-url.edu',
                        actionFunction: () => window.location = '/nowhere',
                      },
                      title: 'Function/Url'
                    },
                    {
                      isDivider: true,
                      title: '--divider--',
                    }
                    {
                      actionMenu: [
                        {
                          childrenMenuType: 'mega-menu',
                          isSelected: true,
                          title: 'child2-1',
                          actionMenu: [
                            {
                              title: 'child2-1-1',
                              actionUrl: {
                                url: '/children'
                              }
                            },
                            {
                              title: 'child2-1-2',
                              actionUrl: {
                                url: '/children'
                              }
                            },
                            {
                              title: 'child2-1-3',
                              actionUrl: {
                                url: '/children'
                              }
                            }
                          ]
                        },
                        {
                          className: 'make-me-vibrant',
                          title: 'child2-2',
                          actionMenu: [
                            {
                              title: 'child2-2-1',
                              actionUrl: {
                                url: '/children'
                              }
                            },
                            {
                              title: 'child2-2-2',
                              actionUrl: {
                                url: '/children'
                              }
                            },
                            {
                              title: 'child2-2-3',
                              actionUrl: {
                                url: '/children'
                              }
                            }
                          ]
                        }
                      ],
                      title: 'Menu'
                    }
                  ],
                  title: 'Utah Design System Main Menu'
                },
              }
            )
          `}
        />
      </div>
    </div>
  );
}

MainMenuDocumentation.propTypes = propTypes;
MainMenuDocumentation.defaultProps = defaultProps;

export default MainMenuDocumentation;
