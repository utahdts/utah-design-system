/* eslint-disable max-len */
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
import { PreCodeForCodeString } from '../../../../../preCode/PreCodeForCodeString';

export function MainMenuSettingsAndCode() {
  return (
    <>
      <h3 id="section-mainmenu-settings" className="mb-spacing mt-spacing">Main Menu Settings</h3>
      <h4 id="section-mainmenu-props">Config Props</h4>
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
                  The Utah Header&apos;s Main Menu allows common site navigation across all state of Utah content.
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
                  An object which contains the URL to which the menu item will navigate.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-menu-items">mainMenu.menuItems[].actionUrl.url</a></span><br />
                <span className="prop__types">string</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  A URL to which the menu item will navigate.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-menu-items">mainMenu.menuItems[].actionUrl.openInNewTab</a></span><br />
                <span className="prop__types">boolean</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  Should the URL open in a new tab?
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
                  This menu item may have nested children menu items. <a href="#section-menuitem-settings">See here for MenuItem</a>.
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
                <span className="prop__types">string</span>
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
                  The title of the main menu. Used for accessibility. Should be something descriptive, like
                  &quot;Utah Design System Main Menu&quot;
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>

      <h3 id="section-menuitem-settings" className="mb-spacing mt-spacing">Menu Item Settings</h3>
      <h4 id="section-menuitem-props">Config Props</h4>
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
                <span className="prop__description"><a href="#section-auth-menu-items">menuItems[].actionUrl</a></span><br />
                <span className="prop__types">MenuItemUrlAction</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  A object which contains the URL to which the menu item will navigate.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-menu-items">menuItems[].actionUrl.url</a></span><br />
                <span className="prop__types">string</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  A URL to which the menu item will navigate.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-menu-items">menuItems[].actionUrl.openInNewTab</a></span><br />
                <span className="prop__types">boolean</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  Should the URL open in a new tab?
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-menu-items">menuItems[].actionFunction</a></span><br />
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
                <span className="prop__description"><a href="#section-auth-menu-items">menuItems[].actionFunctionUrl</a></span><br />
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
                <span className="prop__description"><a href="#section-auth-menu-items">menuItems[].actionFunctionUrl.actionFunction</a></span><br />
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
                <span className="prop__description"><a href="#section-auth-menu-items">menuItems[].actionFunctionUrl.skipHandleEvent</a></span><br />
                <span className="prop__types">boolean</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  Should handleEvent automatically be used to call your function to stop propagation and prevent default.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-menu-items">menuItems[].actionFunctionUrl.openInNewTab</a></span><br />
                <span className="prop__types">boolean</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  <code>True</code> to have the link say it will open in a new window; defaults to <code>false</code>.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-menu-items">menuItems[].actionFunctionUrl.url</a></span><br />
                <span className="prop__types">boolean</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  The url to show when hovered. (Note: the url is not actually navigated to, the <code>actionFunction</code> is called instead.)
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-menu-items">menuItems[].actionMenu</a></span><br />
                <span className="prop__types">MenuItem[]</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  This menu item may have nested children menu items. <a href="#section-menuitem-settings">See here for MenuItem</a>.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-mainMenu">menuItems[].className</a></span><br />
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
                <span className="prop__description"><a href="#section-mainMenu">menuItems[].icon</a></span><br />
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
                <span className="prop__description"><a href="#section-mainMenu">menuItems[].isDivider</a></span><br />
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
                <span className="prop__description"><a href="#section-mainMenu">menuItems[].isSelected</a></span><br />
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
                <span className="prop__description"><a href="#section-mainMenu">menuItems[].title</a></span><br />
                <span className="prop__types">string</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  The title to show on the menu item.
                </span>
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableWrapper>

      <h4 id="section-mainMenu" className="mt-spacing">Code</h4>
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
                      actionUrl: {
                        url: 'https://somesite.utah.gov',
                        openInNewTab: true
                      },
                      title: 'External Site'
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
    </>
  );
}
