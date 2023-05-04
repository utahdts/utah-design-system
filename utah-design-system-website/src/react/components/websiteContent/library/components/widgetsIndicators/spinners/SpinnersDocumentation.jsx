/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import {
  BUTTON_APPEARANCE,
  Button,
  Spinner,
  componentColors
} from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import pageUrls from '../../../../../routing/pageUrls';
import StaticExample from '../../../../../staticExamples/StaticExample';
import spinnerDeterminateScreenshot from '../../../../../../../static/images/screenshots/components/spinners/spinnerDeterminate.jpg';
import spinnerLabelsInsideScreenshot from '../../../../../../../static/images/screenshots/components/spinners/spinnerLabelsInside.jpg';
import LightBox from '../../../../../lightbox/LightBox';

const propTypes = {};
const defaultProps = {};

function SpinnersDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Spinner</h1>
      <p className="lead-in">
        A loading spinner is generally an element with a looping animation that indicates loading is in process and
        the screen is not frozen. Spinners indicate that content will process for an indeterminate amount of time.
      </p>
      <hr />
      <h2 id="section-example">Example</h2>
      <StaticExample
        title="Indeterminate"
        renderedExample={<Spinner size={60} value={0.25} />}
        quickTips={(
          <ul>
            <li>Indeterminate indicators visualize an unspecified wait time.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Determinate"
        renderedExample={(
          <>
            <LightBox image={spinnerDeterminateScreenshot} alt="Determinate Spinner" className="flex-4up-gap" />
            <LightBox image={spinnerLabelsInsideScreenshot} alt="Spinner with Label" className="flex-4up-gap" />
          </>
        )}
        quickTips={(
          <ul>
            <li>Determinate indicators display the approximate progress of an action.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Spinners in Buttons"
        renderedExample={(
          <Button
            appearance={BUTTON_APPEARANCE.SOLID}
            color={componentColors.PRIMARY}
            isBusy
            onClick={() => { /* ... do something ... */ }}
          >
            Submit
          </Button>
        )}
        quickTips={(
          <ul>
            <li>
              Spinners in Buttons. Use spinners within <Link to={pageUrls.button}>buttons</Link> to indicate an action is currently processing
              or taking place. You may also swap the text in the button as needed. For example: <code>Submit</code> → <code>Processing</code>.
            </li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Clicking a button.</strong> Use a loading spinner when dealing with small, inline actions or feedback,
          such as clicking a <Link to={pageUrls.button}>button</Link> that may take some time to process.
        </li>
        <li><strong>Loading takes more than 300ms (.3 seconds):</strong> When an action takes more than <code>300ms</code> to complete.</li>
        <li><strong>Loading content for an entire page.</strong></li>
        <li><strong>Loading content inside of a component.</strong></li>
        <li><strong>Loading content inside of a modal.</strong></li>
        <li><strong>Loading the next step of a workflow.</strong></li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Loading takes less than .3 seconds.</strong> For fast processes that take less than <code>300ms</code>, a spinner is not necessary.</li>
        <li>
          <strong>More than 1 element loading.</strong> When there&apos;s more than 1 element loading, use
          a <Link to={pageUrls.skeletons}>loading skeleton</Link> instead.
        </li>
        <li>
          <strong>High traffic pages.</strong> For high-traffic pages, like a form or a dashboard, consider using
          a <Link to={pageUrls.skeletons}>loading skeleton</Link> because it gives the feeling of speed.
        </li>
        <li>
          <strong>Content with flair.</strong> One alternative to a <Link to={pageUrls.skeletons}>loading skeleton</Link> is to use a
          stylized entrance for page elements. These entrances are not dependent on loading time and can provide a more engaging user experience. For instance,
          you could reveal each section with a fade effect as the user scrolls down the page.
        </li>
        <li>
          <strong>If it fails to get the user&apos;s attention.</strong> If a loading spinner is not attention-grabbing, opt for a <Link to={pageUrls.skeletons}>loading skeleton</Link>.
        </li>
        <li>
          <strong>Long-running processes.</strong> For tasks such as file conversions, uploads, downloads, exporting reports, or data
          importing, it&apos;s better to use <Link to={pageUrls.progressBars}>progress bars</Link> and/or text that
          detail each stage of the process.
        </li>
      </ul>
      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Creating the perception of speed.</strong> Loading spinners leverage motion to give the feeling of speed and, when used correctly,
          have been proven to make wait times more bearable by shifting focus to the loading spinner rather than the wait time.
        </li>
        <li>
          <strong>Use a loading indicator when loading a new page or when committing a global action.</strong> To prevent users from interacting with on-page
          elements while the loading spinner is visible, it is recommended to use an overlay, even if the on-page content is already visible behind the loading spinner.
        </li>
        <li>
          <strong>Avoid showing multiple loading spinners on a single page.</strong> For example, in a list, you might show one loading spinner for the entire group
          of items instead of a loading spinner for each item in the list.
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>The boundaries of the spinner must maintain a <code>3:1</code> contrast ratio against the background.</li>
        <li>When using custom colors be sure the minimum contrast requirements are met.</li>
        <li>When integrated into another component, such as a <Link to={pageUrls.button}>button</Link>, make sure that the active indicator element provides visual contrast of at least <code>3:1</code> against the other component.</li>
        <li>Text in a loading indicator (spinner) must maintain a <code>4.5:1</code> contrast ratio.</li>
      </ul>
      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>None.</li>
      </ul>
      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>While a spinner visually indicates that a process is happening, it should also be announced by assistive technology through the use of <code>aria-live</code>.</li>
        <li>
          DRAFT: As per the WCAG guidelines, it is recommended to permit users to disable superfluous animation, as certain users may become unfocused or
          encounter adverse effects like vertigo or queasiness from animated material. This can be achieved by ensuring that any animation ceases after
          five seconds, and non-essential motion such as loading spinners can be turned off by users.
        </li>
        <li>Add <code>role=&quot;progressbar&quot;</code> to the spinner/loader.</li>
        <li>If not active, apply <code>aria-hidden=&quot;true&quot;</code>, otherwise use <code>aria-hidden=&quot;false&quot;</code>.</li>
        <li>Always include <code>aria-valuetext=&quot;***&quot;</code>, where *** is a textual presentation of the loader, i.e., &quot;Please wait, this data table is loading…&quot;.</li>
        <li>
          Add <code>aria-busy=&quot;true&quot;</code> to a container or element to indicate the element is loading. Once loaded, change the value from <code>&quot;true&quot;</code> to <code>&quot;false&quot;</code>.
          <br />
          For example:
          <ul>
            <li>If loading an entire page, add the attribute to the <code>&lt;body&gt;</code> or the wrapper.</li>
            <li>If loading a specific component (i.e., <Link to={pageUrls.table}>table</Link>), add the attribute to the container of that component.</li>
            <li>If loading content inside a <Link to={pageUrls.modals}>modal</Link>, add the attribute to the modal container.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

SpinnersDocumentation.propTypes = propTypes;
SpinnersDocumentation.defaultProps = defaultProps;

export default SpinnersDocumentation;
