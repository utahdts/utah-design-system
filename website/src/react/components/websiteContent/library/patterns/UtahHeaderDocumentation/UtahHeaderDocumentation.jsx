/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
import {
  Button,
  events,
  formElementSizesEnum,
  IconButton,
  ICON_BUTTON_APPEARANCE,
  Switch,
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
import utahUnbrandLarge from '../../../../../../../../utah-header/src/js/renderables/utahLogo/html/UtahLogoLarge.html?raw';
// eslint-disable-next-line import/no-unresolved
import utahUnbrandMedium from '../../../../../../../../utah-header/src/js/renderables/utahLogo/html/UtahLogoMedium.html?raw';

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
            <li>The <code>Utah</code> identification is required on all headers.</li>
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
            <li>The <code>Agency Icon and Title</code> section is required on all headers. It can be just a logo, or a title or a combination of both.</li>
            <li>The <code>title</code> is always required even if it is not visible, so screen readers can identify the site.</li>
            <li>If you are using an <code>image</code>, such as a <code>png</code>, <code>jpg</code> or <code>svg</code> that contains both the agency logo and title, the text of the <code>agency title</code> should be at least <code>14px</code> as well. The <code>text</code> should also maintain a <code>4.5:1</code> contrast ration against the background.</li>
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
            <li><code>Action items</code> are not required, but can be utilized based on need.</li>
            <li><code>Action items</code> are <code>icon buttons</code> that can be used in combination with <code>badges</code>.</li>
            <li>The <code>Waffle icon</code> is represented by an icon that is a square made up of 9 dots. It is a <code>popup menu</code> that can contain additional navigation or frequently used services.</li>
            <li>The <code>Alert icon</code> is represented by a bell icon. It will eventually be linked to the <code>Citizen Portal</code>.</li>
            <li>The <code>Help icon</code> is represented by a question mark icon. It is a <code>popup menu</code> that provides help items relative to the site.</li>
            <li>The <code>Settings icon</code> is represented by a gear icon. It is a <code>popup menu</code> that allows the user to configure settings relative to the site or application that they are logged into or viewing.</li>
            <li>The <code>UtahID Login</code> is a button that allows the user to login to their <code>UtahID</code> and <code>Citizen Portal</code> (eventually) accounts.</li>
            <li><code>Action items</code> can have 2 different types of <code>popups</code>.
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
            <li><code>Horizontal menu</code> that serves as the main navigation for the site.</li>
            <li>Typically list items in the menu should have no more than 2 words.</li>
            <li>There are 3 types of menu items: <code>Links</code>, <code>Custom Function</code>, or a <code>List of Menu Items</code> (<code>vertical menu</code>). See below guidance for when to use each type and when not to use.</li>
            <li><code>Sub-menus</code> are <code>Vertical menus</code> displayed within a <code>Popup</code> (e.g. <code>Popup menu</code>, <code>Flyout</code> or a <code>Mega menu</code>). They are indicated by a <code>down arrow</code> to the right of the topic.</li>
            <li>Has a &quot;chiclet&quot;, a thin line at the top of the active menu item.</li>
            <li>Active list items will be <code>bold</code>, and the text color should match the primary color.</li>
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
            <li>The <code>Search</code> functionality will be indicated by a Magnifying Glass <code>icon button</code>.</li>
            <li>When the <code>icon button</code> is clicked, it will open a <code>modal</code> with a <code>text input field</code>.</li>
          </ul>
        )}
      />
      <p>View more information on <Link to={pageUrls.iconButton}>Icon Buttons</Link>, <Link to={pageUrls.modals}>Modals</Link> and <Link to={pageUrls.textInput}>Text Input</Link>.</p>

      <h2 id="section-main-menu" className="mb-spacing">Main Menu</h2>
      The <code>Main Menu</code> and <code>Search</code> Component is the primary navigation tool for the entire site. It is comprised of two sections, the <code>Main Menu</code> and <code>Search</code> tools. To add increased trust, the <code>Main Menu</code> and <code>Search</code> tools will have a distinct look and feel that is similar across all agency sites.

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Utah Header</strong>
          <ul>
            <li><strong>Always Use</strong>. The header is required on all sites.</li>
            <li><strong>Customizable header</strong>. The <code>action button group</code> can be omitted or customized to best fit the site needs.</li>
          </ul>
        </li>
        <li><strong>Main Menu</strong>
          <ul>
            <li><strong>Always use</strong>. The <code>Main Menu and Search</code> bar is used in conjunction with the <code>Utah Header</code> to instill a sense of trust that this is a <code>State of Utah</code> site.</li>
            <li><strong>Main menu items can be links</strong>. Use this when you need to send the user to a specific url.</li>
            <li><strong>Open up a list of menu items</strong>. <code>Main menu items</code> can display a list of sub menus in either a <code>Popup menu</code> or a <code>Mega Menu</code>.</li>
            <li><strong>Menu items can be a custom function</strong>. If you would like the menu item to trigger a function.</li>
            <li><strong>Sub menu options</strong>. Sub menu is a <code>Vertical menu</code> that can be displayed in <code>Popups</code> (e.g. <code>Popup menu</code>, <code>Flyout</code> or a <code>Mega menu</code>).</li>
          </ul>
        </li>
      </ul>
      <p>View more information on <Link to={pageUrls.popups}>Popups</Link>, <Link to={pageUrls.verticalMenu}>Vertical Menus</Link> or <Link to={pageUrls.links}>Links</Link> regarding internal versus external links.</p>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Waffle, Help and Setting buttons</strong>. If the information contained within is too verbose or can be placed within the primary navigation.</li>
        <li><strong>Search is optional.</strong> If the site is small there may be no need for the <code>Search</code> tool. For sites that have more content consider using the search as a way for visitors to easily find information.</li>
        <li><strong>Avoid menus that are more than 3 levels deep.</strong> <code>Menus</code> that are more than 3 levels deep are a challenge to navigate for those with motor skill challenges. It can even be frustrating to those without motor skill challenges.</li>
        <li><strong>Menu items that have a double role</strong>. Some <code>WordPress menus</code> have a <code>mega menu</code> where their menu items can be both a link and have a list of children menu items. This way the menu item can be triggered for navigation or can expand to its children items. Unfortunately, these <code>combo menu items</code>, when viewing in a smaller mobile view, no longer are triggerable so the user loses the ability to navigate to that menu item because triggering that menu item will expand the children menu items.
          <br />Because of this limitation of mobile, it was decided to only ever allow one menu type for a menu item. It is suggested, in the case where you do want a <code>combo menu item</code>, that the <code>link</code> be placed, instead of on the <code>menu item</code>, in the <code>sub menu</code> items as the first &quot;summary/overview&quot; link.
        </li>
      </ul>

      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Consistency</strong>. Never change the look and feel of the <code>header</code> nor <code>main menu and search</code> bar as they are central to the <code>citizens experience</code> on all public state websites and applications.</li>
        <li><strong>Developer Tools</strong>. There will be tools available allowing the developer to toggle on and off the options in the <code>header</code>. This will allow the developer to view the <code>header</code> in real time prior to implementing.</li>
        <li><strong>Always use the Main Menu in conjunction with the Utah Header</strong>. The <code>Utah Header</code> and the Main <code>Menu and Search</code> bar will be used together across all state websites and applications.</li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul>
        <li>Maintain a minimum <code>4.5:1 </code>contrast ratio for all interactions (e.g. <code>hover</code>, <code>focus</code>).</li>
      </ul>
      <h4 id="section-keyboard-interactivity">Keyboard Interactivity</h4>
      <ul>
        <li>Users must be able to to navigate using the <code>tab</code> key.</li>
        <li>Users must be able to select the navigation item using the <code>Enter/Return</code> keys.</li>
      </ul>
      <h4 id="section-screen-readers">Screen Readers</h4>
      <ul>
        <li>The <code>main menu</code> is a landmark role used for accessibility. It is recommended that you wrap the <code>main menu</code> in a <code>&lt;nav&gt;</code> tag, or as a fallback use <code>role=&quot;navigation&quot;</code>.</li>
        <li>To ensure a good user experience when navigating the site, follow the accessibility guidance for <Link to={pageUrls.popups}>Popup menus and Fly-out Menus</Link>.</li>
        <li>For the <code>search form</code> refer to accessability guidance for <Link to={pageUrls.modals}>Modals</Link> and <Link to={pageUrls.textInput}>Text Input</Link>.</li>
        <li>For the <code>search icon</code>, see the <Link to={pageUrls.iconButton}>Icon Button</Link> and for accessibility guidance.</li>
      </ul>

      <h2 id="section-utahid-events" className="mb-spacing">UtahID Events</h2>
      <h3 id="section-loaded">UtahID: Loaded</h3>
      <div>
        The <code>Utah Header</code> must load before your javascript code can interact with it. Once the <code>header</code> is loaded it fires&nbsp;
        a global document event <code>{events.utahHeaderLoaded}</code>. Your code can listen for this event to know when it is safe
        to call utah header functions like <code>setUtahHeaderSettings()</code>.
        <PreCode
          className="gray-block"
          codeRaw={`addEventListener('${events.HEADER_LOADED}', () => setUtahHeaderSettings({title: 'My utah.gov Site'}))`}
        />
      </div>

      <h3 id="section-unloaded">UtahID: Unloaded</h3>
      <div>
        When the <code>Utah Header</code> is removed, the <code>unloaded</code> event will fire. Your code can listen for this event.
        <PreCode
          className="gray-block"
          codeRaw={`addEventListener('${events.HEADER_UNLOADED}', () => alert('Where did the header go?'))`}
        />
      </div>

      <h3 id="section-auth-changed">UtahID: Auth Changed</h3>
      <div>
        The <code>Utah ID Button</code> in the top right of the header makes an ajax request to check the current user&apos;s logged in status with <code>UtahID</code>. &nbsp;
        Your javascript code can provide a callback in order to get the current user&apos;s basic information. Seeing as this information is&nbsp;
        javascript provided, it is not trustworthy. You will want to get <code>tokens</code> and/or <code>codes</code> from <code>Utah Login</code> that your server side code can verify.
        <PreCode
          className="gray-block"
          codeRaw={`// Example Utah Header Settings Object w/ onAuthChanged
  {
    ...
    "utahId": {
      ...
      //
      "onAuthChanged": (
        /**
         * @param {UtahIdData | null}
         * @returns {void}
         */
        (newUserData) => {
          if (newUserData?.userInfo?.first) {
            alert(\`Hello \${newUserData.userInfo.first}!\`);
          } else {
            alert('User is signed out');
          }
        }
      ),
      ...
    }
    ...
  }`}
        />
      </div>

      <h2 id="section-settings-props">Settings and Props</h2>
      <div className="documentation-content--small-text">
        <TabGroup defaultValue="segmented-button-props-css">
          <TabList>
            <Tab id="segmented-button-props-css">CSS</Tab>
            <Tab id="segmented-button-props-react">JS</Tab>
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

UtahHeaderDocumentation.propTypes = propTypes;
UtahHeaderDocumentation.defaultProps = defaultProps;

export default UtahHeaderDocumentation;
