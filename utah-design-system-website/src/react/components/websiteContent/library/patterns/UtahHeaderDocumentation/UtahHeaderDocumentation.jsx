/* eslint-disable max-len */
import {
  Button,
  events,
  ExternalLink,
  ICON_BUTTON_APPEARANCE,
  IconButton,
  Switch,
  TableCell,
  TableRow,
} from '@utahdts/utah-design-system';
import {
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { Link } from 'react-router-dom';
import agencyBrand from '../../../../../../static/images/logoPlaceholder.png';
// eslint-disable-next-line import/no-unresolved
import utahUnbrandLarge from '../../../../../../../../@utahdts/utah-design-system-header/src/js/renderables/utahLogo/html/UtahLogoLarge.html?raw';
// eslint-disable-next-line import/no-unresolved
import utahUnbrandMedium from '../../../../../../../../@utahdts/utah-design-system-header/src/js/renderables/utahLogo/html/UtahLogoMedium.html?raw';
import searchModalScreenshot from '../../../../../../static/images/screenshots/patterns/header/searchModal.jpg';
import { documentationTypes } from '../../../../../enums/documentationTypes';
import { useTextAreaCaretRowColumn } from '../../../../../hooks/useTextAreaCaretRowColumn';
import { CopyButton } from '../../../../copy/CopyButton';
import { LightBox } from '../../../../lightbox/LightBox';
import { PreCodeForCodeString } from '../../../../preCode/PreCodeForCodeString';
import { pageUrls } from '../../../../routing/pageUrls';
import { StaticExample } from '../../../../staticExamples/StaticExample';
import { MainMenuSettingsAndCode } from '../../components/navigation/MainMenu/MainMenuSettingsAndCode';
import { SettingsDocumentation } from '../../documentation/SettingsDocumentation';
import { formatHeaderSettingsForCopy } from './formatHeaderSettingsForCopy';
import { useInteractiveHeaderState } from './useInteractiveHeaderState';
import { UtahHeaderInteractivePresetSelector } from './UtahHeaderInteractivePresetSelector';
import { utahHeaderPresets } from './utahHeaderPresets';

export function UtahHeaderDocumentation() {
  const interactiveTextAreaRef = useRef(/** @type {HTMLTextAreaElement | null} */(null));
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
      if (interactiveTextAreaRef.current) {
        interactiveTextAreaRef.current.value = headerString;
      }
    },
    [headerString]
  );

  // hook up dirty state checking for the apply button
  const [isDirty, setIsDirty] = useState(false);
  const isDirtyIntervalRef = useRef(NaN);
  useEffect(
    () => {
      if (interactiveTextAreaRef.current) {
        isDirtyIntervalRef.current = window.setInterval(() => {
          setIsDirty(!!parseError || !headerIsOn || headerString !== interactiveTextAreaRef.current?.value);
        }, 500);
      }

      return () => clearInterval(isDirtyIntervalRef.current);
    },
    [headerIsOn, headerString, parseError]
  );

  return (
    <div className="documentation-content">
      <h1 id="h1-top">Utah Header</h1>
      <p className="lead-in">
        The header is the focal point of the Utah design system. Its distinguishing characteristics set it apart from all other components. It also provides a consistent look, feel, and user experience for the state agencies and divisions that adopt it.
      </p>
      <p className="lead-in">
        The components contained within the header include the <strong>Utah, an official website</strong>, <strong>Agency Icon and Title</strong>,{' '}
        <strong>Action Items</strong>, <strong>Main Menu</strong>, and <strong>Search</strong>.
      </p>
      <hr />
      <div className="header-config__title">
        <h2 id="section-example">Configuration</h2>
        <Switch
          id="header-config-on-off"
          label="Turn On/Off Custom Header"
          labelClassName="visually-hidden"
          labelOn="Header Config On"
          labelOff="Header Config Off"
          onChange={useCallback(() => setHeaderIsOn((wasHeaderOn) => !wasHeaderOn), [setHeaderIsOn])}
          size="large"
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
                onCopy={formatHeaderSettingsForCopy}
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
                        // @ts-expect-error
                        Object.entries(selectedOption.settingsSnippet)
                          .forEach(([settingKey, settingValue]) => {
                            // @ts-expect-error
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
                onClick={useCallback(() => setHeaderString(interactiveTextAreaRef.current?.value ?? ''), [setHeaderString])}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>

      <p>Go to the <a href="#section-utahheader-code-examples">Code Examples</a>.</p>

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
            <li>The <code>Utah, an official website</code> helps the user to know that they are visiting an official state website.</li>
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
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="utds-title-wrapper" href="#">
                <div className="utds-title-wrapper__logo"><img alt="agency brand example" src={agencyBrand} /></div>
                <div className="utds-title-wrapper__title">Agency/Division Title </div>
              </a>
            </h1>
          </div>
        )}
        quickTips={(
          <ul>
            <li>The Agency Icon and Title section is required on all headers. It can be just a logo, or a title or a combination of both.</li>
            <li>The title is always required even if it is not visible, so screen readers can identify the site.</li>
            <li>If you are using an image, such as a <code>png</code>, <code>jpg</code> or <code>svg</code> that contains both the agency logo and title, the text of the agency title should be at least <code>14px</code> as well. The text should also maintain a <code>4.5:1</code> contrast ratio against the background.</li>
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
              title="Waffle icon button"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              icon={(<span className="utds-icon-before-alert" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the alert icon button')}
              title="Alert icon button"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              icon={(<span className="utds-icon-before-help" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the help icon button')}
              title="Help icon button"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              icon={(<span className="utds-icon-before-gear" aria-hidden="true" />)}
              // eslint-disable-next-line no-alert
              onClick={() => alert('Triggered the gear icon button')}
              title="Gear icon button"
            />
          </>

        )}
        quickTips={(
          <ul>
            <li>Action items are not required, but can be utilized based on need.</li>
            <li>Action items are icon buttons that can be used in combination with badges.</li>
            <li>
              <span className="utds-icon-before-waffle" aria-hidden="true" /> The Waffle icon is represented by an icon that is a square made up of 9 dots. It is a popup menu that can contain additional navigation.
              One of the recommended uses of the waffle menu is to include links to similarly related services, frequently used applications, or an agency&#39;s divisions.
            </li>
            <li><span className="utds-icon-before-alert" aria-hidden="true" /> The Alert icon is represented by a bell icon. It will eventually be linked to the Citizen Portal.</li>
            <li><span className="utds-icon-before-help" aria-hidden="true" /> The Help icon is represented by a question mark icon. It is a popup menu that provides help items relative to the site.</li>
            <li><span className="utds-icon-before-gear" aria-hidden="true" /> The Settings icon is represented by a gear icon. It is a popup menu that allows the user to configure settings relative to the site or application that they are logged into or viewing.</li>
            <li>The UtahID Login is a button that allows the user to login to their UtahID account and Citizen Portal (in the future).</li>
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

      <h3 id="section-main-menu">Main Menu</h3>
      <p>Information and examples for the Main Menu can be found on the <Link to={pageUrls.mainMenu}>Main Menu Documentation</Link> page.</p>

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

      {/* ---- CODE EXAMPLES --- */}
      <h2 id="section-utahheader-code-examples" className="my-spacing">Code Examples</h2>
      {/* ----     Header Events     --- */}
      <h3 id="section-utahheader-events" className="mb-spacing">Utah Header Events</h3>
      <h4 id="section-loaded">{events.HEADER_LOADED}</h4>
      <div>
        The Utah Header javascript library must load before your javascript code can interact with it. After the Utah Header javascript library loads, it
        will wait for your code to call <code>setUtahHeaderSettings()</code> before showing the Utah Header. Your code should listen for
        the <code>{events.HEADER_LOADED}</code> global document event. The Utah Header will intermittently emit this event until your code calls <code>setUtahHeaderSettings()</code>.
        <PreCodeForCodeString
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
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            addEventListener(
              '${events.HEADER_UNLOADED}',
              () => alert('Where did the header go?')
            )
          `}
        />
      </div>

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Utah Header</strong>
          <ul>
            <li><strong>Always Use</strong>. The header is required on all sites.</li>
            <li><strong>Customizable header</strong>. The action button group can be omitted or customized to best fit the site needs.</li>
          </ul>
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Waffle, Help and Setting buttons</strong>. If the information contained within is too verbose or can be placed within the primary navigation.</li>
        <li><strong>Search is optional.</strong> If the site is small there may be no need for the Search tool. For sites that have more content consider using the search as a way for visitors to easily find information.</li>
      </ul>

      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Consistency</strong>. Never change the look and feel of the header nor main menu and search bar as they are central to the citizens experience on all public state websites and applications.</li>
        <li><strong>Developer Tools</strong>. There will be tools available allowing the developer to toggle on and off the options in the header. This will allow the developer to view the header in real time prior to implementing.</li>
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
        <li>To ensure a good user experience when navigating the site, follow the accessibility guidance for <Link to={pageUrls.popups}>Popup menus and Flyout Menus</Link>.</li>
        <li>For the search form refer to accessibility guidance for <Link to={pageUrls.modals}>Modals</Link> and <Link to={pageUrls.textInput}>Text Input</Link>.</li>
        <li>For the search icon, see the <Link to={pageUrls.iconButton}>Icon Button</Link> and for accessibility guidance.</li>
      </ul>

      {/* ---- CONFIG SETTINGS --- */}
      <h2 id="section-utahheader-config-settings" className="my-spacing">Configuration Settings</h2>
      <p>
        Below you will find the configuration settings for the Utah Header.
      </p>
      <p>You can also find all the <ExternalLink href="https://github.com/utahdts/utah-design-system/blob/main/%40utahdts/utah-design-system-header/src/js/misc/jsDocTypes.js">configuration settings in the JSDoc file</ExternalLink>.</p>

      {/* ----     Settings     --- */}
      <h3 id="section-utahheader-basic-settings" className="mb-spacing">Basic Settings</h3>
      <h4 id="section-auth-props">Config Props</h4>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell>
              <code><a href="#section-config-domLocationTarget">domLocationTarget</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>DomLocationTarget</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              By default, the Utah Header is placed at the top of the page. This can be overridden by
              providing a DOM target in which the header will render.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code><a href="#section-config-domLocationTarget">domLocationTarget.cssSelector</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>string</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Place the Utah Header in an element selected by a CSS class.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code><a href="#section-config-domLocationTarget">domLocationTarget.element</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>HTMLElement</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Place the Utah Header in a specific DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code><a href="#section-config-domLocationTarget">domLocationTarget.elementFunction</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>function</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This function must return a DOM element in to which the Utah Header will be placed.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-logo">logo</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>Logo</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Your site may have a logo and/or a title. Your logo should be an image such as an SVG or PNG.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-logo">logo.element</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>HTMLElement</code>
                <span> | </span>
                <code>function</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              You can supply an HTMLElement, or a function that returns an HTMLElement, to be used as the logo image.
              The element will be moved to the header, so be careful to not supply an element that is used elsewhere.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-logo">logo.htmlString</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
                <span> | </span>
                <code>function</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              You can supply a string, or a function that returns a string, that contains HTML content to be rendered
              as the logo.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-logo">logo.imageUrl</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
                <span> | </span>
                <code>function</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              You can supply a url, or a function that returns a url, that specifies the source location to
              use for the logo image.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-mediaSizes">mediaSizes</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>MediaSizes</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The header is responsive. You can custom configure the sizes (px) at which the header is responsive so as
              to better match your site&apos;s behavior. There are three responsive break points:
              <ul>
                <li><span className="prop__types">mobile</span> (smallest) (default - <code>640</code>)</li>
                <li><span className="prop__types">tabletPortrait</span> (medium) (default - <code>768</code>)</li>
                <li><span className="prop__types">tabletLandscape</span> (largest) (default - <code>1024</code>)</li>
              </ul>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-onSearch">onSearch</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>function</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The Utah Header main menu bar can have a search icon in it.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-showTitle">showTitle</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>boolean</code></div>
            </TableCell>
            <TableCell><code>true</code></TableCell>
            <TableCell>
              A title is always required for accessibility reasons, but it is not required to be shown if you supply a logo.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-size">size</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>SMALL</code>
                <span> | </span>
                <code>MEDIUM</code>
                <span> | </span>
                <code>LARGE</code>
              </div>
            </TableCell>
            <TableCell><code>MEDIUM</code></TableCell>
            <TableCell>
              The header can be sized to better match your application. The default and most preferred size is <code>MEDIUM</code>.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-size">skipLinkUrl</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>string</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Specifies where the Skip Link should go. It is generally best practice to include a skip link on every
              page. <Link to={pageUrls.skipLink}>Learn more about the Skip Link here</Link>.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-title">title</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>string</code></div>
            </TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The Utah Header requires a title for accessibility reasons. You can use the showTitle setting
              to make it visible or not. You may hide the title only if you supply a <code>logo</code>.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-titleUrl">titleFunction</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>function</code></div>
            </TableCell>
            <TableCell><code>/</code></TableCell>
            <TableCell>
              Use to provide an onclick function for the page&apos;s title element.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-titleUrl">titleUrl</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>string</code></div>
            </TableCell>
            <TableCell><code>/</code></TableCell>
            <TableCell>
              When the logo and/or title are clicked, the browser will navigate to this URL.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h4 id="section-config-domLocationTarget" className="mt-spacing">domLocationTarget</h4>
      <div>
        By default, the header appears at the top of your application. You can use one of the following configurations
        to place the header in another location. Be aware that the Utah Header should always be at the top of the
        application. This is just a convenience function in case placing the header automatically at the top causes
        your layout to misbehave.
        <br /><br />
        Example of cssSelector:
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                domLocationTarget: {
                  cssSelector: '#header-target-div',
                }
              }
            )
          `}
        />
        <br />
        Example of element:
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                domLocationTarget: {
                  element: document.getElementById('header-container'),
                }
              }
            )
          `}
        />
        <br />
        Example of elementFunction:
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                domLocationTarget: {
                  elementFunction: () => document.getElementById('header-container'),
                }
              }
            )
          `}
        />
      </div>

      <h4 id="section-config-logo">logo</h4>
      <div>
        Example of element logo:
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                logo: {
                  element: document.getElementById('my-logo')
                }
              }
            )
          `}
        />
        <br />
        Example of element logo as a function:
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                logo: {
                  element: () => {
                    const logo = document.createElement('img');
                    logo.src = 'https://my-site.utah.gov/img/logo.png';
                    return logo;
                  }
                }
              }
            )
          `}
        />
        <br />
        Example of string logo:
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                logo: {
                  htmlString: '<svg>...svg content...</svg>'
                }
              }
            )
          `}
        />
        <br />
        Example of string logo as a function:
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                logo: {
                  htmlString: () => '<svg>...svg content...</svg>'
                }
              }
            )
          `}
        />
        <br />
        Example of providing the logo source:
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                logo: {
                  imageUrl: 'https://mysite.utah.gov/img/logo.png'
                }
              }
            )
          `}
        />
        <br />
        Example of providing the logo source as a function:
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                logo: {
                  imageUrl: () => 'https://mysite.utah.gov/img/logo.png'
                }
              }
            )
          `}
        />
      </div>

      <h4 id="section-config-mediaSizes">mediaSizes</h4>
      <div>
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                mediaSizes: {
                  mobile: 500,
                  tabletPortrait: 750,
                  tabletLandscape: 1000,
                },
              }
            )
          `}
        />
      </div>

      <h4 id="section-config-onSearch">onSearch</h4>
      <div>
        The Utah Header main menu bar can have a search icon in it. When the search icon is pressed a modal search
        dialog appears. When the user enters and submits a search phrase, that phrase will be passed
        to this custom function to allow your site to respond to the search.
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                onSearch: (searchPhrase) => alert('That was an excellent search!'),
              }
            )
          `}
        />
      </div>

      <h4 id="section-config-showTitle">showTitle</h4>
      <div>
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                showTitle: false,
                title: 'This title is only for assistive technology',
              }
            )
          `}
        />
      </div>

      <h4 id="section-config-size">size</h4>
      <div>
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                size: 'SMALL',
              }
            )
          `}
        />
      </div>

      <h4 id="section-config-title">title</h4>
      <div>
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                title: 'My fantastic state of Utah site',
              }
            )
          `}
        />
      </div>

      <h4 id="section-config-titleUrl">titleUrl</h4>
      <div>
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            To set the url for the title.
            setUtahHeaderSettings(
              {
                ...other settings...,
                titleUrl: '/',
              }
            )

            Or for a custom onclick action:
            setUtahHeaderSettings(
              {
                ...other settings...,
                titleFunction: () => { ... do something ... },
                titleUrl: '/', 
              }
            )
            `}
        />
      </div>

      <h3 id="section-utahheader-actionItems" className="mb-spacing">Action Items</h3>
      <h4 id="section-auth-props">Config Props</h4>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell>
              <code><a href="#section-config-actionItems">actionItems</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>ActionItem[]</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The header has an area just to the left of the UtahID button for icons buttons. These can icons can
              be used for a myriad of purposes customized for your application. For Icon Button guidance, see <Link to={pageUrls.iconButton}>Icon Buttons</Link>.
              When the action item is triggered it can have one of the following behaviors:
              <ul>
                <li><span className="prop__types">callback</span>: <code>(e) =&gt; alert(&apos;I have been summoned&apos;)</code></li>
                <li><span className="prop__types">popup menu</span>: a popup menu will show with your custom menu items</li>
                <li><span className="prop__types">custom html</span>: a popup will appear with your custom content</li>
              </ul>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-actionItems">actionItems[].actionFunction</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>function</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The actionFunction specifies a callback function to call when an action item is triggered.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-actionItems">actionItems[].actionPopupMenu</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>PopupMenu</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              A popup menu may be opened when the action item is triggered.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-actionItems">actionItems[].actionDom</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>function</code>
                <span> | </span>
                <code>string</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Custom content can be provided through a callback function. You are provided the trigger event (click), and must return
              the custom content to render (DOM Element) or a string representation of the html content.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-actionItems">actionItems[].className</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>string</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              A custom css class can be added to the action item for your app to target with styling and/or functionality.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-actionItems">actionItems[].badge</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>Badge</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              A badge is a little colored circle to the top right of the action item indicating an alert or notification.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-actionItems">actionItems[].badge.className</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>string</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              A class to put on the badge of the action item.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-actionItems">actionItems[].badge.label</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>string</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The label for the screen reader to read describing the badge.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-actionItems">actionItems[].badge.value</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>number</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              A numeric value to show in the badge. String values tend to be too bulky or vague. See <Link to={pageUrls.badges}>Badges</Link> for more information.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-actionItems">actionItems[].icon</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>HTMLElement</code>
                <span> | </span>
                <code>string</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An icon HTML element or a string represent an icon image to render as the action item.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-actionItems">actionItems[].mobileMenuLocation</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>left</code>
                <span> | </span>
                <code>none</code>
                <span> | </span>
                <code>right</code>
              </div>
            </TableCell>
            <TableCell><code>none</code></TableCell>
            <TableCell>
              The Utah Header is responsive. When viewing the Utah Header in narrow viewports, the action items
              are removed from the view. A hamburger menu icon is added to the main menu bar that will toggle open
              a dialog that shows the action items and main menu. To have your action items remain prominent on mobile
              sizes, you can specify a position relative to the UtahID button at which to show the action item. Showing
              action items this way on mobile should be used sparingly as it unbalances the Utah ID button and changes
              where users expect to find action items.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-actionItems">actionItems[].showTitle</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>boolean</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              To provide clarity, the action item&apos;s title may be displayed next to the action item. Unclear action
              items may be a clue to use a different icon, so usage of this feature should be thoughtfully considered.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-config-actionItems">actionItems[].title</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>string</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The title of the action item is required, even when not shown, for accessibility.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h4 id="section-config-actionItems" className="mt-spacing">actionItems</h4>
      <div>
        <code>actionItems</code> give your users notifications and global app utility. Use the main menu for navigation items and
        action items for notifications, alerts, and global considerations.
        <PreCodeForCodeString
          allowScrollOverflow
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                actionItems: [
                  {
                    actionPopupMenu: {
                      menuItems: [
                        {
                          actionUrl: {
                            url: 'https://google.com'
                          },
                          title: 'Item #1'
                        },
                        {
                          actionUrl: {
                            url: 'https://utah.gov',
                            openInNewTab: true
                          },
                          title: 'Utah.Gov'
                        },
                        {
                          title: 'Custom menu item',
                          actionFunction: () => alert('I feel so (de)pressed')
                        }
                      ],
                      title: 'Divisions Menu'
                    },
                    className: 'icon-waffle',
                    showTitle: true,
                    title: 'Divisions',
                    icon: '<span class="utds-icon-before-waffle" aria-hidden="true" />'
                  },
                  {
                    badge: {
                      label: 'Unread Alerts',
                      value: 2
                    },
                    showTitle: false,
                    title: 'Alerts',
                    actionFunction: () => alert('I feel so (de)pressed'),
                    icon: '<span class="utds-icon-before-alert" aria-hidden="true" />'
                  },
                  {
                    badge: {
                      label: 'Help Items Available'
                    },
                    showTitle: false,
                    title: 'Help',
                    actionDom: '<div>Hello World! <button>Do not press me.</button></div>',
                    icon: '<span class="utds-icon-before-help" aria-hidden="true" />'
                  },
                  {
                    actionPopupMenu: {
                      menuItems: [
                        {
                          actionUrl: {
                            url: 'https://utah.gov'
                          },
                          title: 'Settings'
                        },
                        {
                          actionUrl: {
                            url: 'https://utah.gov',
                            openInNewTab: true
                          },
                          title: 'Utah.Gov'
                        },
                        {
                          title: 'Clickable menu item',
                          actionFunction: () => alert('I feel so (de)pressed')
                        }
                      ],
                      title: 'Settings Menu'
                    },
                    showTitle: false,
                    title: 'Settings',
                    icon: '<span class="utds-icon-before-gear" aria-hidden="true" />'
                  }
                ]
              }
            )
        `}
        />
      </div>

      <MainMenuSettingsAndCode />

      <h3 id="section-utahheader-footer" className="mb-spacing">Footer</h3>
      <h4 id="section-auth-props">Config Props</h4>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell>
              <code><Link to={pageUrls.utahFooter}>footer</Link></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>FooterSettings</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The Utah footer is the required bar at the bottom of the page with information and links
              for the state of Utah. See <Link to={pageUrls.utahFooter}>footer</Link> for configuration settings
              for the footer.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>
      <br />

      {/* ----     Utah ID     --- */}
      <h3 id="section-utahheader-utahid" className="mb-spacing">Utah ID</h3>
      <h4 id="section-auth-props">Config Props</h4>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell>
              <code><a href="#section-auth-config">utahId</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>UtahIdSettings</code>
                <span> | </span>
                <code>boolean</code>
              </div>
            </TableCell>
            <TableCell><code>true</code></TableCell>
            <TableCell>
              Controls the function of the Utah ID button in the Utah Header:
              <ul>
                <li>true - auto fetch mode</li>
                <li>false - turned off, no button</li>
                <li>UtahIdSettings - custom control of the UtahID button</li>
              </ul>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-currentuser">utahId.currentUser</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>UserInfo</code>
                <span> | </span>
                <code>null</code>
                <span> | </span>
                <code>undefined</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              <ul>
                <li>UserInfo - details about the current user</li>
                <li>null - app controls the user, but there is no user</li>
                <li>undefined - app does not control the user</li>
              </ul>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-currentuser">utahId.currentUser.authenticated</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>boolean</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              <ul>
                <li>true - the user is authenticated</li>
                <li>false - ignore any provided user information</li>
              </ul>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-currentuser">utahId.currentUser.disabled</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>boolean</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              <ul>
                <li>true - authority says the user is disabled</li>
                <li>false (default) - user is not disabled</li>
              </ul>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-currentuser">utahId.currentUser.env</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>string</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The Utah Id &quot;Environment&quot; generally tells if the Utah Id authority is dev/prod/test/etc.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-currentuser">utahId.currentUser.first</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
                <span> | </span>
                <code>null</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The first name of the logged in user.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-currentuser">utahId.currentUser.last</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
                <span> | </span>
                <code>null</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Last name of the logged in user.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-currentuser">utahId.currentUser.mail</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string[]</code>
                <span> | </span>
                <code>null</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Emails of the logged in user.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-currentuser">utahId.currentUser.middle</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
                <span> | </span>
                <code>null</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Middle name of the logged in user.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-currentuser">utahId.currentUser.status</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
                <span> | </span>
                <code>null</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Status of the logged in user.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <span className="prop__description"><a href="#section-auth-currentuser">utahId.currentUser.type</a></span><br />
              <span className="prop__types">string | null</span>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
                <span> | </span>
                <code>null</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Type of the logged in user.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-currentuser">utahId.currentUser.username</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
                <span> | </span>
                <code>null</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Username of the logged in user.
            </TableCell>
          </TableRow>

          <TableRow>
            {/* @ts-expect-error */}
            <TableCell colSpan="100">
              <span className="prop__section-title">UtahId Events</span>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-event-onauthchanged">utahId.onAuthChanged</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>function</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Callback triggered when the logged in user changes status.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-event-onProfile">utahId.onProfile</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>function</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Callback triggered when the UtahID Profile menu item is triggered in the Utah ID menu for a logged in user. The default behavior of this menu item is to navigate the user to their UtahID Profile page.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-event-onSignIn">utahId.onSignIn</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>function</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Callback triggered when UtahID Sign In button is triggered.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-event-onSignOut">utahId.onSignOut</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>function</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Callback triggered when the UtahID button&apos;s Sign Out menu item is triggered.
            </TableCell>
          </TableRow>

          <TableRow>
            {/* @ts-expect-error */}
            <TableCell colSpan="100">
              <span className="prop__section-title">UtahId Custom Menu Items</span>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <code><a href="#section-auth-menu-items">utahId.menuItems</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper"><code>MenuItem[]</code></div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Your application can add its own menu items to the UtahId menu. Make sure that these menu items are relevant
              to a user&apos;s account. Use an alternate navigation for non-account related links. <a href="#section-menuitem-settings">See here for MenuItem</a>.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h4 id="section-auth-config" className="mt-spacing">utahId</h4>
      <div>
        By default, the state of Utah Header checks Utah ID for the current logged in user. Instead, your application can take control of this
        process and provide the current user information to the Utah Header, in which case the state of Utah Header will not look up current
        user information and will rely solely on your application for current user information.
        <br />
        <br />
        Default functionality:
        <PreCodeForCodeString
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
        <PreCodeForCodeString
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
        See <a href="#section-auth-currentuser">utahId.currentUser</a> for custom configuration.
      </div>

      <h4 id="section-auth-currentuser" className="mt-spacing">utahId.currentUser</h4>
      <div>
        UtahId returns information about the current User. The following end points are useful for getting started connecting to UtahId:
        <ul>
          <li><strong>Discovery</strong>: <ExternalLink href="https://login.dts.utah.gov:443/sso/oauth2/.well-known/openid-configuration">https://login.dts.utah.gov:443/sso/oauth2/.well-known/openid-configuration</ExternalLink></li>
          <li><strong>UserInfo</strong>: <ExternalLink href="https://login.dts.utah.gov:443/sso/oauth2/userinfo">https://login.dts.utah.gov:443/sso/oauth2/userinfo</ExternalLink></li>
        </ul>
        This example shows how an application can provide an authenticated user to the Utah Header:
        <PreCodeForCodeString
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
        state of Utah Header will not trust this user information and will show the UtahID Sign In button.
        <PreCodeForCodeString
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
        By setting the currentUser to null, this example shows how the application tells the state of Utah Header that the application is
        controlling the user authentication process and that there is not a currently logged in user. In contrast, setting currentUser to undefined
        will indicate to the state of Utah Header to perform its default behavior to fetch the current user information from Utah ID.
        <PreCodeForCodeString
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
      <PreCodeForCodeString
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

      <h4 id="section-auth-event-onauthchanged" className="mt-spacing">utahId.onAuthChanged</h4>
      <div>
        You can provide a callback to watch the current user&apos;s basic information as it changes. Seeing as this information is
        provided through javascript running in the browser, it is not trustworthy. You will want to get tokens and/or codes from Utah Login to
        pass in your requests to the server.
        <PreCodeForCodeString
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

      <h4 id="section-auth-event-onProfile" className="mt-spacing">utahId.onProfile</h4>
      <div>
        This callback is called when the Utah ID button&apos;s UtahId Profile menu item is triggered for a logged in user.
        Overriding the functionality of this menu item should be rare. Provide a separate <a href="#section-auth-menu-items">custom menu item</a> to access
        your application&apos;s settings/account page.
        <PreCodeForCodeString
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

        <h4 id="section-auth-event-onSignIn" className="mt-spacing">utahId.onSignIn</h4>
        <div>
          When there is no current logged in user, the Utah ID button shows a label of Utah ID Sign In. When triggered,
          this onSignIn callback is called. The default behavior is to go to UtahID to login and come back to the site.
          Note the use of <code>goto</code> in the login url. To get a JWT token or code, instead use Utah
          ID&apos;s <code>authorize</code> endpoint with a <code>redirect_uri</code> url parameter (OpenID configuration and
          connectivity is possible using the onSignIn and onSignOut callbacks but beyond the scope of this documentation).
          <PreCodeForCodeString
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

        <h4 id="section-auth-event-onSignOut" className="mt-spacing">utahId.onSignOut</h4>
        <div>
          When there is a current logged in user, the Utah ID button triggers a menu. The onSignOut callback is called
          when the Sign Out menu item is triggered. The default functionality is to go to Utah ID&apos;s logout url and
          return back to this site.
          <PreCodeForCodeString
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

        <h4 id="section-auth-menu-items" className="mt-spacing">utahId.menuItems</h4>
        <div>
          You may provide custom menu items to include in the Utah ID menu for a signed in user. Make sure that these menu items are relevant
          to a user&apos;s account. Use the <Link to={pageUrls.mainMenu}>Main Menu</Link> configuration for non-account related links.
          <PreCodeForCodeString
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
  );
}
