/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import statusIndicatorScreenshot from '../../../../../../../static/images/screenshots/components/statusIndicator/StatusIndicator.png';
import { LightBox } from '../../../../../lightbox/LightBox';
import { PreCodeForCodeString } from '../../../../../preCode/PreCodeForCodeString';
import { pageUrls } from '../../../../../routing/pageUrls';
import { StaticExample } from '../../../../../staticExamples/StaticExample';

export function StatusIndicatorDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Status Indicator</h1>
      <p className="lead-in">
        A status indicator is a non-interactive element that is used to show the status of a process. They can be a great way to identify the stage of a process at first glance, especially in long lists of data.
      </p>

      <hr />

      <h2 id="section-example">Examples</h2>
      <StaticExample
        title="Status Indicator"
        renderedExample={<LightBox image={statusIndicatorScreenshot} alt="Different statuses" className="flex-3up-gap" />}
      />

      <h2 id="section-guidance" className="mb-spacing">Description & Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Process.</strong> Use a status indicator as a way to show the latest status of a process.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Interactivity.</strong> Avoid using a status indicator if you need the user to perform some action. Use a <Link to={pageUrls.button}>button</Link> or <Link to={pageUrls.tags}>tag</Link> instead.
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Design.</strong> Typically, the text should be all uppercase and have a colored background. Use an appropriate color to convey its meaning (e.g. red for errors, green for success, etc). The text should also convey the status clearly and concisely.
        </li>
        <li>
          <strong>Icon.</strong>  To emphasize significance, an icon can be added to a status indicator. Try to keep it context-appropriate and consistent throughout the site. Generally, don&apos;t mix and match indicators with and without icons.
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>Text and icons in status indicators must maintain a <code>4.5:1</code> contrast ratio.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>None. Indicators are purely informational and are not interactive.</li>
      </ul>
      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>We recommend including some hidden text to help users with screen readers to provide more context. For example &quot;Status is&quot;.
        </li>
      </ul>
      <PreCodeForCodeString
        showBackgroundColor
        allowScrollOverflow
        className="mt-spacing"
        codeRaw={`
          <div><span class=”visually-hidden”>status is</span>published</div>
        `}
      />
    </div>
  );
}
