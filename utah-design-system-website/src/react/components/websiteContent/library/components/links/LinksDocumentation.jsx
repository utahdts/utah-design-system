/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import PreCode from '../../../../preCode/PreCode';
import pageUrls from '../../../../routing/pageUrls';
import StaticExample from '../../../../staticExamples/StaticExample';
import traxImage from '../../../../../../static/images/trax.jpg';

const propTypes = {};
const defaultProps = {};

function LinksDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Links</h1>
      <p className="lead-in">
        A link is a navigational element composed of a word or group of words that connect the user to more information
        internally or externally in the website. Links can be found in <Link to={pageUrls.verticalMenu}>Vertical Menus</Link>, <Link to={pageUrls.button}>Buttons</Link> or
        throughout text content.
      </p>

      <hr />

      <h2 id="section-example">Examples</h2>
      <StaticExample
        title="Text Links"
        renderedExample={(
          <div>
            <p>This is an example of what a <a href="#section-example">link</a> should appear like within a block of text.</p>
            <p className="mb-auto">This is an example of what an <a href="https://google.com" target="_blank" rel="noreferrer">external link<span className="utds-new-tab-link-a11y"><span className="visually-hidden">opens in a new tab</span><span className="utds-icon-after-external-link" aria-hidden="true" /></span></a> or link that opens in a new tab should appear like within a block of text.</p>
          </div>
        )}
        quickTips={(
          <ul>
            <li>Links must be easily identifiable from the rest of the text on the page.</li>
            <li>Links can navigate the user to an an alternate page on the site, external resources, or to content within the current page.</li>
            <li>Links that navigate the user to an external resource should be clearly identified using the external link icon (<span className="utds-new-tab-link-a11y"><span className="visually-hidden">external link icon</span><span className="utds-icon-after-external-link" aria-hidden="true" /></span> ) or an icon that has a similar meaning. <a href="#external-link-example">See example below.</a></li>
            <li>When a user hovers over the link, there should be a light background that sets it apart from the background while still maintaining a <code>4.5:1</code> contrast ratio to the text.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Image Links"
        renderedExample={(
          <a href="#section-examples"><img src={traxImage} alt="Trax in downtown Salt Lake City" width="250" /></a>
        )}
        quickTips={(
          <ul>
            <li>The image is wrapped in an <code>&lt;a&gt;</code> tag.</li>
            <li><code>Alt</code> text is necessary for users using screen readers.</li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Description & Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Links to sections on a page.</strong> Link to content on the same page by using an <code>id</code> on the target element and a hash
          symbol with the <code>id</code> in the href of the <code>&lt;a&gt;</code> tag.
          <PreCode
            showBackgroundColor
            codeRaw={`
              <a href="#section5">Section 5</a>
              <h2 id="section5">Welcome to Section5</h2>
            `}
          />
        </li>
        <li>
          <strong>Links within the same site or app.</strong> If linking to a page within the same website, it is best practice to keep the user on the
          same page. By doing this, it keeps the user in their current flow and does not require additional actions. Opening the link in a new tab can also
          cause confusion for those using screen readers.
        </li>

        <li>
          <strong>Use an icon for external links or links that open in a new window.</strong> This creates consistency for the user and they will come to know
          what behavior to expect before they click on a link. Additionally, you should provide screen readers information about the behavior of the
          links. See <a href="#section-accessibility">Accessibility</a> section below.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Generic or verbose text.</strong> If you would like to use generic language or have lengthy text to describe the purpose of the link, consider using a <Link to={pageUrls.button}>Button</Link> at the bottom of your content.
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Use meaningful text that is short and to the point.</strong> Avoid using generic language like, &quot;click here&quot; or &quot;view more&quot;. Instead,
          use text that provides the user with a clear understanding of the content to which they will be linked. Long links can be difficult to read
          or can break when being viewed on a mobile device. Using descriptive links can also improve SEO.
        </li>
        <li>
          <strong>Minimize using duplicate text language on a page with multiple links.</strong> This can cause issues using screen readers, when there are multiple links using
          the text, &quot;click here&quot;, &quot;click here&quot;, &quot;click here&quot;, etc.
        </li>
        <li>
          <strong>Clickable phone numbers and email addresses.</strong> Any contact information, like phone numbers and email addresses, should be coded to allow the user to click
          the link immediately to begin an email or dial the number. This creates a better user experience for mobile and desktop users alike.
          <br />
          EXAMPLE:
          <PreCode
            showBackgroundColor
            codeRaw={`
              <a href="tel:3852290540">385-229-0540</a>
              <a href="mailto:dts_ui@utah.gov">Email the Digital Experience Team</a>
            `}
          />
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>Maintain a minimum <code>4.5:1</code> contrast ratio for all interactions (hover, focus) for all links.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>Users must be able to navigate to a link using the tab key. (There must be some indicator that the link has received focus.)</li>
        <li>Users must be able to select the link item using the Enter/Return key</li>
        <li>Using <code>tabindex=&quot;0&quot;</code> inserts the element into the tab order, thus allowing the element to gain focus using the tab key </li>
      </ul>
      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>The native <code>&lt;a&gt;</code> tag is widely supported by assistive technologies and supports keyboard and focus requirements by default.</li>
        <li>
          Using the <code>title</code> attribute can provide the sighted and screen readers user with additional information about the link&apos;s destination if there
          is generic text. However, this should be avoided as it can create confusion since it is only revealed on mouse hover events.
        </li>
        <li>
          The ARIA <code>role=&quot;link&quot;</code> can be used to identify an element as a hyperlink resource but is not needed if you are using the native <code>&lt;a&gt;</code> element
          by itself within text content. Remember: The first rule of ARIA: Before you use ARIA, use native HTML elements or attributes first!
        </li>
        <li id="external-link-example">Links that open in a new tab should give screen reader users adequate warning of this action. For example, the following will read as <code>external link opens in a new tab</code>:
          <PreCode
            showBackgroundColor
            allowScrollOverflow
            className="mt-spacing"
            codeRaw={`
              <a href="https://google.com" target="_blank" rel="noreferrer">
                external link
                <span className="utds-new-tab-link-a11y">
                  <span className="visually-hidden">opens in a new tab</span>
                  <span className="utds-icon-after-external-link" aria-hidden="true" />
                </span>
              </a>
            `}
          />
        </li>
      </ul>
    </div>
  );
}

LinksDocumentation.propTypes = propTypes;
LinksDocumentation.defaultProps = defaultProps;

export default LinksDocumentation;