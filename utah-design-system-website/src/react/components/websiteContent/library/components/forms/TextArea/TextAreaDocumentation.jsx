import { Link } from 'react-router-dom';
import StaticExample from '../../../../../staticExamples/StaticExample';
import pageUrls from '../../../../../routing/pageUrls';
import PreCodeForCodeString from '../../../../../preCode/PreCodeForCodeString';
import LightBox from '../../../../../lightbox/LightBox';
import textAreaScreenshot from '../../../../../../../static/images/screenshots/components/textarea/textArea.png';

const propTypes = {};
const defaultProps = {};
function TextAreaDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Text Area</h1>
      <p className="lead-in">Text area allows the user to enter in any combination of letters, numbers or symbols in a multi-line input box.</p>
      <hr />
      <h2 id="section-example">Example</h2>
      <StaticExample
        title="Text Area Example"
        renderedExample={<LightBox image={textAreaScreenshot} alt="Time Input" className="flex-3up-gap" />}
        quickTips={(
          <div>
            <ul>
              <li>The text area should always have a label.</li>
              <li>Typically the label should be above the text area.</li>
              <li>The boundary for the text area should visually indicate that the user response can be multiple lines.</li>
              <li>If there is a limit to the number of characters that can be used, consider adding a character counter.</li>
              <li>Use visual indicators when a user hovers over the text area versus when the text area has focus to enhance the user experience.</li>
              <li>It is recommended that the text area has real time validation to alert the user to incorrect input or an error.</li>
            </ul>
            <p>
              View more information on <Link to={pageUrls.characterCount}>Character Counters</Link>&#32;
              and <Link to={pageUrls.validation}>Form Validation</Link>.
            </p>
          </div>
        )}
      />

      <h2 className="mb-spacing" id="guidance">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Expected input will exceed a single sentence, or a few words.</strong> Consider the expected length of the user&apos;s response.
          If it is longer than a single sentence, use a text area to indicate to the user they can have a lengthy open ended response.
        </li>
        <li>
          <strong>Limit response length.</strong>&#32;
          If you would like to give the user the option to submit an open-ended response but don&apos;t want it to exceed
          a certain length, consider adding a character counter to the text area. You can also use the maxlength attribute to limit the response.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Set of predetermined responses.</strong>&#32;
          Consider using a select input, checkboxes, or radio buttons if you have a standard set of responses.
        </li>
      </ul>
      <p>
        View more information on <Link to={pageUrls.select}>Select Input</Link>,&#32;
        <Link to={pageUrls.comboBox}>Combo Box</Link>, <Link to={pageUrls.multiSelect}>Multi Select</Link>,&#32;
        <Link to={pageUrls.checkbox}>Checkboxes</Link> or <Link to={pageUrls.radioButton}>Radio Buttons</Link>.
      </p>

      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Width of the text area.</strong> Try to match the width of the text area with the width of the form.</li>
        <li>
          <strong>Consistent look.</strong> Keep the look of your text areas consistent to help the user to easily identify your form inputs.
          (e.g. border-radius: 4px, :focus color matches the primary color, error messages all have the same color, etc.)
        </li>
        <li>
          <strong>Do not use placeholders as a replacement for labels.</strong>
          When a user moves into the text area any placeholder text will disappear and the user will no longer be able to see the purpose
          of the input. In addition, most browsers do not provide a high enough contrast ratio when rendering placeholder text.
        </li>
        <li>
          <strong>Ensure enough space between other form elements</strong>
          There should be enough spacing between the text area and other elements on the page to prevent accidental clicks or taps.
        </li>
        <li>
          <strong>Space for multiple lines of text.</strong>
          You may add “row” and “col” attributes to allow you to specify an exact size of the <code>&#60;textarea&#62;</code>.
          You may also style the size of the text area using css width and height. Setting these is a good idea for consistency,
          as browser defaults can differ.
        </li>
        <li>
          <strong>The name of the text area may correspond to the data point.</strong>
          A <code>name</code> attribute may be used to set the name of the associated data point submitted to the server when the form is submitted.
        </li>
        <li>
          <strong>Clear concise labels.</strong>
          Use clear and concise labels to describe the purpose of the text area.
        </li>
        <li>
          <strong>Real time validation.</strong>
          Generally real time validation is preferred as it creates an easy experience for the user when filling out forms.
          Once the user clicks or tabs out of the text area, then it is appropriate to validate the user&apos;s response.
          Provide error messages that are clear and specific to the error.
        </li>
      </ul>

      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li>The text area and label should have a contrast ratio of <code>4.5:1</code>, with the background color to ensure legibility.</li>
        <li>The text area’s focus state should be <code>3:1</code> contrast ratio.</li>
      </ul>

      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>When navigating the form, the user should be able to move in and out of focus on the text area using the <code>tab</code> key.</li>
      </ul>

      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>Do not use headings for labels. This interferes with assistive technology.</li>
        <li>Text areas should always have an associated label.</li>
      </ul>

      <h4>Examples</h4>
      <PreCodeForCodeString
        className="gray-block"
        codeRaw={`<div>
  <label for="input1">Please Describe<label>
  <textarea id="input1" name="story" rows="5" cols="33">
  <label for="input1" class="error">Some Error</label>
</div>`}
      />
    </div>
  );
}

TextAreaDocumentation.propTypes = propTypes;
TextAreaDocumentation.defaultProps = defaultProps;

export default TextAreaDocumentation;
