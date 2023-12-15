/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import { ExternalLink } from '@utahdts/utah-design-system';
import React from 'react';
import { pageUrls } from '../../../../../routing/pageUrls';
import StaticExample from '../../../../../staticExamples/StaticExample';
import { LightBox } from '../../../../../lightbox/LightBox';
import progressBarScreenshotA from '../../../../../../../static/images/screenshots/components/progress-bar/ProgressBar1.png';
import progressBarScreenshotDeterminate from '../../../../../../../static/images/screenshots/components/progress-bar/ProgressBarDeterminate.png';
import progressBarScreenshotIndeterminate from '../../../../../../../static/images/screenshots/components/progress-bar/ProgressBarIndeterminate.png';
import progressBarScreenshotStates from '../../../../../../../static/images/screenshots/components/progress-bar/ProgressBarStates.png';

const propTypes = {};
const defaultProps = {};

function ProgressBarDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Progress Bar</h1>
      <p className="lead-in">A progress bar provides users with a visual indicator as to the wait time and progress involved with system processes like uploads, downloads, installations, etc.</p>

      <hr />

      <h2 id="section-example">Examples</h2>
      <StaticExample
        title="Progress Bar"
        renderedExample={<LightBox image={progressBarScreenshotA} alt="Progress bar showing progress" className="flex-3up-gap" />}
        quickTips={(
          <ul>
            <li><strong>Displaying values.</strong> It is recommended to display values as a percentage (62%) or fraction (1/10).</li>
          </ul>
        )}
      />

      <StaticExample
        title="Determinate Progress Bar"
        renderedExample={<LightBox image={progressBarScreenshotDeterminate} alt="Progress bar with determinate progress" className="flex-3up-gap" />}
        quickTips={(
          <ul>
            <li><strong>Determinate.</strong> Determinate indicators display how long a process will take.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Indeterminate Progress Bar"
        renderedExample={<LightBox image={progressBarScreenshotIndeterminate} alt="Progress bar with indeterminate progress" className="flex-3up-gap" />}
        quickTips={(
          <ul>
            <li><strong>Indeterminate.</strong> Indeterminate indicators signify an unspecified duration of waiting.  For example, when uploading, downloading, and performing tasks associated with system processing.</li>
          </ul>
        )}
      />

      <StaticExample
        title="States"
        renderedExample={<LightBox image={progressBarScreenshotStates} alt="Active, Success and Error" className="flex-3up-gap" />}
        quickTips={(
          <ul>
            <li>The progress bar encompasses three states: active, success, and error. These states are applicable to both indeterminate and determinate progress bars. Upon successful or unsuccessful completion of the process, the progress bar can either persist as a confirmation or validation, or it can be automatically dismissed based on the specific use case and its suitability.
            </li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul>
        <li>
          <strong>Downloading and uploading.</strong> Utilize indeterminate progress bars specifically for system processes, such as downloading, uploading, or processing tasks where the duration of the task is unknown.
        </li>
        <li>
          <strong>Tracking progress during lengthy processes.</strong> Incorporate a progress bar when you need to provide feedback to users during lengthy processes that involve continuous values. This visual indicator serves to keep users informed about the ongoing progress and helps them gauge the completion status of the task at hand.
        </li>
        <li>
          <strong>More than 5 seconds.</strong> When an action takes more than 5 seconds to complete.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          For an unknown amount of time/progress, consider using a <Link to={pageUrls.spinners}>loading spinner</Link>.
        </li>
        <li>
          For loading content in a module, consider using a <Link to={pageUrls.skeletons}>skeleton</Link> instead.
        </li>
        <li>
          For predefined steps, consider using a <Link to={pageUrls.stepIndicator}>step indicator</Link> instead.
        </li>
        <li>
          For processes that take or load in under 5 seconds, consider using a <Link to={pageUrls.spinners}>loading spinner</Link>.
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Indicating that the process has begun.</strong> Consider initiating progress bars at 1% instead of 0%. This approach can effectively convey that the process has begun, providing users with a clear indication of activity right from the start.
        </li>
        <li>
          <strong>Labels and helper text.</strong> Both determinate and indeterminate progress bars feature a label and can include an optional helper text.
        </li>
        <li>
          <strong>Optimal readability.</strong> To ensure optimal readability, position labels consistently above the progress bar. Place helper text below or beside the progress bar, avoiding the inclusion of text inside the progress bar indicator or track. This approach minimizes visual clutter and maintains consistency in text alignment.
        </li>
        <li>
          <strong>Progress bars are not interactive.</strong>
        </li>
        <li>
          <strong>Avoid indeterminate progress bars.</strong> Minimize the use of indeterminate progress bars and try to estimate the duration or number of items involved in a process. While a progress bar may initially start with an unknown amount of progress, you are encouraged to transition to a determinate state, where progress is known, as soon as possible. This allows users to have a clearer understanding of the progress being made and instills a sense of confidence.
        </li>
        <li>
          <strong>Fill from Left to Right.</strong> Fill the progress bar from left to right as progress increases.
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>The progress bar boundary must maintain a <code>3:1</code> contrast ratio or better. This does not include the gray progress bar track.
        </li>
        <li>The label and optional helper text above and below the progress bar must maintain a <code>4.5:1</code> contrast ratio against the background.</li>
        <li>When using custom colors be sure the minimum contrast requirements are met.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>Progress bars are not interactive.</li>
      </ul>

      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>
          Only hide the label when it is absolutely clear to the user which process the progress bar represents. Note that you are still required to pass an appropriate label which will be read by screen readers.
        </li>
        <li>
          Use the <code>&lt;progress&gt;</code> element to construct a progress bar. Remember: The first rule of ARIA: Before you use ARIA, use native HTML elements or attributes first! If you must create a custom component use the following:
          <ul>
            <li>For a determinate progress bar, it outputs an ARIA <code>role=&ldquo;progressbar&rdquo;</code> and uses <code>aria-valuemin</code>, <code>aria-valuemax</code>, and <code>aria-valuenow</code> to indicate the loaded percentage or progress completion to screen reader users.
            </li>
            <li>
              If the progress bar shows the loading of a specific part or region of the application, set <code>aria-busy=&ldquo;true&rdquo;</code> and <code>aria-describedby=&ldquo;progressbar-id]&rdquo;</code> on the related element to ensure assistive technologies can correctly convey this relation to the user.
            </li>
          </ul>
        </li>
        <li>For more detailed ARIA information please see <ExternalLink href="https://www.w3.org/TR/wai-aria-1.1/#progressbar">https://www.w3.org/TR/wai-aria-1.1/#progressbar</ExternalLink></li>
      </ul>
    </div>
  );
}

ProgressBarDocumentation.propTypes = propTypes;
ProgressBarDocumentation.defaultProps = defaultProps;

export default ProgressBarDocumentation;
