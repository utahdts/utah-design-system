/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
import {
  Button,
  events,
  ExternalLink,
  formElementSizesEnum,
  ICON_BUTTON_APPEARANCE,
  IconButton,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
  TableWrapper
} from '@utahdts/utah-design-system';
import {
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { Link } from 'react-router-dom';
import agencyBrand from '../../../../../../static/images/designSystemCircleGray.png';
import menusDropdownScreenshot from '../../../../../../static/images/mockups/MenusDropdown.jpg';
import searchModalScreenshot from '../../../../../../static/images/screenshots/patterns/header/searchModal.jpg';
import useTextAreaCaretRowColumn from '../../../../../hooks/useTextAreaCaretRowColumn';
import CopyButton from '../../../../copy/CopyButton';
import LightBox from '../../../../lightbox/LightBox';
import PreCode from '../../../../preCode/PreCode';
import pageUrls from '../../../../routing/pageUrls';
import StaticExample from '../../../../staticExamples/StaticExample';
import formatHeaderSettingsForCopy from './formatHeaderSettingsForCopy';
import useInteractiveHeaderState from './useInteractiveHeaderState';
import UtahHeaderInteractivePresetSelector from './UtahHeaderInteractivePresetSelector';
import utahHeaderPresets from './utahHeaderPresets';

// eslint-disable-next-line import/no-unresolved
import utahUnbrandLarge from '../../../../../../../../@utahdts/utah-design-system-header/src/js/renderables/utahLogo/html/UtahLogoLarge.html?raw';
// eslint-disable-next-line import/no-unresolved
import utahUnbrandMedium from '../../../../../../../../@utahdts/utah-design-system-header/src/js/renderables/utahLogo/html/UtahLogoMedium.html?raw';

const propTypes = {};
const defaultProps = {};

function UtahHeaderDocumentation() {
  const interactiveTextAreaRef = useRef(/** @type {HTMLInputElement} */(null));
  const {
    headerString,
    setHeaderString,
    headerIsOn,
    parseError,
    setHeaderIsOn,
    reset: resetHeader,
    setHeaderSettings,
  } = useInteractiveHeaderState();
  const { column, position, row } = useTextAreaCaretRowColumn(interactiveTextAreaRef);

  useEffect(
    () => {
      // when string is changed externally (reset, apply), update the text area
      interactiveTextAreaRef.current.value = headerString;
    },
    [headerString]
  );

  // hook up dirty state checking for the apply button
  const [isDirty, setIsDirty] = useState(false);
  const isDirtyIntervalRef = useRef(NaN);
  useEffect(
    () => {
      isDirtyIntervalRef.current = setInterval(() => {
        setIsDirty(parseError || !headerIsOn || headerString !== interactiveTextAreaRef.current?.value);
      }, 500);

      return () => clearInterval(isDirtyIntervalRef.current);
    },
    [headerIsOn, headerString, parseError]
  );

  return (
    <div className="documentation-content">
      <h1 id="h1-top">Utah Header</h1>
      <p className="lead-in">
        The header is the focal point of the Utah design system. Its distinguishing characteristics set it apart from all other components. The purpose of its components is to promote a consistent look, feel, and user experience throughout all state websites and applications.
      </p>
      <p className="lead-in">
        The components contained within the header include the <strong>Utah, an official website</strong>, <strong>Agency Icon and Title</strong>
        , <strong>Action Items</strong>, <strong>Main Menu</strong>, and <strong>Search</strong>.
      </p>
      <hr />
      <div className="header-config__title">
        <h2 id="section-example">Example</h2>
        <Switch
          id="header-config-on-off"
          label="Turn On/Off Custom Header"
          labelClassName="visually-hidden"
          labelOn="Header Config On"
          labelOff="Header Config Off"
          onChange={useCallback(() => setHeaderIsOn((wasHeaderOn) => !wasHeaderOn))}
          size={formElementSizesEnum.LARGE}
          value={headerIsOn}
          width={140}
        />
      </div>
      <div className="sandbox-example">
        <div className="sandbox-example__top">
          <div className="sandbox-example__component">
            <div className="sandbox-example__code-editor-wrapper">
              <textarea
                defaultValue={headerString}
                className="sandbox-example__code-editor"
                ref={interactiveTextAreaRef}
                wrap="off"
              />
              <CopyButton
                copyRef={interactiveTextAreaRef}
                onCopy={useCallback((textToCopy) => formatHeaderSettingsForCopy(textToCopy))}
              />
              <div className="sandbox-example__code-info">
                <span>Pos {position}, </span>
                <span>Ln {row}, </span>
                <span>Col {column}</span>
              </div>
            </div>

            {
              parseError
                ? (
                  <div className="sandbox-example__code-error">
                    <div>
                      <span className="utds-icon-before-error" aria-hidden="true" />
                      <span className="visually-hidden">error</span>
                    </div>
                    {parseError.replace(/^SyntaxError: /, '')}
                  </div>
                )
                : undefined
            }
          </div>
          <div className="sandbox-example__props-inputs header-config__controls">
            <div className="header-config__presets mb-spacing-s">
              {
                utahHeaderPresets.map((preset) => (
                  <UtahHeaderInteractivePresetSelector
                    key={`preset__${preset.title}`}
                    onSelect={(_e, selectedOption) => (
                      // set the new settings object as the new settings state and
                      // apply just the preset.settingsSnippet fields to the settings
                      setHeaderSettings((draftHeaderObject) => {
                        Object.entries(selectedOption.settingsSnippet)
                          .forEach(([settingKey, settingValue]) => {
                            draftHeaderObject[settingKey] = settingValue;
                          });
                      })
                    )}
                    options={preset.options}
                    title={preset.title}
                  />
                ))
              }
            </div>
            <div className="header-config__apply-reset">
              <Button onClick={resetHeader}>Reset</Button>
              <Button
                appearance="solid"
                color="primary"
                id="apply-interactive-utah-header"
                isDisabled={!isDirty}
                onClick={useCallback(() => setHeaderString(interactiveTextAreaRef.current.value))}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>

      <StaticExample
        title="Utah, an official website"
        renderedExample={(
          <>
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: utahUnbrandLarge }} style={{ height: '70px' }} />
            <div style={{ width: '100px' }}>&nbsp;</div>
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: utahUnbrandMedium }} style={{ height: '60px' }} />
          </>
        )}
        quickTips={(
          <ul>
            <li>The Utah identification is required on all headers.</li>
            <li>The <code>Utah, an official website</code> helps the user to know that they are visiting an official State website.</li>
            <li>At the moment, the color of the identification can be changed to match the primary or secondary color of the site.</li>
            <li>Depending on the height of the header use one of the above sizes (eg <code>SMALL</code>, <code>MEDIUM</code>, or <code>LARGE</code>).
              <ul>
                <li><code>Utah, an official state website</code> (for <code>LARGE</code> headers)</li>
                <li><code>Utah, an official website</code> (for <code>MEDIUM</code> and <code>SMALL</code> headers)</li>
              </ul>
            </li>
          </ul>
        )}
      />

      <StaticExample
        title="Agency Icon and Title"
        renderedExample={(
          <div style={{ height: '50px' }}>
            <h1 className="utds-logo-wrapper agency-brand-example" style={{ marginBottom: '0' }}>
              <a className="utds-title-wrapper" href="#">
                <div className="utds-title-wrapper__logo"><img alt="agency brand example" src={agencyBrand} /></div>
                <div className="utds-title-wrapper__title">Utah Design System</div>
              </a>
            </h1>
          </div>
        )}
        quickTips={(
          <ul>
            <li>The Agency Icon and Title section is required on all headers. It can be just a logo, or a title or a combination of both.</li>
            <li>The title is always required even if it is not visible, so screen readers can identify the site.</li>
            <li>If you are using an image, such as a <code>png</code>, <code>jpg</code> or <code>svg</code> that contains both the agency logo and title, the text of the agency title should be at least <code>14px</code> as well. The text should also maintain a <code>4.5:1</code> contrast ration against the background.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Action Items"
        renderedExample={(
          <>
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              icon={(<span className="utds-icon-before-waffle" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the waffle icon button')}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              icon={(<span className="utds-icon-before-alert" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the alert icon button')}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              icon={(<span className="utds-icon-before-help" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the help icon button')}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              icon={(<span className="utds-icon-before-gear" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the gear icon button')}
              title="Settings"
            />
          </>

        )}
        quickTips={(
          <ul>
            <li>Action items are not required, but can be utilized based on need.</li>
            <li>Action items are icon buttons that can be used in combination with badges.</li>
            <li>The Waffle icon is represented by an icon that is a square made up of 9 dots. It is a popup menu that can contain additional navigation or frequently used services.</li>
            <li>The Alert icon is represented by a bell icon. It will eventually be linked to the Citizen Portal.</li>
            <li>The Help icon is represented by a question mark icon. It is a popup menu that provides help items relative to the site.</li>
            <li>The Settings icon is represented by a gear icon. It is a popup menu that allows the user to configure settings relative to the site or application that they are logged into or viewing.</li>
            <li>The UtahID Login is a button that allows the user to login to their UtahID and Citizen Portal (eventually) accounts.</li>
            <li>Action items can have 2 different types of popups.
              <ul>
                <li>Contains a menu</li>
                <li>Contains custom content</li>
              </ul>
            </li>
          </ul>
        )}
      />

      <p>View more information on <Link to={pageUrls.popups}>Popup Menus</Link>, <Link to={pageUrls.iconButton}>Icon Buttons</Link> and <Link to={pageUrls.badges}>Badges</Link>.</p>

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

      <StaticExample
        title="Search"
        renderedExample={(
          <>
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              icon={(<span className="utds-icon-before-search" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the search icon button')}
              title="Search"
            />
            <div style={{ width: '100px' }}>&nbsp;</div>
            <LightBox image={searchModalScreenshot} alt="Search Modal Example" className="flex-3up-gap" />
          </>
        )}
        quickTips={(
          <ul>
            <li>The Search functionality will be indicated by a Magnifying Glass icon button.</li>
            <li>When the icon button is clicked, it will open a modal with a text input field.</li>
          </ul>
        )}
      />
      <p>View more information on <Link to={pageUrls.iconButton}>Icon Buttons</Link>, <Link to={pageUrls.modals}>Modals</Link> and <Link to={pageUrls.textInput}>Text Input</Link>.</p>

      <h2 id="section-main-menu" className="mb-spacing">Main Menu</h2>
      The Main Menu and Search Component is the primary navigation tool for the entire site. It is comprised of two sections, the Main Menu and Search tools. To add increased trust, the Main Menu and Search tools will have a distinct look and feel that is similar across all agency sites.

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Utah Header</strong>
          <ul>
            <li><strong>Always Use</strong>. The header is required on all sites.</li>
            <li><strong>Customizable header</strong>. The action button group can be omitted or customized to best fit the site needs.</li>
          </ul>
        </li>
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
        <li><strong>Waffle, Help and Setting buttons</strong>. If the information contained within is too verbose or can be placed within the primary navigation.</li>
        <li><strong>Search is optional.</strong> If the site is small there may be no need for the Search tool. For sites that have more content consider using the search as a way for visitors to easily find information.</li>
        <li><strong>Avoid menus that are more than 3 levels deep.</strong> Menus that are more than 3 levels deep are a challenge to navigate for those with motor skill challenges. It can even be frustrating to those without motor skill challenges.</li>
        <li><strong>Menu items that have a double role</strong>. Some WordPress menus have a mega menu where their menu items can be both a link and have a list of children menu items. This way the menu item can be triggered for navigation or can expand to its children items. Unfortunately, these combo menu items, when viewing in a smaller mobile view, no longer are triggerable so the user loses the ability to navigate to that menu item because triggering that menu item will expand the children menu items.
          <br />Because of this limitation of mobile, it was decided to only ever allow one menu type for a menu item. It is suggested, in the case where you do want a combo menu item, that the link be placed, instead of on the menu item, in the sub menu items as the first &quot;summary/overview&quot; link.
        </li>
      </ul>

      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Consistency</strong>. Never change the look and feel of the header nor main menu and search bar as they are central to the citizens experience on all public state websites and applications.</li>
        <li><strong>Developer Tools</strong>. There will be tools available allowing the developer to toggle on and off the options in the header. This will allow the developer to view the header in real time prior to implementing.</li>
        <li><strong>Always use the Main Menu in conjunction with the Utah Header</strong>. The Utah Header and the Main Menu and Search bar will be used together across all state websites and applications.</li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul>
        <li>Maintain a minimum <code>4.5:1 </code>contrast ratio for all interactions (e.g. hover, focus).</li>
      </ul>
      <h4 id="section-keyboard-interactivity">Keyboard Interactivity</h4>
      <ul>
        <li>Users must be able to to navigate using the <code>tab</code> key.</li>
        <li>Users must be able to select the navigation item using the <code>Enter/Return</code> keys.</li>
      </ul>
      <h4 id="section-screen-readers">Screen Readers</h4>
      <ul>
        <li>The main menu is a landmark role used for accessibility. It is recommended that you wrap the main menu in a <code>&lt;nav&gt;</code> tag, or as a fallback use <code>role=&quot;navigation&quot;</code>.</li>
        <li>To ensure a good user experience when navigating the site, follow the accessibility guidance for <Link to={pageUrls.popups}>Popup menus and Flyout Menus</Link>.</li>
        <li>For the search form refer to accessability guidance for <Link to={pageUrls.modals}>Modals</Link> and <Link to={pageUrls.textInput}>Text Input</Link>.</li>
        <li>For the search icon, see the <Link to={pageUrls.iconButton}>Icon Button</Link> and for accessibility guidance.</li>
      </ul>

      {/* ---- CODE EXAMPLES --- */}
      <h2 id="section-utahheader-code-examples" className="mb-spacing">Code Examples</h2>
      {/* ----     Header Events     --- */}
      <h3 id="section-utahheader-events" className="mb-spacing">Utah Header Events</h3>
      <h4 id="section-loaded">{events.HEADER_LOADED}</h4>
      <div>
        The Utah Header javascript library must load before your javascript code can interact with it. After the Utah Header javascript library loads, it
        will wait for your code to call <code>setUtahHeaderSettings()</code> before showing the Utah Header. Your code should listen for
        the <code>{events.HEADER_LOADED}</code> global document event. The Utah Header will intermittently emit this event until your code calls <code>setUtahHeaderSettings()</code>.
        <PreCode
          className="gray-block mt-spacing"
          codeRaw={`
            addEventListener(
              '${events.HEADER_LOADED}', 
              () => setUtahHeaderSettings({title: 'My utah.gov Site'})
            )
          `}
        />
      </div>

      <h4 id="section-unloaded">{events.HEADER_UNLOADED}</h4>
      <div>
        To change the content of the header, your code need only call <code>setUtahHeaderSettings()</code> with new settings. It is not advisable to unload the header. But
        there may be use cases that require the header be unmounted and reloaded. When the Utah Header is unloaded it will emit a <code>{events.HEADER_UNLOADED}</code> global
        document event.
        <PreCode
          className="gray-block mt-spacing"
          codeRaw={`
            addEventListener(
              '${events.HEADER_UNLOADED}', 
              () => alert('Where did the header go?')
            )
          `}
        />
      </div>

      {/* ----     Utah ID     --- */}
      <h3 id="section-utahheader-utahid" className="mb-spacing">Utah ID</h3>
      <h4 id="section-auth-props">Config Props</h4>
      <TableWrapper>
        <Table>
          <TableHead>
            <TableHeadRow>
              <TableHeadCell>Name / Type / Default</TableHeadCell>
              <TableHeadCell>Description</TableHeadCell>
            </TableHeadRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <span className="prop__name"><a href="#section-auth-config">utahId</a><br /></span>
                <span className="prop__types">UtahIdSettings | boolean</span> <span className="prop__optional">(optional)</span><br />
                <span className="prop__default"><code>true</code></span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  Controls the function of the Utah ID button in the Utah Header:
                  <ul>
                    <li>true - auto fetch mode</li>
                    <li>false - turned off, no button</li>
                    <li>UtahIdSettings - custom control of the UtahID button</li>
                  </ul>
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan="100">
                <span className="prop__section-title">utahId.currentUser</span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-currentuser">utahId.currentUser</a><br /></span>
                <span className="prop__types">UserInfo | null | undefined</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  <ul>
                    <li>UserInfo - details about the current user</li>
                    <li>null - app controls the user, but there is no user</li>
                    <li>undefined - app does not control the user</li>
                  </ul>
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-currentuser">utahId.currentUser.authenticated</a><br /></span>
                <span className="prop__types">boolean</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  <ul>
                    <li>true - the user is authenticated</li>
                    <li>false - ignore any provided user information</li>
                  </ul>
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-currentuser">utahId.currentUser.disabled</a><br /></span>
                <span className="prop__types">boolean</span> <span className="prop__optional">(optional)</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  <ul>
                    <li>true - authority says the user is disabled</li>
                    <li>false (default) - user is not disabled</li>
                  </ul>
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-currentuser">utahId.currentUser.env</a><br /></span>
                <span className="prop__types">string</span> <span className="prop__optional">(optional)</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  The Utah Id &quot;Environment&quot; generally tells if the Utah Id authority is dev/prod/test/etc.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-currentuser">utahId.currentUser.first</a><br /></span>
                <span className="prop__types">string | null</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  The first name of the logged in user.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-currentuser">utahId.currentUser.last</a><br /></span>
                <span className="prop__types">string | null</span> <span className="prop__optional">(optional)</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  Last name of the logged in user.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-currentuser">utahId.currentUser.mail</a><br /></span>
                <span className="prop__types">string[] | null</span> <span className="prop__optional">(optional)</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  Emails of the logged in user.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-currentuser">utahId.currentUser.middle</a><br /></span>
                <span className="prop__types">string | null</span> <span className="prop__optional">(optional)</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  Middle name of the logged in user.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-currentuser">utahId.currentUser.status</a><br /></span>
                <span className="prop__types">string | null</span> <span className="prop__optional">(optional)</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  Status of the logged in user.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-currentuser">utahId.currentUser.type</a><br /></span>
                <span className="prop__types">string | null</span> <span className="prop__optional">(optional)</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  Type of the logged in user.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-currentuser">utahId.currentUser.username</a><br /></span>
                <span className="prop__types">string | null</span> <span className="prop__optional">(optional)</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  Username of the logged in user.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan="100">
                <span className="prop__section-title">utahId events</span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-event-onauthchanged">utahId.onAuthChanged</a><br /></span>
                <span className="prop__types">function</span> <span className="prop__optional">(optional)</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  Callback triggered when the logged in user changes status.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-event-onProfile">utahId.onProfile</a><br /></span>
                <span className="prop__types">function</span> <span className="prop__optional">(optional)</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  Callback triggered when the UtahID Profile menu item is triggered in the Utah ID menu for a logged in user. The default behavior of this menu item is to navigate the user to their UtahID Profile page.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-event-onSignIn">utahId.onSignIn</a><br /></span>
                <span className="prop__types">function</span> <span className="prop__optional">(optional)</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  Callback triggered when UtahID Sign In button is triggered.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-event-onSignOut">utahId.onSignOut</a><br /></span>
                <span className="prop__types">function</span> <span className="prop__optional">(optional)</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  Callback triggered when the UtahID button&apos;s Sign Out menu item is triggered.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan="100">
                <span className="prop__section-title">utahId custom menu items</span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-menu-items">utahId.menuItems</a><br /></span>
                <span className="prop__types">MenuItem[]</span> <span className="prop__optional">(optional)</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  Your application can add its own menu items to the UtahId menu. Make sure that these menu items are relevant
                  to a user&apos;s account. Use the <a href="#???">Main Menu</a> configuration for non-account related links.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-menu-items">utahId.menuItems[].actionUrl</a><br /></span>
                <span className="prop__types">MenuItemUrlAction</span> <span className="prop__optional">(optional)</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  A URL to which the menu item will navigate.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-menu-items">utahId.menuItems[].actionFunction</a><br /></span>
                <span className="prop__types">function</span> <span className="prop__optional">(optional)</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  A callback function that will be called when the menu item is triggered.
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="prop__description"><a href="#section-auth-menu-items">utahId.menuItems[].actionFunctionUrl</a><br /></span>
                <span className="prop__types">MenuItemFunctionUrlAction</span> <span className="prop__optional">(optional)</span>
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
                <span className="prop__description"><a href="#section-auth-menu-items">utahId.menuItems[].actionMenu</a><br /></span>
                <span className="prop__types">MenuItem[]</span> <span className="prop__optional">(optional)</span>
              </TableCell>
              <TableCell>
                <span className="prop__description">
                  This menu item may have nested children menu items.
                </span>
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableWrapper>

      <h4 id="section-auth-config">utahId</h4>
      <div>
        By default, the State of Utah Header checks Utah ID for the current logged in user. Instead, your application can take control of this
        process and provide the current user information to the Utah Header, in which case the State of Utah Header will not look up current
        user information and will rely solely on your application for current user information.
        <br />
        <br />
        Default functionality:
        <PreCode
          className="gray-block mt-spacing"
          codeRaw={`
              setUtahHeaderSettings(
                {
                  ...other settings...,
                  utahId: true
                }
              )
            `}
        />
        <br />
        Turn off Utah Header Utah ID integration:
        <PreCode
          className="gray-block mt-spacing"
          codeRaw={`
              setUtahHeaderSettings(
                {
                  ...other settings...,
                  utahId: false
                }
              )
            `}
        />
        <br />
        See <a href="#section-auth-currentuser">utahId.currentUser</a> for custom configuration.
        <br />
        <br />
      </div>

      <h4 id="section-auth-currentuser">utahId.currentUser</h4>
      <div>
        UtahId returns information about the current User. The following end points are useful for getting started connecting to UtahId:
        <ul>
          <li><strong>Discovery</strong>: <ExternalLink href="https://login.dts.utah.gov:443/sso/oauth2/.well-known/openid-configuration">https://login.dts.utah.gov:443/sso/oauth2/.well-known/openid-configuration</ExternalLink></li>
          <li><strong>UserInfo</strong>: <ExternalLink href="https://login.dts.utah.gov:443/sso/oauth2/userinfo">https://login.dts.utah.gov:443/sso/oauth2/userinfo</ExternalLink></li>
        </ul>
        This example shows how an application can provide an authenticated user to the Utah Header:
        <PreCode
          className="gray-block mt-spacing"
          codeRaw={`
              setUtahHeaderSettings(
                {
                  ...other settings...,
                  utahId: {
                    currentUser: {
                      authenticated: true,
                      first: 'Philo'
                    }
                  }
                }
              )
            `}
        />
        This example shows an unauthenticated user. This is a case where your application may have a cached user who is not yet verified. The
        State of Utah Header will not trust this user information and will show the UtahID Sign In button.
        <PreCode
          className="gray-block mt-spacing"
          codeRaw={`
              setUtahHeaderSettings(
                {
                  ...other settings...,
                  utahId: {
                    currentUser: {
                      authenticated: false,
                      first: 'Philo'
                    }
                  }
                }
              )
            `}
        />
        By setting the currentUser to null, this example shows how the application tells the State of Utah Header that the application is
        controlling the user authentication process and that there is not a currently logged in user. In contrast, setting currentUser to undefined
        will indicate to the State of Utah Header to perform its default behavior to fetch the current user information from Utah ID.
        <PreCode
          className="gray-block mt-spacing"
          codeRaw={`
              setUtahHeaderSettings(
                {
                  ...other settings...,
                  utahId: {
                    currentUser: null
                  }
                }
              )
            `}
        />
      </div>
      Here is an example of supplying all the currentUser fields:
      <PreCode
        className="gray-block mt-spacing"
        codeRaw={`
          setUtahHeaderSettings(
            {
              ...other settings...,
              utahId: {
                currentUser: {
                  authenticated: true,
                  disabled: false,
                  env: 'a1',
                  first: 'John',
                  id: '8675309',
                  last: 'Doe',
                  mail: 'jdoe@someone.com',
                  status: 'alive',
                  type: 'Employee',
                  username: 'johndoe',
                }
              }
            }
          )
        `}
      />

      <h4 id="section-auth-event-onauthchanged">utahId.onAuthChanged</h4>
      <div>
        You can provide a callback to watch the current user&apos;s basic information as it changes. Seeing as this information is
        provided through javascript running in the browser, it is not trustworthy. You will want to get tokens and/or codes from Utah Login to
        pass in your requests to the server.
        <PreCode
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                utahId: {
                  currentUser: null,
                  onAuthChanged: (
                    (newUserData) => {
                      // incomplete: other 'status' fields should be consulted
                      if (newUserData?.userInfo?.first) {
                        alert(\`Hello \${newUserData.userInfo.first}!\`);
                      } else {
                        alert('User is signed out');
                      }
                    }
                  ),
                }
              }
            )
        `}
        />
      </div>

      <h4 id="section-auth-event-onProfile">utahId.onProfile</h4>
      <div>
        This callback is called when the Utah ID button&apos;s UtahId Profile menu item is triggered for a logged in user.
        Overriding the functionality of this menu item should be rare. Provide a separate <a href="#???">custom menu item</a> to access
        your application&apos;s settings/account page.
        <PreCode
          allowScrollOverflow
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                utahId: {
                  currentUser: null,
                  onProfile: (e) => window.location.href = 'https://id.utah.gov',
                }
              }
            )
        `}
        />

        <h4 id="section-auth-event-onSignIn">utahId.onSignIn</h4>
        <div>
          When there is no current logged in user, the Utah ID button shows a label of Utah ID Sign In. When triggered,
          this onSignIn callback is called. The default behavior is to go to UtahID to login and come back to the site.
          Note the use of <code>goto</code> in the login url. To get a JWT token or code, instead use Utah
          ID&apos;s <code>authorize</code> endpoint with a <code>redirect_uri</code> url parameter (OpenID configuration and
          connectivity is possible using the onSignIn and onSignOut callbacks but beyond the scope of this documentation).
          <PreCode
            allowScrollOverflow
            className="gray-block mt-spacing"
            codeRaw={`
              setUtahHeaderSettings(
                {
                  ...other settings...,
                  utahId: {
                    currentUser: null,
                    onSignIn: (e) => window.location.href = \`https://id.utah.gov/login?goto=\${window.location}\`,
                  }
                }
              )
            `}
          />
        </div>

        <h4 id="section-auth-event-onSignOut">utahId.onSignOut</h4>
        <div>
          When there is a current logged in user, the Utah ID button triggers a menu. The onSignOut callback is called
          when the Sign Out menu item is triggered. The default functionality is to go to Utah ID&apos;s logout url and
          return back to this site.
          <PreCode
            allowScrollOverflow
            className="gray-block mt-spacing"
            codeRaw={`
              setUtahHeaderSettings(
                {
                  ...other settings...,
                  utahId: {
                    currentUser: null,
                    onSignIn: (e) => window.location.href = \`https://id.utah.gov/logout?goto=\${window.location}\`,
                  }
                }
              )
            `}
          />
        </div>

        <h4 id="section-auth-menu-items">utahId.menuItems</h4>
        <div>
          You may provide custom menu items to include in the Utah ID menu for a signed in user. Make sure that these menu items are relevant
          to a user&apos;s account. Use the <a href="#???">Main Menu</a> configuration for non-account related links.
          <PreCode
            allowScrollOverflow
            className="gray-block mt-spacing"
            codeRaw={`
              setUtahHeaderSettings(
                {
                  ...other settings...,
                  utahId: {
                    menuItems: [
                      // Example of "actionUrl"
                      {
                        actionUrl: {
                          url: 'https://utah.gov',
                          openInNewTab: true
                        },
                        title: 'utah.gov'
                      },
                      
                      // Example of "actionFunction"
                      {
                        actionFunction: () => window.location = 'https://mycustomsite.gov',
                        title: 'Custom menu item',
                      },
                      
                      // Example of "actionFunctionUrl"
                      {
                        actionFunctionUrl: {
                          actionFunction: () => window.location = 'https://mycustomsite.gov',
                          // skipping handle event will prevent the event from
                          // calling e.preventDefault() and e.stopPropagation()
                          skipHandleEvent: false,
                          // setting openInNewTab to true will put a target="_blank" in the 
                          // <a> tag but your actionFunction will still determine what will
                          // really happen.
                          openInNewTab: false,
                          url: 'https://visible-url.edu',
                        },
                        title: 'My Custom Site',
                      },
                    ]
                  }
                }
              )
            `}
          />
        </div>
      </div>
    </div>
    // TODO: fix <a href="#???">custom menu item</a>
    // TODO: fix <a href="#???">Main Menu</a>
  );
}

UtahHeaderDocumentation.propTypes = propTypes;
UtahHeaderDocumentation.defaultProps = defaultProps;

export default UtahHeaderDocumentation;
