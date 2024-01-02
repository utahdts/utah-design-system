/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import backToTopScreenshot from '../../../../../../../static/images/screenshots/components/backToTop/BackToTop.png';
import { LightBox } from '../../../../../lightbox/LightBox';
import { pageUrls } from '../../../../../routing/pageUrls';
import { StaticExample } from '../../../../../staticExamples/StaticExample';

export function BackToTopDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Back to Top</h1>
      <p className="lead-in">
        The back-to-top button/link lets a user go back to the top of a page without having to scroll. This additional element of navigation is helpful to users with mobility issues. It also provides more comfort on both desktop and mobile devices.
      </p>

      <hr />

      <h2 id="section-example">Examples</h2>
      <StaticExample
        title="Back to Top"
        renderedExample={<LightBox image={backToTopScreenshot} alt="Back to top button" className="flex-3up-gap" />}
      />

      <h2 id="section-guidance" className="mb-spacing">Description & Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Long pages.</strong> Use this component on any page with a significant amount of content.
        </li>
        <li>
          <strong>Button.</strong> Use a <code>&lt;button&gt;</code> when you wish to use javascript to scroll back to the top.
        </li>
        <li>
          <strong>Link.</strong> Use a <code>&lt;a href=&quot;#&quot;&gt;</code> when you wish to allow the browser to scroll back to the top.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Short pages.</strong> If the content does not go below the fold, there is no need for a back-to-top button.
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Position.</strong> Generally, the button should appear after the user has scrolled below the fold and should appear on the bottom right corner of the screen. Once the user is back at the top of the page, the button should disappear.
        </li>
        <li>
          <strong>Appearance.</strong> Typically, the button is displayed on top of the interface. Make sure to add some depth with the use of shadows. Additionally, the use of an icon pointing up is recommended (e.g. a chevron or an arrow).
        </li>
        <li>
          <strong>Limited space.</strong> Optionally, an icon button can be used on mobile devices where space is limited. See icon button requirements for more information.
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>The button boundary must maintain a <code>3:1</code> contrast ratio or better.</li>
        <li>The button text and/or icon must maintain a <code>4.5:1</code> contrast ratio or better.</li>
        <li>The button&apos;s focus state should be a <code>3:1</code> contrast ratio.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>The button should display a visible focus state when users tab to them.</li>
        <li>Avoid using non-standard html markup for a button such as a div tag.</li>
        <li>Typically, the back-to-top button should be the last item in the tabbing sequence.</li>
      </ul>
      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>Remember: The first rule of ARIA: Before you use ARIA, use native HTML elements or attributes first!
          <ul>
            <li>
              If you must use a non-native tag, the button should include <code>role=&quot;button&quot;</code>.
            </li>
            <li>
              For a link use <code>role=&quot;link&quot;</code>
            </li>
          </ul>
        </li>
        <li>The icon should include <code>aria-hidden=&quot;true&quot;</code>.</li>
        <li>When the button is off-screen, make sure it includes <code>aria-hidden=&quot;true&quot;</code> and <code>tabindex=&quot;-1&quot;</code>. That way a user cannot interact with it by mistake.</li>
        <li>For more information, please see the <Link to={pageUrls.links}>links</Link>, <Link to={pageUrls.button}>button</Link> and/or <Link to={pageUrls.iconButton}>icon button</Link> documentation.</li>
      </ul>
    </div>
  );
}
