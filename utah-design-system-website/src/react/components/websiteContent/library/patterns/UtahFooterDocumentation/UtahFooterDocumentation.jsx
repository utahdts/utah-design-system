/* eslint-disable max-len */
import {
  ExternalLink,
  TableCell,
  TableRow,
} from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import footerScreenshot from '../../../../../../static/images/mockups/Footer.jpg';
import agencyFooter from '../../../../../../static/images/screenshots/patterns/footer/agencyFooter.jpg';
import requiredFooter from '../../../../../../static/images/screenshots/patterns/footer/requiredFooter.jpg';
import socialBar from '../../../../../../static/images/screenshots/patterns/footer/socialBar.jpg';
import { LightBox } from '../../../../lightbox/LightBox';
import { PreCodeForCodeString } from '../../../../preCode/PreCodeForCodeString';
import { pageUrls } from '../../../../routing/pageUrls';
import { StaticExample } from '../../../../staticExamples/StaticExample';
import { documentationTypes } from '../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../documentation/SettingsDocumentation';

export function UtahFooterDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Utah Footer</h1>
      <p className="lead-in">
        The footer is a landmark at bottom of the website, below the main body of content. It provides a short summary of the
        site&apos;s main content, should a user arrive at the end of the page without finding what they are looking for. It contains
        information regarding social media resources, agency contact and help information, services that are commonly requested, and <strong>required</strong> legal information pertaining to state of Utah websites.
      </p>
      <hr />
      <h2 id="section-examples" className="mb-spacing">Examples</h2>
      <LightBox image={footerScreenshot} alt="Footer" className="flex-3up-gap mb-spacing" />
      <StaticExample
        title="Social Media & Quick Contacts"
        renderedExample={<LightBox image={socialBar} alt="Social Media Bar" />}
        quickTips={(
          <ul>
            <li>Color bar that sits above the main section of the footer.</li>
            <li>
              Contains customizable icon links to an agency&apos;s social media accounts, main email address, and telephone number. The user
              should be able to click on one of these <Link to={pageUrls.iconButton}>Icon Buttons</Link> and be directed to immediately contact someone from the agency or to the
              corresponding social media account.
            </li>
            <li>
              To create continuity between state of Utah websites, it is highly encouraged to keep the placement of social media icon buttons and
              quick contact links above the footer. This will help users gain confidence that the website is indeed a state website and quickly
              find the social media links they are looking for.
            </li>
          </ul>
        )}
      />
      <StaticExample
        title="Agency/Division Information"
        renderedExample={<LightBox image={agencyFooter} alt="Agency/Division/Program Footer" />}
        quickTips={(
          <ul>
            <li>This section has at least 2 columns.</li>
            <li>The first column is reserved for the agency or program logo, location, and contact information</li>
            <li>The remaining columns can be customized based on the site needs. Suggested columns would be links to common online services or pages located within the site.</li>
          </ul>
        )}
      />
      <StaticExample
        title="Required: Utah, an official website and Legal Information"
        renderedExample={<LightBox image={requiredFooter} alt="Required Footer" />}
        quickTips={(
          <ul>
            <li>This bar reiterates that this is an official website of the state of Utah. It contains specific required links for all state of Utah websites.</li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Description and Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Always use the Footer.</strong> At the very least, the &quot;Utah, an official website&quot; and Legal Information needs to be at the bottom of the website. It helps promote a consistent look, feel, and user experience throughout all state websites and applications</li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Avoid altering the footer.</strong> The appearance and functionality of the footer is an important focal point of the Utah Design System.</li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Over 4 columns in the Department/Division Information section.</strong> Avoid too many columns as it can quickly become cluttered and difficult for the user to quickly scan for what they need.</li>
        <li><strong>Consistent experience.</strong> The footer should remain clean and easy to read. Follow best practices regarding <Link to={pageUrls.verticalMenu}>Vertical Menus</Link> and <Link to={pageUrls.links}>Links</Link>.</li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>Maintain a minimum <code>4.5:1</code> contrast ratio for all text and interactions (hover, focus) in the footer.</li>
      </ul>
      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>Users must be able to to navigate using the tab key</li>
        <li>Users must be able to select the navigation item using the Enter/Return key</li>
      </ul>
      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>The footer is a landmark role used for accessibility. It is recommended that you wrap the footer in a <code>&lt;footer&gt;</code> tag.
          It is less preferred to use the aria <code>role=&quot;contentinfo&quot;</code> as a fallback. <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role">More info on contentinfo role.</ExternalLink>
        </li>
        <li>To ensure a good user experience when navigating the site, follow the accessibility guidance for <Link to={pageUrls.verticalMenu}>Vertical Menus</Link> and <Link to={pageUrls.links}>Links</Link>.</li>
      </ul>

      <h2 id="section-utahheader-settings" className="mb-spacing"> Settings</h2>
      <p>
        Footer settings are in the Utah Header settings object. You can set them separately or send them with the Utah Header settings.<br />
        These <a href="#section-config-footer_setting">code examples</a> show the ways to specify those settings.
      </p>
      <h3><code><a href="#section-config-footer_domLocationTarget">footer</a></code></h3>
      <span className="prop__types">FooterSettings | null | undefined</span>
      <p>
        This optional configuration has settings for where to place the footer and visual settings. A value of <code>undefined</code> will show
        the default footer. A value of <code>null</code> will remove the footer so it is not displayed. It is encouraged to always show the footer
        though
        there may be cases, like maps, that need the full page.
      </p>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell>
              <code><a href="#section-config-footer_copyright">copyrightYear</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
                <span> | </span>
                <code>null</code>
                <span> | </span>
                <code>undefined</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The Utah Footer always shows the copyright symbol <code>©</code>. Your site can choose to show a year next to the copyright symbol.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code><a href="#section-config-custom-links">linkPrivacyPolicy</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Customize the link for the privacy policy in the footer. This will allow agencies to provide specific agency or application
              privacy information to visitors as required by state statue.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code><a href="#section-config-custom-links">linkTermsOfUse</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Customize the link for the terms of use in the footer. This will allow agencies to provide specific agency or application
              terms of use information to visitors as required by state statue.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code><a href="#section-config-custom-links">linkTextPrivacyPolicy</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Customize the text for the link for the terms of use in the footer.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code><a href="#section-config-footer_domLocationTarget">showHorizontalRule</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>boolean</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              There are three main sections to the footer. See the <Link to={pageUrls.mockups}>mocks</Link> for a visual example. The top bar of the
              footer is for social media. The next big section is for custom links and content. These top two sections are optional.
              The bottom bar of state of Utah information and links is required. Set this <code>showHorizontalRule</code> setting to true
              in order to have a horizontal separator drawn between the bottom footer bar and the main content.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code><a href="#section-config-footer_domLocationTarget">domLocationTarget</a></code></h3>
      <span className="prop__types">DomLocationTarget</span>
      <p>
        By default, the Utah Footer is placed at the bottom of the page. This can be overridden by
        providing a DOM target in which the footer will render.
      </p>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell>
              <code><a href="#section-config-footer_domLocationTarget">cssSelector</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Place the Utah footer in an element selected by a CSS class.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code><a href="#section-config-footer_domLocationTarget">element</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>HTMLElement</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Place the Utah footer in a specific DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code><a href="#section-config-footer_domLocationTarget">elementFunction</a></code>
            </TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>function</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This function must return a DOM element in to which the Utah footer will be placed. Be aware that the footer code does javascript
              pointer comparison between the old and new value of <code>elementFunction</code> to determine if the value has changed. Make sure
              to pass the same function as used previously or else the footer will be detect a change and will redraw itself. Having functions
              recreated may be an issue with frameworks that create, by default, new functions on every render.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h4 id="section-config-footer_setting" className="mt-spacing">Footer Settings</h4>
      <div>
        The footer settings are a part of the header settings. For convenience you may set the footer settings separately
        from the header settings. Below are examples of the different ways that you can set footer settings.
      </div>
      <br /><br />
      Example of using <code>setUtahHeaderSettings()</code>:
      <PreCodeForCodeString
        className="gray-block mt-spacing"
        codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                footer: {
                  domLocationTarget: {
                    cssSelector: '#footer-target-div',
                  },
                  showHorizontalRule: false,
                }
              }
            )
          `}
      />
      <br />
      Example of setting just footer via <code>setUtahHeaderSettings()</code>:
      <PreCodeForCodeString
        className="gray-block mt-spacing"
        codeRaw={`
            setUtahHeaderSettings(
              {
                /*
                 * notice the lack of other header settings.
                 * Those other settings will be kept,
                 * with the footer settings added or updated.
                 */
                footer: {
                  domLocationTarget: {
                    cssSelector: '#footer-target-div',
                  },
                  showHorizontalRule: false,
                }
              }
            )
          `}
      />
      <br />
      Example of setting just footer settings via <code>setUtahFooterSettings()</code> (these footer settings will be merged with existing header settings):
      <PreCodeForCodeString
        className="gray-block mt-spacing"
        codeRaw={`
            setUtahFooterSettings(
              {
                domLocationTarget: {
                  cssSelector: '#footer-target-div',
                },
                showHorizontalRule: false,
              }
            )
          `}
      />

      <h4 id="section-config-footer_domLocationTarget" className="mt-spacing">domLocationTarget</h4>
      <div>
        By default, the footer appears at the bottom of your application. You can use one of the following configurations
        to place the footer in another location. Be aware that the Utah footer should always be at the bottom of the
        page. These are just convenience settings, in case placing the footer automatically at the bottom causes
        your layout to misbehave.
        <br /><br />
        Example of cssSelector:
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                footer: {
                  domLocationTarget: {
                    cssSelector: '#footer-target-div',
                  }
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
                footer: {
                  domLocationTarget: {
                    element: document.getElementById('footer-container'),
                  }
                }
              }
            )
          `}
        />
        <br />
        Example of elementFunction:
        <PreCodeForCodeString
          allowScrollOverflow
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                footer: {
                  domLocationTarget: {
                    elementFunction: () => document.getElementById('footer-container'),
                  }
                }
              }
            )
          `}
        />
      </div>

      <h4 id="section-config-footer_copyright" className="mt-spacing">copyrightYear</h4>
      <div>
        A copyright symbol is always present in the footer.
        You may choose to put the year after the copyright symbol with this setting.
        <br /><br />
        Example of cssSelector:
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                footer: {
                  copyrightYear: '2025'
                }
              }
            )
          `}
        />
      </div>

      <h4 id="section-config-custom-links" className="mt-spacing">linkPrivacyPolicy, linkTextPrivacyPolicy, linkTermsOfUse</h4>
      <div>
        Customize the privacy policy and/or terms of use links in the footer.
        <br /><br />
        Example:
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            setUtahHeaderSettings(
              {
                ...other settings...,
                footer: {
                  linkPrivacyPolicy: 'https://dts.utah.gov/privacy-policy',
                  linkTextPrivacyPolicy: 'Policy Link',
                  linkTermsOfUse: 'https://dts.utah.gov/terms-of-use'
                }
              }
            )
          `}
        />
      </div>
    </div>
  );
}
