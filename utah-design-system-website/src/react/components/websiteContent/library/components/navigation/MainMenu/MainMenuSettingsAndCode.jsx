/* eslint-disable max-len */
import {
  TableCell,
  TableRow,
} from '@utahdts/utah-design-system';
import { PreCodeForCodeString } from '../../../../../preCode/PreCodeForCodeString';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function MainMenuSettingsAndCode() {
  return (
    <>
      <h3 id="section-mainmenu-settings" className="mb-spacing mt-spacing">Main Menu Settings</h3>
      <h4 id="section-mainmenu-props">Config Props</h4>
      <h3><code><a href="#section-mainMenu">mainMenu</a></code></h3>
      <span className="prop__types">MainMenu</span>
      <p>
        The Utah Header&apos;s Main Menu allows common site navigation across all state of Utah content.
        Use the Utah Header Main Menu configuration to create your site&apos;s navigation.
      </p>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell>
              <code><a href="#section-menuitem-settings">menuItems</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>MainMenuItem[]</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The menu items to show in the Main Menu.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-mainMenu">parentMenuLinkSuffix</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
                <span> | </span>
                <code>(menuItem) =&gt; string</code>
              </div>
            </TableCell>
            <TableCell><code>Overview</code></TableCell>
            <TableCell>
              A menu item that has children menu items and it itself is also a link causes issues with
              mobile touch only devices since those devices don&apos;t have a `hover` for opening the children.
              They rely on a click to open the menu which would also trigger the link. Therefore, the menu item
              has its link added to the top of its children and no longer is a link itself but only opens its
              children. The created child men item has a title of the parent&apos;s title with the
              word &apos;Overview&apos; appended to it. This <code>parentMenuLinkSuffix</code> property
              allows overriding the suffix added to the auto created child menu item.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-mainMenu">title</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>string</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The title of the main menu. Used for accessibility. Should be something descriptive, like
              &quot;Utah Design System Main Menu&quot;
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3 id="section-menuitem-settings" className="mb-spacing mt-spacing">Menu Item Settings</h3>
      <h4 id="section-menuitem-props">Config Props</h4>
      <h3><code><a href="#section-mainMenu">menuItems</a></code></h3>
      <span className="prop__types">MainMenuItem[]</span>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell>
              <code><a href="#section-auth-menu-items">actionUrl</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>MenuItemUrlAction</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              A object which contains the URL to which the menu item will navigate.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-menu-items">actionUrl.url</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>string</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              A URL to which the menu item will navigate.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-menu-items">actionUrl.openInNewTab</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>boolean</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Should the URL open in a new tab?
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-menu-items">actionFunction</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>function</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              A callback function that will be called when the menu item is triggered.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-menu-items">actionMenu</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>MenuItem[]</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This menu item may have nested children menu items. <a href="#section-menuitem-settings">See here for MenuItem</a>.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-mainMenu">className</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>string</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Can provide a css class to put on the menu item. Helpful for marking a menu item as selected or other statuses.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-mainMenu">icon</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>Element</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An HTML Element to show as the icon next the menu item title.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-mainMenu">isDivider</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>boolean</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Marks the menu item as a divider by adding aria attributes and a role to the menu item.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-mainMenu">isSelected</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>boolean</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              <span className="prop__description">
                If true the a class of <code>menu-item--selected</code> is added to the menu item.
              </span>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-mainMenu">title</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>string</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The title to show on the menu item.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code><a href="#section-mainMenu">menuItems[].actionFunctionUrl</a></code></h3>
      <span className="prop__types">MenuItemFunctionUrlAction</span>
      <p>
        For Single Page Apps, navigation does not reload the page. The link should still show a url, but the functionality
        should not be of a link. The actionFunctionUrl option allows specifying the link but also provide a custom
        callback so as to trigger things like React Router.
      </p>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell>
              <code><a href="#section-auth-menu-items">actionFunction</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>function</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              A callback function that will be called when the menu item is triggered.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-menu-items">skipHandleEvent</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>boolean</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Should handleEvent automatically be used to call your function to stop propagation and prevent default.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-menu-items">openInNewTab</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>boolean</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              <code>True</code> to have the link say it will open in a new window; defaults to <code>false</code>.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-menu-items">url</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>string</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The url to show when hovered. (Note: the url is not actually navigated to, the <code>actionFunction</code> is called instead.)
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

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
