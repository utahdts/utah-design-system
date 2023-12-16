/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import skipLinkScreenshot from '../../../../../../../static/images/screenshots/components/skip-link/SkipLink.png';
import { LightBox } from '../../../../../lightbox/LightBox';
import { PreCodeForCodeString } from '../../../../../preCode/PreCodeForCodeString';
import { pageUrls } from '../../../../../routing/pageUrls';
import { StaticExample } from '../../../../../staticExamples/StaticExample';

export function SkipLinkDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Skip Link</h1>
      <p className="lead-in">
        A skip link is a hidden link that enables people using assistive technology to bypass repetitive elements and jump directly to the main content.
      </p>

      <hr />

      <h2 id="section-example">Examples</h2>
      <StaticExample
        title="Text Links"
        renderedExample={<LightBox image={skipLinkScreenshot} alt="Active skip link" className="flex-3up-gap" />}
        quickTips={(
          <ul>
            <li>The skip link appears when it receives focus.</li>
            <li>The skip link is the first focusable element on the page.</li>
            <li>When the user activates the link it takes them to the main content.</li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="#"
                onClick={() => {
                  // @ts-ignore
                  document.querySelector('.skip-link__link')?.focus();
                }}
              >
                Click here for a demo of the skip link.
              </a>
            </li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Description & Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Always.</strong> This helps users with disabilities or those using assistive technologies to avoid having to listen to or navigate through the same content repeatedly on each page. Assistive technology users are trained to look for skip links.
        </li>
        <li>
          <strong>Utah Header.</strong> The skip link is built into the <Link to={pageUrls.utahHeader}>Utah Header</Link>. Use the setting <code>skipLinkUrl</code> to specify the target for the skip link.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Never</strong> Skip links are necessary to aid low or non-sighted users with whatever accessibility tool they may be using.
        </li>
        <li>
          <strong>Multiple skip links.</strong> Most sites do not need more than one skip link. If you have a complex site and are considering multiple skip links, try using in-line links within the content to jump the user to another section or to another page. Be thoughtful in the implementation, as too many skip links can create clutter when used by assistive technologies.
          See more information on <Link to={pageUrls.links}>Links</Link>.
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Hidden.</strong> Skip links are usually hidden (visually) until they receive focus. It is recommended to change the position and opacity of the button by using CSS. Do not remove it from the page structure by using <code>display: none;</code> or <code>visibility: hidden</code>.
        </li>
        <li>
          <strong>Activation.</strong> Use the <code>Tab</code> button to activate the Skip link and give it focus.
        </li>
        <li>
          <strong>Position.</strong> Position the skip link at the top of the HTML structure so that it is one of the first elements encountered by assistive technologies.
        </li>
        <li>
          <strong>Consistency.</strong> Each page on your site should have access to the skip link and a reference to the main content.
        </li>
        <li>
          <strong>Descriptive text.</strong> Make the skip link text clear and descriptive, indicating its purpose. For example, &ldquo;Skip to main content&rdquo; or &ldquo;Jump to content.&rdquo;
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>Please see contrast requirements for <Link to={pageUrls.button}>Buttons</Link> and <Link to={pageUrls.links}>Links</Link>.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>The <code>Tab</code> button should show the skip link element and give it focus.</li>
        <li><code>Shift + Tab</code>  should return the user to the previous element.</li>
        <li>Users must be able to select the link item using the <code>Enter/Return</code> key.</li>
      </ul>
      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>Skip links need to be visible in the accessibility tree in order for screen readers to access them.</li>
      </ul>
      <h4 id="section-implementation">Implementation</h4>
      <PreCodeForCodeString
        showBackgroundColor
        allowScrollOverflow
        className="mt-spacing"
        codeRaw={`
          <body>
            <a href="#maincontent" class=”skip-link”>
              Skip to main content
            </a>
            <header>...</header>
            ...
            <main id="maincontent">
              <h1>Heading</h1>
              <p>This is the first paragraph</p>
            </main>
          </body>
        `}
      />
    </div>
  );
}
