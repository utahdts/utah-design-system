/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import PreCode from '../../../../../preCode/PreCode';
import pageUrls from '../../../../../routing/pageUrls';
import StaticExample from '../../../../../staticExamples/StaticExample';

const propTypes = {};
const defaultProps = {};

function ValidationDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Form Validation</h1>
      <p className="lead-in">
        Form validation ensures that the data collected from the user is valid.
        It tells the user if anything needs to be addressed and how to fix it.
      </p>
      <hr />
      <h2 id="section-example">Example</h2>
      <StaticExample renderedExample="Example coming soon!" title="" />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Validation.</strong> Generally, use form validation to ensure the data the user is providing is accurate.</li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Garbage in, garbage out.</strong> See <a href="#section-when-to-use">When to Use</a>.</li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>HTML5.</strong> Avoid using default validation. Each browser handles validation differently. We want
          the experience to be consistent for all users within the State of Utah ecosystem.
        </li>
        <li>
          <strong>Hints.</strong> Give the user a description of the expected value beforehand, rather than communicating
          those requirements with an error message. For example: &quot;Password should be 8 characters long and include 2 numbers.&quot;
        </li>
        <li>
          <strong>Summary.</strong> After submitting the form, an error summary should be included at the top of the page.
          Consider also showing an additional error message near the submit button if the form is very long. The summary should
          include links to each input that needs attention. Make sure the wordings between links and input errors are identical.
        </li>
        <li>
          <strong>Focus.</strong> Set focus on the first input that contains an error.
        </li>
        <li>
          <strong>Each field.</strong> Each input with a validation error should have its own message.
        </li>
        <li>
          <strong>Explicit.</strong> Error messages should be concise and easy to understand, they  should describe the issue and how to
          fix it. Avoid messages that are too generic (&quot;An error occurred.&quot;) or too technical (&quot;Server error 1234.&quot;).
        </li>
        <li>
          <strong>Consistency.</strong> Use the same wording across all <Link to={pageUrls.forms}>forms</Link>.
        </li>
        <li>
          <strong>Interaction.</strong> Generally, any error should be displayed after the user interacted with
          the <Link to={pageUrls.forms}>form</Link>: either after losing focus or after submission.
        </li>
        <li>
          <strong>Reasonable.</strong> If extra characters are added and do not make the answer ambiguous, simply ignore them
          and clean the data before storage. Phone number example: 385-229-0540, 385 229 0540, 3852290540, (385) 229-0540.
          The best user experience would be to clean the data on blur so that the user has a chance to correct it. Another option is to
          use a <Link to={pageUrls.masks}>mask</Link>, but there are accessability and usability issues.
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>Text within an error message must maintain a <code>4.5:1</code> contrast ratio.</li>
        <li>For more information about links accessibility, consult the <Link to={pageUrls.links}>Links</Link> documentation.</li>
        <li>For more information about a specific <Link to={pageUrls.forms}>form</Link> input or <Link to={pageUrls.banners}>banners</Link>, please refer to their documentation.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>After the user submits the form, move the focus to the first input that contains an error.</li>
      </ul>

      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>If an input is required, it should be shown on its label by including a red asterisk <code>*</code>.</li>
        <li>Also include visually hidden text such as &quot;required&quot;, or &quot;mandatory&quot; for those using assistive technology.</li>
        <li>For example: <code>&lt;label&gt;&lt;span class=&quot;visually-hidden&quot;&gt;required&lt;/span&gt; First name*&lt;/label&gt;</code>.</li>
        <li>After submitting, an error summary should be populated in an <code>aria-live</code> region with details about the errors on the form.</li>
        <li>
          Each error message should include <code>Error:</code> as a <code>visually-hidden</code> prefix.
          <br />For Example:
          <PreCode
            showBackgroundColor
            codeRaw={`
              <label for="last-name">Last Name*</label>
              <label for="last-name">
                <span class="visually-hidden">Error: </span>
                Enter your last name
              </label>
              <input type="text" id="last-name".../>
            `}
          />
          <PreCode
            showBackgroundColor
            codeRaw={`
              <label>
                <div>Last Name*</div>
                <div>
                  <span class="visually-hidden">Error: </span>
                  Enter your last name
                </div>
                <input type="text".../>
              </label>            
            `}
          />
        </li>
        <li>The error summary container should include <code>role=&quot;alert&quot;</code></li>
        <li>Clicking on an error link in the summary should take the user to the corresponding form element.</li>
        <li>Invalid fields should use <code>aria-invalid=&quot;true&quot;</code>.</li>
      </ul>
    </div>
  );
}

ValidationDocumentation.propTypes = propTypes;
ValidationDocumentation.defaultProps = defaultProps;

export default ValidationDocumentation;
