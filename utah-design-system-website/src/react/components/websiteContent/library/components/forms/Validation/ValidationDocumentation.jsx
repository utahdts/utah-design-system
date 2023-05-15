/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import PreCode from '../../../../../preCode/PreCode';
import pageUrls from '../../../../../routing/pageUrls';
import StaticExample from '../../../../../staticExamples/StaticExample';
import validationScreenshot from '../../../../../../../static/images/screenshots/patterns/form-validation/formValidation.jpg';
import LightBox from '../../../../../lightbox/LightBox';

const propTypes = {};
const defaultProps = {};

function addBanner(role) {
  const banner = document.createElement('span');
  const bannerTarget = document.getElementById('banner-target');
  banner.setAttribute('role', role);
  banner.appendChild(document.createTextNode('Warning: there are errors on the form!'));
  banner.style.display = 'inline-block';
  bannerTarget.appendChild(banner);
}

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
      <StaticExample
        renderedExample={<LightBox image={validationScreenshot} alt="Form Validation" className="flex-3up-gap" />}
        title=""
      />

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
          <strong>Required.</strong> If an input is required, should include a red asterisk <code>*</code> in the label.
          See <a href="#section-screen-readers">screen readers</a> for more information about accessibility requirements for
          required fields.
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
          <strong>Interaction.</strong> Generally, any error should be displayed after the user has interacted with
          the <Link to={pageUrls.forms}>form</Link>; either after each form element loses focus or after the form is submitted.
        </li>
        <li>
          <strong>Reasonable.</strong> If extra characters are added to an input and do not make the answer ambiguous, simply ignore them
          and clean the data before storage. For example a phone number could be entered in different ways: 385-229-0540, 385 229 0540, 3852290540, (385) 229-0540.
          The best user experience would be to clean the data on blur so that the user has a chance to correct it.
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
        <li>Required form inputs should including a red asterisk <code>*</code> and additional text for assistive technologies:
          <ul>
            <li>Include visually hidden text such as &quot;required&quot;, or &quot;mandatory&quot; in the label.
              <br />
              For example:
              <PreCode
                showBackgroundColor
                codeRaw={`
                  <label for="last-name">
                    Last Name
                    <span class="required-star" aria-hidden="true">*</span>
                    <span class="visually-hidden">required</span>
                  </label>
                  <input type="text" id="last-name".../>
                `}
              />
            </li>
            <li>It is recommended if you are following the pattern above that you do <strong>not</strong> include the <code>required</code> html attribute.</li>
          </ul>
        </li>

        <li>
          Each error message should include &quot;Error:&quot; as a <code>visually-hidden</code> prefix.
          <br />For Example:
          <PreCode
            showBackgroundColor
            codeRaw={`
              <label for="last-name">
                Last Name
                <span class="required-star" aria-hidden="true">*</span>
                <span class="visually-hidden">required</span>
              </label>
              <label for="last-name" class="form-error-message">
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
                <div>
                  Last Name
                  <span class="required-star" aria-hidden="true">*</span>
                  <span class="visually-hidden">required</span>
                </div>
                <div class="form-error-message">
                  <span class="visually-hidden">Error: </span>
                  Enter your last name
                </div>
                <input type="text".../>
              </label>
            `}
          />
        </li>
        <li>
          The error summary container should include <code>role=&quot;alert&quot;</code> This will provide a screen reader with an
          audible alert sound followed by the text contained in the banner. (Turn on your screen reader and click the button below to test this.)<br />
          <button className="button" onClick={() => addBanner('alert')} type="button">Show Banner (Screen Reader Test)</button>
          <div>
            <code id="banner-target" />
          </div>
        </li>
        <li>Clicking on an error link in the summary should take the user to the corresponding form element.</li>
        <li>Invalid fields should use <code>aria-invalid=&quot;true&quot;</code>.</li>
      </ul>
    </div>
  );
}

ValidationDocumentation.propTypes = propTypes;
ValidationDocumentation.defaultProps = defaultProps;

export default ValidationDocumentation;
