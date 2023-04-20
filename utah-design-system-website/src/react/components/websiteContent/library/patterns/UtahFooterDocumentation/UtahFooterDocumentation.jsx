/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { ExternalLink } from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import pageUrls from '../../../../routing/pageUrls';
import StaticExample from '../../../../staticExamples/StaticExample';

const propTypes = {};
const defaultProps = {};

function UtahFooterDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Utah Footer</h1>
      <p className="lead-in">
        The footer is the area at the bottom of the website, below the main body of content. It provides a short summary of the
        site&apos;s main content, should a user arrive at the end of the page without finding what they are looking for. It contains
        information regarding social media resources, agency contact and help information, services that are commonly requested, and
        REQUIRED legal information pertaining to State of Utah websites.
      </p>
      <hr />
      <h2 id="section-examples" className="mb-spacing">Examples</h2>
      <StaticExample
        title="Social Media & Quick Contacts"
        renderedExample="Example coming soon"
        quickTips={(
          <ul>
            <li>Colored bar that sits above the main section of the footer.</li>
            <li>
              Contains customizable icon links to an agency&apos;s social media accounts, main email address, and telephone number. The user
              should be able to click on one of these <Link to={pageUrls.iconButton}>Icon Buttons</Link> and be directed to immediately contact someone from the agency or to the
              corresponding social media account.
            </li>
            <li>
              To create continuity between State of Utah websites, it is highly encouraged to keep the placement of social media icon buttons and
              quick contact links above the footer. This will help users gain confidence that the website is indeed a State website and quickly
              find the social media links they are looking for.
            </li>
          </ul>
        )}
      />
      <h3 id="section-division-information">Department/Division Information</h3>
      <ul className="mb-spacing">
        <li>This section has at least 2 columns.</li>
        <li>The first column is reserved for the logo and location and contact information</li>
        <li>The remaining columns can be customized based on the site needs. Suggested columns would be links to common online services or pages located within the site.</li>
      </ul>
      <h3 id="section-required-and-legal">Required: Utah, an official website and Legal Information</h3>
      <ul className="mb-spacing">
        <li>This bar reiterates that this is an official website of the State of Utah. It contains specific required links.</li>
      </ul>

      <h2 id="section-guidance" className="mb-spacing">Description and Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Always use the Footer.</strong> At the very least, the &quot;Utah, an official website&quot; and Legal Information needs to be at the bottom of the website.</li>
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
        <li>The footer is a landmark role used for accessibility. It is recommended that you wrap the footer in a <code>&lt;footer&gt;</code> tag, or, if using a version prior to html5, use the aria <code>role=&quot;navigation&quot;</code> as a fallback.</li>
        <li><ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role">https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role</ExternalLink></li>
        <li>To ensure a good user experience when navigating the site, follow the accessibility guidance for <Link to={pageUrls.verticalMenu}>Vertical Menus</Link> and <Link to={pageUrls.links}>Links</Link>.</li>
      </ul>
    </div>
  );
}

UtahFooterDocumentation.propTypes = propTypes;
UtahFooterDocumentation.defaultProps = defaultProps;

export default UtahFooterDocumentation;
